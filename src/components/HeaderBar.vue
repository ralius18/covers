<template>
  <header>
    <v-row>
      <h1 class="text-primary-lighten-1">
        <router-link to="/">Brad's Covers</router-link>
      </h1>
      <v-spacer />
      <v-btn v-if="user.loggedIn" @click="logOut">Log Out</v-btn>
      <router-link v-else to="/login">
        <v-btn>Log In</v-btn>
      </router-link>
    </v-row>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { useStore } from '@/stores/main'
import firebase from 'firebase/compat/app';
import { mapState } from 'pinia';

export default Vue.extend({
  name: "HeaderBar",

  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
    }
  },

  computed: {
    ...mapState(useStore, ['user'])
  }
});
</script>

<style scoped type="scss">
header {
  padding: 64px 0;
}
</style>
