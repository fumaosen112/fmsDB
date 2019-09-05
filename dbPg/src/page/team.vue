<template>
    <div>
        <home-nav></home-nav>
            <div v-if="strr.length<=0" class="imgs">
                <img src="../../static/img/3.gif" alt="">
            </div>
        <div v-else>
        <bigteam :data="strr" :tess="tess[0]"></bigteam>
        <bigteam :data="btrr" :tess="tess[1]"></bigteam>
        <bigteam :data="atrr" :tess="tess[2]"></bigteam>
        <bod3 :str="str"></bod3>
    </div>
    </div>
</template>
<script>
import homeNav from "../components/HomeNav"
import bigteam from "../components/blar/bigteam"
import bod3 from "../components/blar/body3"
export default {
     components:{
        homeNav,
        bigteam,
        bod3
    },
    data(){
        return{
            strr:[],
            btrr:[],
            atrr:[],
            tess:["租房找室友","来聊五块钱", "买买"],
              str:'../../static/img/1.gif',
        }
    },
    created(){
        this.axios({
            url:"/xiaozu",
            methods:"get",
        }).then((data)=>{
            console.log(data.data.xiaozua)
            this.strr=data.data.xiaozua;
            this.btrr=data.data.xiaozub;
            this.atrr=data.data.xiaozuc
         
        })
    }
}
</script>

<style scoped>
.imgs{
    display: flex;
    justify-content: center;
}
</style>