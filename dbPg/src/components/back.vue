<template>
<div class="back" @click="back()">
      取消
</div>
</template>
<script>
export default {
    methods: {
        back(){
            this.$router.go(-1);
        }
    },
}
</script>

<style  scoped>
.back{
    width:0.5rem;
    height:0.5rem;

  
    display: flex;
    align-items: center;
     font-size: 0.16rem;
    color: green;
    
}


    
</style>