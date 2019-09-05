<template>
    <div class="fl_box">
        <router-link to="/movie" :style="{color:brr}">{{name}}</router-link>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    props:["name",'title',"brr"]
}
</script>

<style scoped>
.fl_box{
    flex-basis: 28%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
}
.fl_box a{
    font-size: 0.22rem;
    text-decoration: none;
}
.fl_box span{
    font-size: 0.12rem;
    color: gainsboro;
}
</style>