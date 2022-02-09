<template>

<Header/>
<Nav/>

<main>
    <Notice/>
    <Timer/>
    <Meal/>
    <TodaySchedule/>
    <Schedule/>
    <Club/>
</main>

</template>
<script>
import Header from "../components/Header.vue"
import Nav from "../components/Nav.vue"

import Notice from "../components/main/Notice.vue"
import TodaySchedule from "../components/main/TodaySchedule.vue"
import Timer from "../components/main/Timer.vue"
import Meal from "../components/main/Meal.vue"
import Schedule from "../components/main/Sechedule/Schedule.vue"
import Club from "../components/main/Club.vue"

export default {
    name : "mainPage",
    data(){return{
        isNavOn : 0,
    }},
    methods :{
        
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