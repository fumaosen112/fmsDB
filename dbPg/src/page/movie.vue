<template>
    <div class="movie_box">
        <home-nav></home-nav>
         <div v-if="crr.length<=0" class="imgs">
            <img src="../../static/img/3.gif" alt="">
        </div>
        <div class="movie_box1">
            <!-- <big-box v-for="(v,i) in crr" :key="i" :text="crr[i]" :sarr="obj[i]"></big-box> -->
            <big-box :text="srra" :sarr="obj[0]"></big-box>
             <big-box :text="srrb" :sarr="obj[1]"></big-box>
              <big-box :text="srrc" :sarr="obj[2]"></big-box>
           
        </div>

        <div class="rolling">
            <big-nav  :text="strr" :tess="srrg"></big-nav>
        </div>
        <div class="movie_classify">
           <ul class="list">
                <bod2 v-for="(v,i) in atrr" :key="i" :text="v.title" :href="v.url"></bod2>
           </ul>
        </div>

        <div class="movie_foot">
            <bod3 :str="str"></bod3>
        </div>
    </div>
</template>
<script>
// 引入组件
// 引入组件1
import bod1 from "../components/body1"
import bod2 from "../components/body2"
import bod3 from "../components/blar/body3"
import bigBox from "../components/blar/bigBox"
import bigNav from "../components/blar/bigNav"

// 引入导航组件
import homeNav from "../components/HomeNav"
export default {
     components:{
        homeNav,
        bod1,
        bod2,
        bod3,
        bigBox,
        bigNav
    },
    data(){
        return{
            crr:[],
            obj:["影院热线","免费在线观影",'新片速递'],
            strr:[],
            atrr:[],
            srr:[],
              str:'../../static/img/1.gif',
            //   srra:[],
            //   srrb:[],
            //   srrc:[],
              srrg:"发现好电影"
        }
    },
    created() {
        this.axios({
            methods:"get",
            url:"/find",
        }).then((data)=>{
            this.strr=data.data
        });
        this.axios({
            methods:"get",
            url:"/movie",
        }).then((data)=>{
            this.crr=data.data.movie
            console.log(this.crr);
            // this.srra=data.data.movie[0];
            // this.srrb=data.data.movie[1];
            // this.srrc=data.data.movie[2];

        });
        // this.axios({
        //     methods:"get",
        //     url:"/movieNav",
        // }).then((data)=>{
        //     this.obj=data.data.data
        // });
        this.axios({
            methods:"get",
            url:"/movieType",
        }).then((data)=>{
            this.atrr=data.data
           
        })
    },
     computed: {
       srra(){
            var str=this.crr.filter((v,i)=>{
                if(v.id<6){
                    return this.crr[i]
                }
            });
            return str
       },
       srrb(){
            var str=this.crr.filter((v,i)=>{
                if(v.id>=6&&v.id<11){
                    return this.crr[i]
                }
            });
            return str
       },
       srrc(){
            var str=this.crr.filter((v,i)=>{
                if(v.id<=15&&v.id>=11){
                    return this.crr[i]
                }
            });
            return str
       }
   },
}
</script>

<style scoped>
   .movie_box{
      position: relative;
     
   }
    h1{
        font-size: 0.18rem; 
    }
    .movie_body{
           display: flex;
           flex-direction: column;
           align-items: center;
    }
    .rolling{
        width: 100%;
        height: 1.5rem;
        display: flex;
        overflow:auto;
    }


   .list{
        width: 3.3rem;
        float: left;
        display: flex; 
        justify-content: space-between;
        flex-wrap: wrap;
         flex-direction: row; 
    }
    .movie_classify{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .movie_box1{
        width: 100%;
        /* background-color: hotpink; */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .movie_foot{
        width: 100%;
        /* height:2.0rem; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .imgs{
    display: flex;
    justify-content: center;
}
</style>