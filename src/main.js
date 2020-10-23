// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 reset.css 文件
import '@css/reset.css'
// 导入 fastclick.js 文件
import FastClick from 'fastclick'
FastClick.attach(document.body)
//导入iconfont.css
import '@css/iconfont.css'
Vue.config.productionTip = false

// 导入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
  	App,
  },
  template: '<App/>'
})
