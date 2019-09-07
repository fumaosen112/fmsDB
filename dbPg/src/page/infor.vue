<template>
  <div class="big_box">
    <home-nav></home-nav>
    <div v-if="srr.length==0" class="imgs">
      <img src="../../static/img/3.gif" alt />
    </div>
    <div class="big_box1" v-else>
      <log-app></log-app>

      <div class="Box">
        <h3>{{srr[0].movieName}}</h3>
        <div class="Box_top">
          <div class="top1">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>

            <p>{{srr[0].infor}}</p>
          </div>
          <img :src="srr[0].img" alt />
        </div>
        <div class="button">
          <button class=" m_1" type="submit">想看</button>
          <button class=" m_2" type="submit">看过</button>
        </div>
        <h5>{{srr[0].movieName}}的简介</h5>
        <div class="dd">{{srr[0].jianjie}}</div>
      </div>

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
import homeNav from "../components/HomeNav";
import logApp from "../components/logApp";
import bigNav from "../components/blar/bigNav";
import radio from "../components/radio1";
import bod3 from "../components/blar/body3";
import bigbox from "../components/blar/bigBox";
export default {
  data() {
    return {
      strr: [],
      srra: [],
      str: "../../static/img/1.gif",
      obj: ["新片速递"],

      srr: [],
      value: ""
    };
  },
  components: {
    homeNav,
    logApp,
    bigNav,
    radio,
    bod3,
    bigbox
  },
  created() {
    console.log(this.$route.params.id);
    this.axios({
      methods: "get",
      url: "/find"
    }).then(data => {
      this.strr = data.data;
    });
    this.axios({
      methods: "get",
      url: "/movie"
    }).then(data => {
      this.srra = data.data.movie;

      this.srr = this.srra.filter((v, i) => {
        if (v.id == this.$route.params.id) {
          return this.srra[i];
        }
      });
      this.value = this.srr[0].num;
    });
  }
};
</script>

<style scoped>
.big_box1 {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.dd {
  font-size: 0.18rem;
}
.Box {
  font-size: 0.18rem;
  width: 3.2rem;
  /* background-color: aqua; */
  min-height: 1rem;
}
.Box_top {
  width: 100%;
  min-height: 0.6rem;
  /* background-color: blueviolet; */
  overflow: hidden;
  display: flex;
}

.Box_top p {
  font-size: 0.14rem;
}
.top1 {
  flex-basis: 80%;
  /* background-color: red; */
  height: 100%;
}
.Box_top img {
  width: 1rem;
  height: 1.2rem;
}
.button {
  margin-top: 0.1rem;
  display: flex;
  widows: 3.2rem;
  justify-content: space-between;
}
.button button {
  font-size:0.18rem;
  flex-basis: 49%;
  color: goldenrod;
  background-color: whitesmoke;
  border: 0.01rem solid goldenrod;
  border-radius: 0.02rem;
}

.imgs {
  display: flex;
  justify-content: center;
}
</style>