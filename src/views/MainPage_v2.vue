<template>

<div class="panel">
    <main class="page-content">
        <div class="header">
            <div class="date-time-wrap">
                <h2>2022년 04월 05일 화요일</h2>
                <h3>오전 12시 47분</h3>
            </div>
        </div>

        <div class="main-page-items">
            <NoticeAndHotSunrin class="notice-and-hot-sunrin"/>
            <Notice class="a2"/>
            <Meal class="meal"/>
            <TodaySchedule class="today-schedule"/>
            <Schedule class="a5"/>
        </div>
    </main>
</div>

</template>
<script>
import Notice from "../components/main/Notice.vue"
import NoticeAndHotSunrin from "../components/main/NoticeAndHotSunrin.vue"
import Meal from "../components/main/Meal.vue"
import TodaySchedule from "../components/main/TodaySchedule"
import Schedule from "@/components/main/Sechedule/Schedule";

export default {
    name : "mainPage",
    data() {
        return {}
    },
    methods: {
        
    },
    components: {
        Notice,
        Meal,
        TodaySchedule,
        NoticeAndHotSunrin,
        Schedule,
    }
}

</script>

<style>
main{

}

.main-page-item{
    background-color: white;
    border-radius: 8px;
    padding : 12px 16px;

    box-shadow: 10px 10px 20px var(--gray4);

    display: grid;
    grid-template-rows: auto 1fr;
    grid-gap: 12px;

    transition: 500ms;
}

main {

}

.header h2 {
    font-size: 24px;
    color: #3d3d3d;
}

.header h3 {
    font-size: 20px;
    font-weight: 500;
    color: #3d3d3d;
}

.main-page-items {
    height:750px;

    margin-top: 24px;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(13, 1fr);

    grid-gap: 20px;
}

.notice-and-hot-sunrin {
    grid-column: 1 / 3;
    grid-row: 1 / 7;

    grid-template-rows: 1fr 1fr;
}

.a2 {
    grid-column: 3 / 8;
    grid-row: 1 / 7;
}

.meal {
    grid-column: 1 / 2;
    grid-row: 7 / 12;
}

.today-schedule {
    grid-column: 2 / 3;
    grid-row: 7 / 12;
}

.a5 {
    grid-column: 3 / 8;
    grid-row: 7 / 12;
}

.main-page-item h3 {
    color : #3d3d3d;
    display: inline;
    font-size: 18px;
}

@media (max-width: 970px) {
    .main-page-items {
        display: grid;
        grid-template-columns: 1fr;
    }

    .main-page-items > * {
        grid-column: 1 / 2;
        grid-row: unset;
    }
}
</style>