// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 应用axios
import axios from "axios"
Vue.prototype.axios = axios

require("./mock")

import $ from 'jquery'
Vue.config.productionTip = false
// 引入bootstarp文件
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 引入阿里小图标
import './assets/font/iconfont.css'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
