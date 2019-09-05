<template>
    <div class="big_box">
        <div class="big_tess">
            <span>{{tess}}</span>
        </div>
        <div class="big_small_team">
            <steam v-for="(v,i) in data" :key="i" :text="v.group_topic.title" :little="v.title" :imgurl="v.images.small"></steam>
        </div>
        <div class="big_foot">
            <router-link to="/">{{tess}}</router-link>
        </div>
    </div>
</template>


<script>
import steam from "./smallteam"
export default {
    props:["tess","data"],
    components:{
        steam
    }

    
}
</script>

<style  scoped>
.big_box{
    margin-bottom: 0.2rem;
  

}
.big_tess span{
    font-size: 0.18rem;
    font-weight: 700;
}
.big_foot{
    padding: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.big_foot a{
    font-size: 0.16rem;
    text-decoration: none;
    color: green;
}
</style>