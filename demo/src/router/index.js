import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import home from '@/components/home'
import aboutUs from '@/components/aboutUs'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Header',
    //   component: Header
    // },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
  ]
})
