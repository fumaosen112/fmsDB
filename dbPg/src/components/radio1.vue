<template>
    <div class="ra_box">
        <div class="ra_boxTop">
            <div class="ra_boxTop1">
            <img src="../../static/img/1.gif" alt="">
            <div class="ra_boxTop_right">
                <h3>豆瓣写了日记</h3>
                <p>2017-9-05 19:05:03</p>
            </div>
            </div>
            <div class="ra_boxBotoom">
                <div class="ra_boxB1">
                    <h3>豆瓣App</h3>
                    <p>可以写读书笔记，可以写读书笔记，哈哈哈哈，豆瓣APP</p>
                </div>
                <div class="ra_boxB2">
                    <div class="B2">
                    <i class="iconfont icon-dianzan"></i>
                    <i class="iconfont icon-huifu"></i>
                    <i class="iconfont icon-zhuanfa"></i>
                </div>
                <i class="iconfont icon-shenglvehao"></i>
             
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style  scoped>
.ra_boxTop{
    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom: 0.01rem solid gray;
    padding-bottom: 0.04rem;
}
.ra_box{
    margin-bottom: 0.2rem;
}
.ra_boxTop h3{
    font-size: 0.18rem;
    /* line-height: 0rem; */
}
.ra_boxTop p{
    font-size: 0.14rem;
}
.ra_boxTop img{
    width: 0.5rem;
    height: 0.5rem;
}
.ra_boxTop1{
    display: flex;
    align-items: center;
    width: 3.0rem;
}
.ra_boxBotoom{
    width: 3.0rem;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
}
.ra_boxB1{
    width: 2.5rem;
    border: 0.01rem solid gray;
    margin-left: 0.5rem;
}
.ra_boxB2{
     margin-left: 0.5rem;
    width: 2.5rem;

    display: flex;
    justify-content: space-between;
}
.B2 i{
    padding: 0 0.03rem;
}
</style>