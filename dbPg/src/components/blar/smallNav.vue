<template>
 
      <span class="bod1" :class="srrb?'cla1':''" >
                <router-link to="/" :style="{color:brr}">{{terr}}</router-link>
    </span>
  


</template>

<script>
export default {
    props:["terr","srrb",'scr',"brr"],
  
}
</script>


<style  scoped>


.bod1{
    padding: 0.1rem;
    border: 0.01rem solid gold;
    font-size: 0.16rem;
    margin: 0.05rem;
    white-space: nowrap;
    display: inline-block;
    border-radius: 0.03rem;

}
.bod1 a{
    /* color: green; */
    text-decoration: none;
}
.cla1{
    display: block;
    width: 0;
    height: 0;
     padding: 0rem;
    /* height: 0.3rem; */
    /* padding: 0.1rem; */
}

</style>