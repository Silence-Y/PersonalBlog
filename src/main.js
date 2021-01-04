// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App'

// highlight.js代码高亮指令
// import Highlight from './assets/utils/highlight';
// Vue.use(Highlight);

// import VueHighlightJS from 'vue-highlightjs'
// 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件
// import 'highlight.js/styles/github.css'
// Vue.use(VueHighlightJS)


// Vue-cli生成的工程文件的src/main.js
import hljs from "highlight.js";
import "highlight.js/styles/googlecode.css"; //样式文件
Vue.directive("highlight", function (el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios

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
