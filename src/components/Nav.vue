<template>
<transition name="nav-bar">
    <nav
        v-if="isNavOpen"
        @click.self="$emit('navOnOff')">
    
        <div class="nav-list">
            <img src="./../assets/logo.svg" alt="Logo" class="logo logo-rotate-animation">

            <hr class="list-category-line">

            <div class="list-user-profile">
                {{currentUserData.name}}님 환영합니다.
                <br>
                {{currentUserData.year}}학년
                {{currentUserData.class}}반
                {{currentUserData.number}}번
                <!-- {{currentUserData}} -->
            </div>

            <hr class="list-category-line">

            <router-link
                v-for="i, n in navBarList" :key="n"
                :to="i.router">{{ i.name }}</router-link>
        </div>

        <div @click="$store.commit('navOnOff')"></div>

        <div 
            @click="$router.push('easterEgg')"
            class="easter-egg">이스터에그</div>
    </nav>
</transition>

<transition name="nav-bg">
<div
    v-if="isNavOpen"
    class="nav-bg"></div>
</transition>

</template>

<script>
import { mapState } from "vuex"

export default {
    name : "Nav",
    computed :{
        ...mapState(['currentUserData', 'navBarList', "isNavOpen"])
        // store.js에 저장된 navBarList를 가져와서 목록으로 보여준다.
    },
    props : {
        // navState : Number
    }
}
</script>

<style>
nav {
    width : 100%;
    height : 100%;

    /* background-color: var(--bg-black); */

    display: grid;
    grid-template-columns: auto 1fr;

    position: fixed;
    top : 0px;
    left : 0px;
    z-index: 2;
}

nav .logo{
    width : 90%;
    padding : 16px;
    margin : 0 auto;

    cursor: pointer;
}

nav .nav-list {
    width : 250px;
    height: 100%;

    border-radius: 0 16px 16px 0;

    background-color: white;

    box-shadow: 10px 0px 100px var(--gray8);

    display: inline-flex;
    flex-direction: column;
    z-index: 2;
}

nav .nav-list .list-category-line {
    border-top : 1px solid var(--gray3);

    margin : 2px 0;
}

nav .nav-list .list-user-profile {
    font-size : 18px;
    text-align: center;

    padding : 12px 0;
}

nav a{
    font-size: 20px;
    padding : 8px 16px;

    display : inline;

    border-top : 1px solid var(--gray1);
    border-radius: 0 50px 50px 0;

    cursor: pointer;
}

nav a:last-child{
    border-bottom : 1px solid var(--gray1);
}

nav a:hover, nav a:active{
    background-color: var(--gray1);
}

.nav-list .router-link-exact-active{
    border-left: 7px solid var(--main-color3);

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