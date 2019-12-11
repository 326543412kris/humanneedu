import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import aboutUs from '@/components/aboutUs/aboutUs'
import statusAndMission from '@/components/aboutUs/statusAndMission'
import charity from '@/components/aboutUs/charity'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/charity',
      name: 'charity',
      component: charity
    },
    {
      path: '/statusAndMission',
      name: 'statusAndMission',
      component: statusAndMission
    },
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
