import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { createPinia, PiniaVuePlugin } from 'pinia'
import { firestorePlugin } from "vuefire";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"
import AddView from "@/views/AddView.vue"
import SetListView from "@/views/SetListView.vue"
import SetsView from "@/views/SetsView.vue"
import SongView from "@/views/SongView.vue"
import { useStore } from "@/stores/main";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/login', name: 'LoginView', component: LoginView },
    { path: '/add', name: 'AddView', component: AddView },
    { path: '/setlist/:id', name: 'SetListView', component: SetListView },
    { path: '/setlists', name: 'SetsView', component: SetsView },
    { path: '/song/:id', name: 'SongView', component: SongView }
  ]
});

Vue.use(VueRouter);

Vue.use(PiniaVuePlugin);
const pinia = createPinia()

new Vue({
  vuetify,
  router,
  pinia,
  render: (h) => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  const store = useStore()
  if (store.user.loggedIn && to.path === '/login') {
    next()
  } else if (!store.user.loggedIn && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})
