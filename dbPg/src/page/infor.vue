<template>
    <div class="big_box">
         <home-nav></home-nav>
         <div v-if="srr.length==0" class="imgs">
            <img src="../../static/img/3.gif" alt="">
        </div>
         <div class="big_box1" v-else>
         <log-app></log-app>
        <div class="dd" >{{srr[0].jianjie}}</div>
        <div class=""></div>
        
         <bigbox :text="srra" :sarr="obj[0]"></bigbox>
         <radio></radio>
         <radio></radio>
         <radio></radio>
         <radio></radio>
          <big-nav :text="strr"></big-nav>
         <bod3 :str="str"></bod3>
       
         </div>
        
    </div>
</template>
<script>
import homeNav from "../components/HomeNav"
import logApp from "../components/logApp"
import bigNav from "../components/blar/bigNav"
import radio from "../components/radio1"
import bod3 from '../components/blar/body3'
import bigbox from "../components/blar/bigBox"
export default {
    data(){
        return{
            strr:[],
            srra:[],
            str:'../../static/img/1.gif',
             obj:['新片速递'],
          
            srr:[],
           
        }
    },
    components:{
        homeNav,
        logApp,
        bigNav,
        radio,
        bod3,
        bigbox
    },
    created() {
          console.log(this.$route.params.id)
           this.axios({
            methods:"get",
            url:"/find",
        }).then((data)=>{
            this.strr=data.data
        });
         this.axios({
            methods:"get",
            url:"/movie"
        }).then((data)=>{
            this.srra=data.data.movie;
             this.srr=this.srra.filter((v,i)=>{
           if(v.id==this.$route.params.id){
              return this.srra[i]
           }
        });
        });

        
      

    },
}
</script>

<style scoped>
.big_box1{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}
.dd{
    font-size: 0.18rem
}
</style>