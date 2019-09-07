<template>
<div class="Big1">
 <div class="big_nav">
        <span>{{sarr}}</span>
        <router-link to="/">更多</router-link>
</div>
<div class="big">
   
    <smallbox v-for="(v,i) in text" :key="i" :tess="v.movieName" :urll="v.img" :dd="v.id" :xx="v.num"></smallbox>
</div>

</div>
</template>

<script>
import smallbox from "./smallBox"
export default {
   
    props:["text","href","sarr"],
    components:{
        smallbox
    }
}
</script>

<style scoped>
.big{
    width: 100%;
    /* height:1rem; */
    display: flex;
    overflow: auto;
    align-items: center;
    height: 2.0rem;
    /* margin-top:0.1rem; */
    /* margin-bottom: 0.1rem; */
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
</style>