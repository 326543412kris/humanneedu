// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n/i18n'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import App from './App'
import router from './router'
import Router from 'vue-router'

Vue.use(Viewer);
Vue.use(ElementUI);
Vue.use(VueI18n);
Vue.config.productionTip = false;
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
});


