<template>
   <div class="nav_box">
      <div class="nav_left">
           <router-link to="/">豆瓣</router-link>
      </div>
      <div class="nav_right">
        <!-- <router-link to="/movie">电影</router-link>
        <router-link to="/book">图书</router-link>
        <router-link to="/radio">广播</router-link>
        <router-link to="/team">小组</router-link> -->
        <router-link v-for="(v,i) in obj" :key="i" :to="v.url" :style="{color:v.color}">{{v.tltle}}</router-link>
        <router-link to="/fl"><i class="iconfont icon-sousuo"></i></router-link>
      </div>
   </div>
</template>

<script>

export default {
    data(){
        return{
            obj:[
                {tltle:"电影",url:'/movie',color:"#42BD56"},
                {tltle:"图书",url:'/book',color:"#FF4055"},
                {tltle:"广播",url:'/radio',color:"#4F9DED"},
                {tltle:"小组",url:'/team',color:"#CC3344"},
            ]
        }
    }
}
</script>

<style scoped>
 .nav_box{
     width: 100%;
     height: 0.5rem;
     display: flex;
     align-items: center;
     justify-content: space-between;
     border-bottom: 0.01rem solid gray;
     margin-bottom: 0.1rem;
    
    
 }
 .nav_box a{
     font-size: 0.18rem;
     text-decoration: none;
 }
 .nav_left{
     flex-basis: 40%;
     height: 0.5rem;
     display: flex;
    justify-content: center;
    align-items: center;
 }
  .nav_left a{
      font-size: 0.25rem;
      font-weight: 900;
      color: green;
  }
 .nav_right{
     flex-basis: 60%;
     height: 0.5rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
 }
 .nav_right a:nth-of-type(5) i{
     font-size: 0.4rem;
     color: green;
 }
</style>