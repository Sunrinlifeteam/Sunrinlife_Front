<template>

<Header @navOnOff="navOnOff" />

<Nav
    :navState="isNavOn"
    @navOnOff="navOnOff"
    />

<main>
    <Notice/>
    <Schedule/>
    <Timer/>
    <Club/>
    <Meal/>
    <TodaySchedule/>
    <!-- <div class="notice-today-wrap">
    </div> -->
</main>

</template>
<script>
import Header from "../components/Header.vue"
import Nav from "../components/Nav.vue"

import Notice from "../components/main/Notice.vue"
import TodaySchedule from "../components/main/TodaySchedule.vue"
import Timer from "../components/main/Timer.vue"
import Meal from "../components/main/Meal/Meal.vue"
import Schedule from "../components/main/Schedule.vue"
import Club from "../components/main/Club.vue"

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

        Notice,
        TodaySchedule,
        Timer,
        Meal,
        Schedule,
        Club,
    }
}

</script>
<style>
@import "./../assets/style/mainPage/mainPage.css";
</style>