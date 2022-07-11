<template>
  <v-form v-model="valid" lazy-validation ref="form">
    <v-row class="d-flex flex-column login-form">
      <v-col>
        <v-text-field outlined dense required v-model="email" label="Email" autofocus />
        <v-text-field outlined dense required v-model="password" label="Password" type="password" />
        <v-row>
          <v-spacer />
          <v-btn color="primary" type="submit" @click.prevent="submit" :loading="loading">Log In</v-btn>
          <v-spacer />
        </v-row>
      </v-col>
    </v-row>
    {{ error }}
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase/compat/app';

export default Vue.extend({
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      error: '',
      loading: false
    }
  },

  methods: {
    submit () {
      const refForm = this.$refs.form as any
      this.valid = refForm.validate()
      if (this.valid) {
        this.loading = true
        firebase
          .auth()
          .signInWithEmailAndPassword(
            this.email,
            this.password
          ).then(() => {
            // this.$router.replace('/')
            this.loading = false
          }).catch(err => {
            this.error = err.message
            this.loading = false
          });
      }
    }
  }
})
</script>

<style scoped lang="scss">
.login-form {
  margin: 0 auto;
  max-width: 800px;
}
</style>