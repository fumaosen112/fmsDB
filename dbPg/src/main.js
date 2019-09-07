// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import {saveCookie,getCookie} from "../static/js/cook"


// 应用axios
import axios from "axios"
Vue.prototype.axios = axios

require("./mock")
Vue.use(ElementUI);
import $ from 'jquery'
Vue.config.productionTip = false
// 引入bootstarp文件
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// 引入阿里小图标
import './assets/font/iconfont.css'






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
});


   
  router.beforeEach((to, from, next) => {
    //  var str=getCookie("link");
    //  var brr=JSON.parse(str).inkl
    //   console.log("ppp")
    //   console.log(brr);
    //      if (!brr) {
    //   alert("对不起您访问的页面必须登录有才能访问!!!!");
    //   next("/login");
    // } else {
    //   next();
    // }
    // if(to.path == "/movie" ||to.path == "/radio" ||to.path == "/book"  ||to.path == "/team"||to.path=="/infor"){
    //   if(!getCookie("link")){
    //     alert("对不起您访问的页面必须登录有才能访问!!!!");
    //     next("/login");
    //   }else{
    //     next();
    //   }
    // }
    // else if(to.path=="/"||to.path=='/login'||to.path == "/fl"){
    //   next();
    // }


    if(to.path == "/radio" ){
        alert("对不起您访问的页面必须登录有才能访问!!!!");
        next("/login");
      }else{
        next();
      }
   
  
  });

