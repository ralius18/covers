<template>
  <v-app>
    <v-main class="main">
      <header-bar />
      <router-view class="router-view" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"
import HeaderBar from "@/components/HeaderBar.vue"
import firebase from 'firebase/compat/app'
import { useStore } from '@/stores/main'

export default Vue.extend({
  name: "App",

  components: {
    HeaderBar
  },

  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      const store = useStore()
      store.fetchUser(user)
      if (store.user.loggedIn && this.$route.path === '/login') {
        this.$router.replace('/')
      } else if (!store.user.loggedIn && this.$route.path !== '/login') {
        this.$router.replace('/login')
      }
    })
  }
})
</script>

<style lang="scss">
@import 'assets/base.scss';

.main {
  width: 1200px;
  margin: 0 auto 64px;
  padding: 0 64px !important;
  // padding-bottom: 64px;
}

.v-application {
  min-height: 100vh;
}

.router-view {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
