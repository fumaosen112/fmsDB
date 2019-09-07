<template>
  
        <li>
            <span>{{text}}</span>
            <router-link :to="href"><i class="iconfont icon-youjiantou"></i></router-link>
        </li>
  
</template>

<script>
export default {
    props:["text","href"]
}
</script>

<style  scoped>
  
   li{
        font-size: 0.16rem;
        flex-basis: 49%;
        height: 0.5rem;
        align-items: center;
        border-top:  0.01rem solid #f3f3f3;
        display:flex; 
        justify-content: space-between;
        
    }
   li a{
        text-decoration: none;
        color: gray;
    }
    li span{
        font-size: 0.16rem;
        color: green;
        
    }
</style>