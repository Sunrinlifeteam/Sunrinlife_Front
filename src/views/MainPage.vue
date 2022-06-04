<template>

<div class="panel">
    <main class="page-content">
        <Notice/>
        <Timer/>
        <Meal/>
        <TodaySchedule/>
        <Schedule/>
        <Club/>
    </main>
</div>

</template>
<script>
import Notice from "../components/main/Notice.vue"
import TodaySchedule from "../components/main/TodaySchedule.vue"
import Timer from "../components/main/Timer.vue"
import Meal from "../components/main/Meal.vue"
import Schedule from "../components/main/Sechedule/Schedule.vue"
import Club from "../components/main/Club.vue"

export default {
    name : "mainPage",
    data() {
        return {}
    },
    methods: {
        
    },
    components: {
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
@import "@/assets/style/mainPage/mainPage.css";
</style>