<template>
<div class="small">
    <img :src="imgurl" alt="">
    <span>{{text}}</span>
</div>
</template>

<script>
export default {
    props:["text","imgurl"]
}
</script>


<style  scoped>
span{
     font-size: 0.14rem
 }
 .small{
     flex: 1;
     height: 1rem;
     /* background-color: rebeccapurple; */
     display: flex;
     flex-direction: column;
     align-items: center;
 }
 .small img{
     width: 0.8rem;
     height: 0.8rem;
     
 }
</style>