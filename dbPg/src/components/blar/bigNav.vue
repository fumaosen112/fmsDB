<template>
   <div class="Big1">
 <div class="big_nav">
        <span>{{tess}}</span>
        <router-link to="/">更多</router-link>
</div>

    <div class="big" >
        <smallNav :terr="v.title"  :srrb="v.line" :brr="v.color" v-for="(v,i) in text" :key="i"></smallNav>
      
    </div>
     

</div>
</template>

<script>
import smallNav from "./smallNav"

export default {
  
   
    props:["text","tess"],
    components:{
        smallNav,
      
    }
}
</script>


<style scoped>
.big{
    width: 100%;
    overflow: auto;
    margin-top:0.1rem; 
     white-space: nowrap;
}

.big_nav{
    width: 100%;
    display: flex;
    justify-content: space-between;

}
.big_nav{
    font-size: 0.16rem;
    font-weight: 700
}
.Big1{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    
}
.Big1 a{
    color: green;
    text-decoration: none;
}
</style>