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
import Meal from "../components/main/Meal/Meal.vue"
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
@import "./../assets/style/mainPage/mainPage.css";
</style>