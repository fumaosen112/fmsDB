<template>
            <div class="bod1">
                <router-link to="/">{{title}}</router-link>
            </div>
</template>

<script>
export default {
    props:["title","pandn"]
}
</script>

<style scoped>

.bod1{
    padding: 0.1rem;
    border: 0.01rem solid gold;
    font-size: 0.16rem;
    margin: 0.05rem;
    height: 0.3rem;
    white-space: nowrap;
}
.bod1 a{
    color: green;
    text-decoration: none;
}
</style>