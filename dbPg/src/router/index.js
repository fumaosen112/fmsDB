import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HomeNav'
// import HomeNav from '../components/HomeNav'
import zhuce from '../page/register'
import denglu from "../page/login"

import movie from "../page/movie"
import book from "../page/book"
import team from "../page/team"
import radio from "../page/radio"
import index from "../page/index"
import fenlei from "../page/fenlei"
import infor from "../page/infor"
Vue.use(Router)






export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:"/infor",
      name:"infor",
      component:infor

    },
    {
      path: '/fl',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce,
    },
    {
      path: '/login',
      name: 'login',
      component: denglu,
    },
    {
      path:"/movie",
      name:"movie",
      component:movie,
    },
    {
      path:"/book",
      name:"book",
      component:book,
    },
    {
      path:"/radio",
      name:"radio",
      component:radio,
    },
    {
      path:"/team",
      name:"team",
      component:team,
    }
  
  ]
})
