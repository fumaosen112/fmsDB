<template>
<div class="small">

<router-link :to="{name:'infor',params:{id:dd}}">
    <img :src="urll" alt="">
    <span>{{tess}}</span>
</router-link>
  
</div>
</template>

<script>
export default {
  
    props:["tess","urll","dd"]
}
</script>

<style scoped>
 span{
     font-size: 0.14rem
 }
 .small{
     flex: 1;
     /* height: 1.2rem; */
     /* background-color: rebeccapurple; */
     display: flex;
     flex-direction: column;
     align-items: center;
 }
 .small img{
     width: 1.2rem;
     height: 1.2rem;
     
 }
</style>