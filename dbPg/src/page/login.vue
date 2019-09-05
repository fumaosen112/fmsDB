<template>
    <div class="login_BigBox">
        <div class="login_head">
            <div class="login_quxiao">
                <back></back>
            </div>
            <div class="login_little">
                登录豆瓣
            </div>
        </div>
        <!-- 登录注册组件 -->
       <dezh :name="loginname" :passw="loginpassw" :title="name" :num="lognum"></dezh>
       <router-link to="/zhuce">注册账号</router-link>
    </div>
</template>

<script>
// 引入登录注册组件
import dezh from "../components/dezh"
import back from "../components/back"
export default {
    data(){
      return{
        loginname:"",
        loginpassw:"",
        name:"登录",
        lognum:2,
      }
    },
    components:{
        dezh,
         back
    }
}
</script>

<style scoped>
.login_BigBox{
    width: 100%;
    /* height: 4.0rem; */
    /* background-color: pink; */
    display:flex;
    align-items: center;
    flex-direction: column;
}
.login_head{
    width: 100%;
    height: 0.5rem;
    display: flex;
    border-bottom: 0.01rem solid grey;
}
.login_quxiao{
    flex-basis: 15%;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
}


.login_little{
    flex-basis: 85%;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.2rem;
}
 
.login_BigBox a{
    font-size: 0.16rem;
    text-decoration: none;
    color: green;
}
</style>

