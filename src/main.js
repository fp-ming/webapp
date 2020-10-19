// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 reset.css 文件
import './assets/css/reset.css'
// 导入 fastclick.js 文件
import FastClick from 'fastclick'
FastClick.attach(document.body)
//导入iconfont.css
import './assets/css/iconfont.css'
//导入font.js 适配文件
//import './assets/js/font.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
