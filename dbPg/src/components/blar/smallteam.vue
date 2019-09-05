<template>
    <div class="small_box">
        <div class="small_top">
            <img :src="imgurl" alt="">
            <h3>{{little}}</h3>
        </div>
        <div class="small_bottom">
            {{text}}
        </div>
    </div>
</template>


<script>
export default {
  props:["little","imgurl","text"]
}
</script>

<style  scoped>
.small_box{
    width: 100%;
    /* min-height: 1.5rem; */
      border-bottom: 0.01rem solid gray;
      padding-bottom: 0.05rem;
}
.small_top{
    width: 100%;
    /* min-height: 1.0rem; */
    display: flex;
    align-items: center;
}
.small_top img{
    width: 0.5rem;
    height: 0.5rem;

}
.small_top h3{
    font-size: 0.2rem;
    font-weight: 100;
}
.small_bottom{
    font-size: 0.16rem;
}
</style>