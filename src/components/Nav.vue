<template>
<transition name="nav-bar">
    <nav
        v-if="navState == 1"
        @click.self="$emit('navOnOff')">
    
        <ul>
            <img src="./../assets/logo.svg" alt="Logo" class="logo">
            <li
                v-for="i, n in navBarList"
                :key="n"
                class="font-light"
                @click="$router.push(`${i.router}`)"
            >{{ i.name }}</li>
        </ul>
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

    position: absolute;
    top : 0px;
    left : 0px;
    z-index: 2;
}

nav img{
    width : 100%;
    padding : 16px;

    cursor: pointer;
}

nav ul {
    width : 250px;
    height: 100%;

    /* padding : 16px 0; */

    background-color: white;

    display: inline-flex;
    flex-direction: column;
    z-index: 2;
}

nav li{
    font-size: 20px;
    padding : 8px 16px;

    display : inline;

    border : 1px solid var(--gray5);
    border-bottom: 0px;

    cursor: pointer;
}

nav li:last-child{
    border : 1px solid var(--gray5);
}

nav li:hover{
    background-color: var(--gray1);
}

.nav-bg {
    width : 100%;
    height: 100vh;
    background-color: var(--bg-black);

    position: absolute;
    top : 0;
    left : 0;
    z-index: 1;
}

</style>