<template>
<transition name="nav-bar">
    <nav
        v-if="navState == 1"
        @click.self="$emit('navOnOff')">
    
        <div class="nav-list">
            <img src="./../assets/logo.svg" alt="Logo" class="logo">
            <router-link
                
                v-for="i, n in navBarList" :key="n"
                :to="i.router">{{ i.name }}</router-link>
        </div>

        <div 
            @click="$router.push('easterEgg')"
            class="easter-egg">이스터에그</div>
    </nav>
</transition>

<transition name="nav-bg">
<div
    v-if="navState == 1"
    @click.self="$emit('navOnOff')"
    class="nav-bg"></div>
</transition>

</template>

<script>
import { mapState } from "vuex"

export default {
    name : "Nav",
    computed :{
        ...mapState(['navBarList'])
        // store.js에 저장된 navBarList를 가져와서 목록으로 보여준다.
    },
    props : {
        navState : Number
    }
}
</script>

<style>
nav {
    width : 100%;
    height : 100vh;

    /* background-color: var(--bg-black); */

    position: fixed;
    top : 0px;
    left : 0px;
    z-index: 2;
}

nav img{
    width : 100%;
    padding : 16px;

    cursor: pointer;
}

nav .nav-list {
    width : 250px;
    height: 100%;

    border-radius: 0 16px 16px 0;

    background-color: white;

    display: inline-flex;
    flex-direction: column;
    z-index: 2;
}

nav a{
    font-size: 20px;
    padding : 8px 16px;

    display : inline;

    border-top : 1px solid var(--gray1);

    cursor: pointer;
}

nav a:last-child{
    border-bottom : 1px solid var(--gray1);
}

nav a:hover, nav a:active{
    background-color: var(--gray1);
}

.nav-list .router-link-exact-active{
    border-left: 5px solid var(--main-color3);
    background-color: var(--sub-color3);
    color : var(--main-color3);
    font-family: 'GmarketSansBold';
}

.nav-bg {
    width : 100%;
    height: 100vh;
    background-color: var(--bg-black);

    position: fixed;
    top : 0;
    left : 0;
    z-index: 1;
}

.easter-egg{
    color : #f2f2f2;

    position: absolute;
    bottom : 0px;

    cursor: pointer;
}
</style>