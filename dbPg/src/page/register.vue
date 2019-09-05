<template>
    <div class="register_Bigbox">
      
        <div class="register_back">
              <back></back>
        </div>
        <h1>欢迎加入豆瓣</h1>
        <!-- 登录注册组件 -->
        <dezh :name="regname" :passw="regpassw"  :title="name" :num="regnum"></dezh>

    </div>
</template>

<script>
// 引入登录注册组件
import dezh from "../components/dezh"
import back from "../components/back"
export default {
    data(){
        return{
            regname:"",
            regpassw:"",
            name:"注册",
            regnum:1,
           
        }
    },
    components:{
         dezh,
         back
    }
    
}
</script>

<style  scoped>
    h1{
        color: green;
        font-size:0.5rem;
    }
     .register_Bigbox{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
  .register_back{
    width:100%;
    height:0.5rem;
    border-bottom:0.01rem solid gray;
    display: flex;
    align-items: center;
  
  }
</style>