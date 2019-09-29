import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
