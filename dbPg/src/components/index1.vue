<template>
    <div class="index_Box">
        <div class="index_text">
            <h3>{{title}}</h3>
            <p>{{title}}</p>
            <span>{{dIlittle}}</span>
        </div>
        <img :src="imgurl" alt="">
    </div>
</template>

<script>
export default {
    props:{
        imgurl:{
            type:String,
            required:true
        },
      
         title:{
            type:String,
            required:true
        },  
     
        dIlittle:{
            type:String,
            required:true
        },  
    }
    //  computed:{
    //      srra(){
                
    //            return this.text.substring(0,30)
    //    },
    // }
}
</script>


<style  scoped>
.index_Box{
    width:3.4rem;
    display: flex;
    justify-content: space-between; 
}
.index_Box img{
    flex-basis: 25%;
    height: 1.0rem;
}
.index_text{
    flex-basis: 75%;
    height: 1.0rem;
    display: flex;
    flex-direction: column;
}
.index_text h3{
    font-size: 0.16rem;

}
.index_text span{
    display: block;
    width: 1.0rem;
    /* margin-top: 0.4rem; */
    font-size: 0.14rem;
}
.index_text p{
font-size: 0.12rem;
color: gray;

}
</style>