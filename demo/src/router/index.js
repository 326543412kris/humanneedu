import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import growthSystem from '@/components/growthSystem'
import aboutUs from '@/components/aboutUs/aboutUs'
import statusAndMission from '@/components/aboutUs/statusAndMission'
import charity from '@/components/aboutUs/charity'
import doingNow from '@/components/aboutUs/doingNow'
import coreTeam from '@/components/aboutUs/coreTeam'
import earlyPicLesson from '@/components/children/earlyPicLesson'
import atlas from '@/components/children/atlas'
import friendlyLesson from '@/components/children/friendlyLesson'
import leadershipLesson from '@/components/children/leadershipLesson'
import greenPhilosophy from '@/components/children/greenPhilosophy'
import guardiansOfNature from '@/components/children/guardiansOfNature'
import gardenSchool from '@/components/children/gardenSchool'
import preface from '@/components/love/preface'
import course from '@/components/love/courseCompass'
import forgottenRabbit from '@/components/picBook/forgottenRabbit'
import max from '@/components/picBook/max'
import raindog from '@/components/picBook/raindog'
import raincat from '@/components/picBook/raincat'
import buddy from '@/components/picBook/buddy'
import ready from '@/components/picBook/ready'
import koko from '@/components/picBook/koko'
import cookie from '@/components/picBook/cookie'
import fur from '@/components/picBook/fur'
import dakota from '@/components/picBook/dakota'
import voiceSalon from "../components/voiceSalon";
import certify from "../components/certificate";
import workshop from "../components/workshop";
import source from "../components/source";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/certificate',
      name: 'certificate',
      component: certify
    },
    {
      path: '/source',
      name: 'source',
      component: source
    },
    {
      path: '/workshop',
      name: 'workshop',
      component: workshop
    },
    {
      path: '/voiceSalon',
      name: 'voiceSalon',
      component: voiceSalon
    },
    {
      path: '/courseCompass',
      name: 'course',
      component: course
    },
    {
      path: '/max',
      name: 'max',
      component: max
    },
    {
      path: '/raindog',
      name: 'raindog',
      component: raindog
    },
    {
      path: '/raincat',
      name: 'raincat',
      component: raincat
    },
    {
      path: '/buddy',
      name: 'buddy',
      component: buddy
    },
    {
      path: '/ready',
      name: 'ready',
      component: ready
    },
    {
      path: '/koko',
      name: 'koko',
      component: koko
    },
    {
      path: '/cookie',
      name: 'cookie',
      component: cookie
    },
    {
      path: '/fur',
      name: 'fur',
      component: fur
    },
    {
      path: '/dakota',
      name: 'dakota',
      component: dakota
    },
    {
      path: '/forgottenRabbit',
      name: 'forgottenRabbit',
      component: forgottenRabbit
    },
    {
      path: '/growthSystem',
      name: 'growthSystem',
      component: growthSystem
    },
    {
      path: '/charity',
      name: 'charity',
      component: charity
    },
    {
      path: '/preface',
      name: 'preface',
      component: preface
    },
    {
      path: '/friendlyLesson',
      name: 'friendlyLesson',
      component: friendlyLesson
    },
    {
      path: '/leadershipLesson',
      name: 'leadershipLesson',
      component: leadershipLesson
    },
    {
      path: '/greenPhilosophy',
      name: 'greenPhilosophy',
      component: greenPhilosophy
    },
    {
      path: '/guardiansOfNature',
      name: 'guardiansOfNature',
      component: guardiansOfNature
    },
    {
      path: '/gardenSchool',
      name: 'gardenSchool',
      component: gardenSchool
    },
    {
      path: '/atlas',
      name: 'atlas',
      component: atlas
    },
    {
      path: '/coreTeam',
      name: 'coreTeam',
      component: coreTeam
    },
    {
      path: '/doingNow',
      name: 'doingNow',
      component: doingNow
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
    {
      path: '/earlyPicLesson',
      name: 'earlyPicLesson',
      component: earlyPicLesson
    },
  ]
})
