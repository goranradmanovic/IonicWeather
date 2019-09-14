import Vue from 'vue'
//import Router from 'vue-router'
import { IonicVueRouter } from '@ionic/vue' // Import Ionic router
import Home from './views/Home.vue'

//Vue.use(Router)
Vue.use(IonicVueRouter) //Use ionic router

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
