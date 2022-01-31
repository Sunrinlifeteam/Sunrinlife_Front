<template>

<Header/>
<main>

</main>

</template>
<script>
import Header from "../components/Header.vue"

export default {
    name : "mainPage",
    components : {
        Header
    }
}

</script>
<style>
    #app {
        display: grid;
        grid-template-rows: auto 1fr;
    }

    header{
        border : 1px solid red;
    }

    main{
        border : 1px solid blue;
    }
</style>