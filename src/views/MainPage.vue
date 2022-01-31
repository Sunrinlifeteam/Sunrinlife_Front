<template>

<Header @navOnOff="navOnOff" />

<transition name="navBar">
    <Nav v-if="isNavOn == 1"
        @navOnOff="navOnOff"
        />
</transition>

<main>
    <div class="notice-today-wrap">
        <Notice/>
        <TodaySchedule/>
    </div>
    <Timer/>
    <Meal/>
    <Schedule/>
</main>

</template>
<script>
import Header from "../components/Header.vue"
import Nav from "../components/Nav.vue"

import Timer from "../components/main/Timer.vue"
import Notice from "../components/main/Notice.vue"
import TodaySchedule from "../components/main/TodaySchedule.vue"
import Meal from "../components/main/Meal.vue"
import Schedule from "../components/main/Schedule.vue"

export default {
    name : "mainPage",
    data(){return{
        isNavOn : 0,
    }},
    methods :{
        navOnOff(){
            this.isNavOn++;
            this.isNavOn %= 2;
        }
    },
    components : {
        Header,
        Nav,

        Timer,
        Notice,
        TodaySchedule,
        Meal,
        Schedule,
    }
}

</script>
<style>
    #app {
        display: grid;
        grid-template-rows: auto 1fr;
    }

    main{
        padding : 16px;

        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }

    .main-page-item{
        /* background-color: var(--main-color2); */
        border-radius: 12px;
        padding : 16px;
    }

    .main-page-item:nth-child(2n){
        background-color: var(--flat-purple);
    }

    .main-page-item:nth-child(2n + 1){
        background-color: var(--flat-yellow);
    }

    .main-page-item:nth-child(2n) h3{
        color : white;
    }


    .notice-today-wrap{
        display : grid;
        grid-template-rows: auto 1fr;
        grid-gap: 16px;
    }

    @media (min-width: 700px) {
        main {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 1100px) {
        main {
            width : 1100px;
            margin : 0 auto;
        }
    }
</style>