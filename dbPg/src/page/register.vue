<template>
  <div class="register_Bigbox">
    <div class="register_back">
      <back></back>
    </div>
    <h1>欢迎加入豆瓣</h1>
    <!-- 登录注册组件 -->
    <!-- <dezh :name="regname" :passw="regpassw"  :title="name" :num="regnum"></dezh> -->
    <div class="dezh_box">
      <input type="text" v-model="name" placeholder="用户" />
      <input type="password" v-model="passw" placeholder="密码" />
      <button @click="send()">注册</button>
    </div>
  </div>
</template>

<script>
import back from "../components/back";
export default {
  data() {
    return {
      // regname:"",
      // regpassw:"",
      name: "",
      passw: ""
    };
  },
  components: {
    back
  },
  methods: {
    send() {
      this.axios({
        methods: "get",
        url: "http://localhost:3000/zhuce",
        params: {
          usename: this.name,
          usepassw: this.passw
        }
      }).then(ok => {
        //  console.log(ok.data.link);
        this.sum = ok.data.link;
        if (this.sum == 1) {
          this.$router.push("/login");
        }
      });
      this.name = "";
      this.passw = "";
    }
  }
};
</script>

<style  scoped>
h1 {
  color: green;
  font-size: 0.5rem;
}
.register_Bigbox {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.register_back {
  width: 100%;
  height: 0.5rem;
  border-bottom: 0.01rem solid gray;
  display: flex;
  align-items: center;
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
</style>