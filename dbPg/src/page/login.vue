<template>

  <div class="login_BigBox">
    <div class="login_head">
      <div class="login_quxiao">
        <back></back>
      </div>
      <div class="login_little">登录豆瓣</div>
    </div>
    <!-- 登录注册组件 -->
    <!-- <dezh  :title="name" :num="lognum"></dezh> -->
    <div class="dezh_box">
      <input type="text" v-model="name" placeholder="用户" />
      <input type="password" v-model="passw" placeholder="密码" />
      <button @click="send()" :disabled="bool">登录</button>
      <!-- <input type="submit" value="登录" @click="send()" class="butt" :disabled="bool"> -->
    </div>
    <div class="login_ll">
    <router-link to="/zhuce">注册账号</router-link>
    <p @click="dell()">注销账号</p>
    </div>
  </div>
</template>

<script>
// 引入登录注册组件
// import dezh from "../components/dezh"
import back from "../components/back";

import {saveCookie, getCookie} from "../../static/js/cook";
export default {
  data() {
    return {
      // loginname:"",
      // loginpassw:"",
      name: "",
      passw: "",
      sum:'',
      infor:'',
      bool:true,
      // lognum:2,
    };
  },
  components: {
    back
  },
  methods:{
    send() {
      this.axios({
        methods: "get",
        url: "http://localhost:3000/login",
        params: {
          usename: this.name,
          usepassw: this.passw
        }
      }).then(ok => {
        //  console.log(ok.data.link);
        this.sum = ok.data.link;
        this.infor=ok.data.session
        // console.log(this.infor)
        if (this.sum == 2) {
          saveCookie("link",JSON.stringify(this.infor),7)
          this.$router.push("/");
        } else {
          console.log(this.sum);
          alert("密码或账户错误");
        }
      });
      this.name = "";
      this.passw = "";
    },
    dell(){
        saveCookie("link",JSON.stringify(this.infor),-1);
    }
  },
   watch:{
        name(){
            if(this.name!=""&& this.passw!=""){
                this.bool=false;
            }else{
                this.bool=true;
            }

        },
        passw(){
            if(this.name!=""&& this.passw!=""){
                this.bool=false;
            }else{
                this.bool=true;
            }
        }

        
    }
};
</script>

<style scoped>
.login_BigBox {
  width: 100%;
  /* height: 4.0rem; */
  /* background-color: pink; */
  display: flex;
  align-items: center;
  flex-direction: column;
}
.login_BigBox p{
    font-size: 0.18rem;
}
.login_head {
  width: 100%;
  height: 0.5rem;
  display: flex;
  border-bottom: 0.01rem solid grey;
}
.login_quxiao {
  flex-basis: 15%;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
}

.login_little {
  flex-basis: 85%;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.2rem;
}

.login_BigBox a {
  font-size: 0.16rem;
  text-decoration: none;
  color: green;
}

.dezh_box {
  width: 3.4rem;
  margin-top: 0.2rem;
  /* height: 2.68rem; */
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dezh_box input {
  font-size: 0.16rem;
  width: 2.8rem;
  height: 0.55rem;
  margin-bottom: 0.1rem;
  border: 0.01rem solid gray;
}
.dezh_box button {
  width: 2.85rem;
  height: 0.55rem;
  background-color: green;
  border: 0.01rem solid gray;
  border-radius: 0.02rem;
  outline: none;
  font-size: 0.18rem;
  color: beige;
}
.login_ll{
    display: flex;
    justify-content: space-between;
    width: 2.90rem;
    margin-top: 0.05rem;
}
.login_ll p{
    color: green;
}
</style>

