<template>
    <div class="radio_box">
        <home-nav></home-nav>
        <log-app></log-app>
       <div class="radio_big">
          <log-tu></log-tu>
       </div>
       <div class="radio">
           <radio1></radio1>
           <radio1></radio1>
           <radio1></radio1>
           <radio1></radio1>
           <radio1></radio1>
           <radio1></radio1>
          <router-link to="/radio">显示更多</router-link>
       </div>
       <bod3 :str="str"></bod3>
    </div>
</template>
<script>
import homeNav from "../components/HomeNav"
import logTu from '../components/logTu'
import logApp from '../components/logApp'
import radio1 from "../components/radio1"
import bod3 from "../components/blar/body3"
export default {
     components:{
        homeNav,
        logTu,
        logApp,
        radio1,
        bod3
    },
    data() {
        return {
              str:'../../static/img/1.gif',
        }
    },
}
</script>

<style scoped>
.radio_box{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.radio_big{
    width: 3.2rem;
    border-bottom: 0.01rem solid gray;
    display: flex;
    justify-content: center;
}
.radio a{
    font-size: 0.16rem;
    color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

}
</style>