<template>
<div class="small">

<router-link :to="{name:'infor',params:{id:dd}}">
    <img :src="urll" alt="">
    <span>{{tess}}</span>
     <div class="xixi">
         <el-rate
                v-model="value"
                 disabled
                show-score
                 text-color="#ff9900"
                score-template="{value}">
</el-rate>
     </div>
</router-link>
  
</div>
</template>

<script>
export default {
  
    props:["tess","urll","dd","xx"],
    data(){
        return{
            value:'',
        }
    },
    created() {
        this.value=this.xx
    },
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
 .small a{
     text-decoration: none;
     color: gray;
     
 }
 .small img{
     width: 1.0rem;
    height: 1.2rem;
     
 }

</style>