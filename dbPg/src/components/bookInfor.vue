<template>
  <div class="Big1">
 <div class="big_nav">
        <span>{{sarr}}</span>
        <router-link to="/">更多</router-link>
</div>
<div class="big">
   <img src="../../static/img/5.jpg" alt="">
   <div class="big_1">
       <div class="big_11"> <h3>造物</h3><h3>￥68</h3></div>
      
       <p>改变世界的玩物图典，3000的图里与冒险</p>
   </div>
</div>

</div>
</template>

<script>
export default {
      props:["sarr"],
}
</script>

<style  scoped>
.big{
    width: 100%;
    /* height:1rem; */
    display: flex;
    /* align-items: center; */
    margin-top:0.1rem;
    margin-bottom: 0.1rem;
    /* background-color: orange; */
}
.big_nav{
    width: 100%;
    display: flex;
    justify-content: space-between;

}
.big_nav{
    font-size: 0.16rem;
    font-weight: 700;
}
.Big1{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.Big1 a{
    color: green;
    text-decoration: none;
}
.big img{
    width: 0.9rem;
    height: 1.0rem;
}
.big_1 h3{
    line-height: 0rem;
    font-size: 0.18rem;
    
    
}
.big_1 p{
    font-size: 0.14rem;
    
}
.big_11{
   display: flex;
    justify-content: space-between;
}
.big_11 h3{
    font-weight: 700;
}
.big_11 h3:nth-of-type(2){
    color: red;
}
</style>