<template>
     <div class="dezh_box"> 
        
        <input type="text" v-model="name" placeholder="用户">
        <input type="password" v-model="passw" placeholder="密码">
        <button @click="send()">{{title}}</button>
      </div>
</template>

<script>
export default {
    props:["name","passw","title","num"],
    data(){
        return{
            sum:""
        }
    },
    methods: {
        send(){
            if(this.num==1){
                    this.axios({
                        methods:"get",
                        url:"http://localhost:3000/zhuce",
                     params:{
                        usename:this.name,
                        usepassw:this.passw
                        }
                     }).then((ok)=>{
                        //  console.log(ok.data.link);
                         this.sum=ok.data.link;
                            if(this.sum==1){
                                    this.$router.push('/login')
                    }
                    });
                   
                        this.name="";
                        this.passw="";
            }else if (this.num==2){
                 this.axios({
                        methods:"get",
                        url:"http://localhost:3000/login",
                     params:{
                        usename:this.name,
                        usepassw:this.passw
                        }
                    }).then((ok)=>{
                        //  console.log(ok.data.link);
                         this.sum=ok.data.link;
                         if(this.sum==2){
                               this.$router.push('/')
                         }
           
                    });
                        this.name="";
                        this.passw="";
                 }
            }
        },
    }
</script>

<style scoped>
 .dezh_box{
        width:3.4rem;
        margin-top: 0.2rem;
        /* height: 2.68rem; */
        /* background-color: red; */
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
    .dezh_box input{
        width: 2.8rem;
        height: 0.55rem;
        margin-bottom: 0.1rem;
        border:0.01rem solid gray;
    }
    .dezh_box button{
        width: 2.85rem;
        height: 0.55rem;
        background-color: green;
        border:0.01rem solid gray;
        border-radius: 0.02rem;
        outline: none;
        font-size: 0.18rem;
        color: beige;
    }
</style>