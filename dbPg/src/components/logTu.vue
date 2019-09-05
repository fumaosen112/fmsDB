<template>
    <div class="radio_login">
           <div class="radio_log_left">
            <i class="iconfont icon-weidenglu-touxiang"></i>
           <span>请先登录</span>
        </div>
           <div class="radio_log_right">
               <i class="iconfont icon-bi"></i>
               <i class="iconfont icon-xiangji"></i>
           </div>
       </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.radio_login{
    width: 3.0rem;
    /* background-color: red; */
    justify-content: space-between;
    display: flex;
}
.radio_login i{
    color: gray;
    font-size: 0.3rem;
}
.radio_log_left {
    width: 1.0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.radio_log_left span{
    font-size: 0.14rem;
    color: gray;
}
.radio_log_right{
    width: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>