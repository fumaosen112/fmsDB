<template>
    <div class="radio_boxTop">
          <div class="radio_boxTop_m">
              <p>打开app,浏览更多</p>
              <div class="m">
                   <button class="btn btn-default m_1" type="submit" >极速下载</button>
                   <button class="btn btn-default m_2" type="submit">打开</button>
              </div>
          </div>
       </div>
</template>

<script>
export default {
    
}
</script>


<style  scoped>
.radio_boxTop{
    width: 3.2rem;
    height: 0.7rem;
    background: url('../../static/img/2.jpg') no-repeat;
    background-size: contain;


}
.radio_boxTop_m{
    font-size: 0.14rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.15rem;
}
.radio_boxTop_m p{
    margin-bottom: -0.01rem;
        color:green;
}
.m{
    display: flex;
}
.m_1{
   
    font-size: 0.16rem;
    margin-right: 0.01rem;
    background-color: green;
    color:white;
    
}
.m_2{
 
    font-size: 0.16rem;
    margin-left: 0.01rem;
    
}
</style>