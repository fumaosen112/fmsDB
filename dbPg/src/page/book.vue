<template>
  <div class="book_Box">
    <home-nav></home-nav>
    <div v-if="srra.length<=0" class="imgs">
      <img src="../../static/img/3.gif" alt />
    </div>
    <div v-else>
      <div class="book_box1">
        <big-box :text="srra" :sarr="obj[0]"></big-box>
        <big-box :text="srrb" :sarr="obj[1]"></big-box>
        <bookinfor :sarr="obj[2]"></bookinfor>
        <big-box :text="srrc" :sarr="obj[2]"></big-box>
      </div>
      <div class="rolling">
        <big-nav :text="strr" :tess="obj[2]"></big-nav>
      </div>

      <div class="movie_classify">
        <ul class="list">
          <bod2 v-for="(v,i) in atrr" :key="i" :text="v.title" :href="v.url"></bod2>
        </ul>
      </div>
      <bod3 :str="str"></bod3>
    </div>
  </div>
</template>
<script>
import bigBox from "../components/blar/bigBox";
import homeNav from "../components/HomeNav";
import bookinfor from "../components/bookInfor";
import bigNav from "../components/blar/bigNav";
import bod2 from "../components/body2";
import bod3 from "../components/blar/body3";
export default {
  components: {
    homeNav,
    bigBox,
    bookinfor,
    bigNav,
    bod2,
    bod3
  },
  data() {
    return {
      strr: [],
      crr: [],
      obj: ["最受关注图书|虚构类", "最受关注图书|非虚构类", "发现好书"],
      atrr: [],
      str: "../../static/img/1.gif"
    };
  },
  created() {
    this.axios({
      methods: "get",
      url: "/book"
    }).then(data => {
      this.crr = data.data.book;
      // this.srra=data.data.book[0];
      // this.srrb=data.data.book[1];
      // this.srrc=data.data.book[2]
      // console.log(this.strr)
    });
    this.axios({
      methods: "get",
      url: "/goodbook"
    }).then(data => {
      this.strr = data.data;
    });

    this.axios({
      methods: "get",
      url: "/movieType"
    }).then(data => {
      this.atrr = data.data;
    });
  },
  computed: {
    srra() {
      var str = this.crr.filter((v, i) => {
        if (v.id < 6) {
          return this.crr[i];
        }
      });
      return str;
    },
    srrb() {
      var str = this.crr.filter((v, i) => {
        if (v.id >= 6 && v.id < 11) {
          return this.crr[i];
        }
      });
      return str;
    },
    srrc() {
      var str = this.crr.filter((v, i) => {
        if (v.id <= 15 && v.id >= 11) {
          return this.crr[i];
        }
      });
      return str;
    }
  }
};
</script>

<style scoped>
.rolling {
  width: 100%;
  /* height: 1.6rem; */
  display: flex;
  overflow: auto;
}

.list {
  width: 3.3rem;
  float: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
}
.movie_classify {
  width: 100%;
  display: flex;
  justify-content: center;
}
.imgs {
  display: flex;
  justify-content: center;
}
</style>