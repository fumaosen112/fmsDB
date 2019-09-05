<template>
    <div class="foot">
        <div class="foot_1">
        <div class="foot1">
            <img :src="str" alt="">
        </div>
        <div class="foot2">
            <h3>豆瓣</h3>
            <h4>我们的精神角落</h4>
        </div>
    </div>
        <div class="foot_a"><a href="#">去App Store免费下载ios客户端</a></div>
    </div>
</template>

<script>
export default {
  
    props:["str"]
}
</script>


<style  scoped>
.foot{
    width: 100%;
    /* height: 2.0rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.foot_1{
      width: 100%;
       display: flex;
         justify-content: center;
    align-items: center;
    margin-bottom: 0.1rem;

}
.foot1 img{
    width: 0.7rem;
    height: 0.7rem;
}
.foot2 h3{
   font-size: 0.3rem;
}
.foot2 h4{
    font-size: 0.1rem;
}

.foot_a a{
    font-size: 0.16rem;
    text-decoration: none;
    color:green;

}
</style>