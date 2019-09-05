<template>
    <div class="fenlei_Box">
       <home-nav></home-nav>
         <div v-if="strr.length<=0" class="imgs">
                <img src="../../static/img/3.gif" alt="">
        </div>
    <div v-else>
    <div class="fL_box1">
        <fenlei v-for="(v,i) in strr" :key="i" :name="v.name" :title="v.title" :brr="v.color"></fenlei>
    </div>
    <div class="fL_box2">
        <router-link to="/zhuce">注册账号</router-link>
        <router-link to="/login">登录豆瓣</router-link>
        <router-link to="/zhuce">使用桌面版</router-link>
        <router-link to="/zhuce">使用豆瓣APP</router-link>
    </div>
    </div>
    </div>
</template>

<script>
import homeNav from "../components/HomeNav"
import fenlei from "../components/fenlei1"
export default {
     components:{
        homeNav,
        fenlei,
      
    },
    data(){
        return{
            strr:[]
        }
    },
    created(){
        this.axios({
            url:"/fenlei",
            methods:"get",
        }).then((data)=>{
            this.strr=data.data;
            console.log(this.strr);
        })
    }
}
</script>

<style scoped>
.fL_box1{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.fL_box2{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.fL_box2 a{
    margin: 0.01rem;
    padding: 0.05rem;
    border: 0.01rem solid gainsboro;
    text-align: center;
    flex-basis: 35%;
    font-size: 0.16rem;
    text-decoration: none;
    color: green;
}

.imgs{
    display: flex;
    justify-content: center;
}
</style>