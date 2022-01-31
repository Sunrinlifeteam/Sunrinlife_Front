<template>

<Header/>
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

import Timer from "../components/main/Timer.vue"
import Notice from "../components/main/Notice.vue"
import TodaySchedule from "../components/main/TodaySchedule.vue"
import Meal from "../components/main/Meal.vue"
import Schedule from "../components/main/Schedule.vue"

export default {
    name : "mainPage",
    components : {
        Header,

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
        border : 1px solid red;

        padding : 16px;
    }

    .notice-today-wrap{
        display : grid;
        grid-template-rows: auto 1fr;
        grid-gap: 16px;
    }

    @media (min-width: 600px) {
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