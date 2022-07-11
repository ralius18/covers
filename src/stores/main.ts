import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    user: {
      loggedIn: false,
      data: null
    }
  }),

  actions: {
    setLoggedIn(value) {
      this.$state.user.loggedIn = value
    },
    setUser(data) {
      this.$state.user.data = data
    },
    fetchUser(user) {
      this.setLoggedIn(user !== null)
      if (user) {
        this.setUser(user)
      } else {
        this.setUser(null)
      }
    }
  }
})