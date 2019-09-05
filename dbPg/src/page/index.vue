<template>
<div>
  <home-nav></home-nav>
   <div v-if="indexSrr.length<=0" class="imgs">
            <img src="../../static/img/3.gif" alt="">
        </div>
    <div class="index_Box"  v-else>
        <div class="index_head">
            <router-link to="/movie">影院热映</router-link>
            <router-link to="/">欧美新碟榜</router-link>
            <router-link to="/zhuce">注册账号</router-link>
            <router-link to="/login">登录豆瓣</router-link>
        </div>
       
    </div>
    
    <index v-for="(v,i) in indexSrr" :key="i" :title="v.title" :imgurl="v.image" :dIlittle="v.category_name" > </index>
</div>
</template>

<script>
import index from "../components/index1"
import homeNav from "../components/HomeNav"

export default {
       components:{
        homeNav,
        index
    },
    data(){
        return{
            indexSrr:[]
        }
    },
    created() {
        this.axios({
            methods:"post",
            url:"/index",
        }).then((data)=>{
        //    console.log(data.data[1].content)
            this.indexSrr=data.data;
            //  console.log(this.indexSrr);
        })
    },
  
}
</script>

<style scoped>
.index_Box{
    width: 100%;
    min-height:1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.index_head{
    width: 3.4rem;
    height: 1.09rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
}
.index_head a{
    flex-basis: 49%;
    font-size: 0.2rem;
    height: 0.52rem;
    text-align: center;
    background-color: #f1f1f1;
    line-height: 0.52rem;
    text-decoration: none;
    color: black;

}
.imgs{
    display: flex;
    justify-content: center;
}
</style>