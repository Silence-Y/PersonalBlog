// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import router from './router'
import App from './App'



Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios


// 路由跳转后定位
// router.beforeEach((to, from, next) => {
//   // chrome
//   document.body.scrollTop = 0
//   // firefox
//   document.documentElement.scrollTop = 0
//   // safari
//   window.pageYOffset = 0
//   next()
// })
// router.afterEach((to,from,next) => {
//   window.scrollTo(0,0);
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    router,
    App
  },
  template: '<App/>'
})
