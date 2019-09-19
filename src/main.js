import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {
  routes
} from "./router.js"

import store from "./store/store.js"






Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
