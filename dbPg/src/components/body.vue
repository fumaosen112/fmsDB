<template>
   <div class="bod">
       <span>{{text}}</span>
        <router-link to="/asd">更多</router-link>   
   </div>
</template>

<script>
export default {
    props:["text"]
}
</script>

<style scoped>
.bod{
    font-size: 0.16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 3.2rem;
    height: 0.5rem;
}
.bod a{
    text-decoration: none;
    color: green;
}
</style>