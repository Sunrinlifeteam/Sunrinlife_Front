<template>
    <div class="panel">
        <main class="page-content">
            <div class="header">
                <div class="date-time-wrap">
                    <h2>
                        {{ nowDate.getFullYear() }}년
                        <span v-if="nowDate.getMonth() < 9">0</span
                        >{{ nowDate.getMonth() + 1 }}월
                        <span v-if="nowDate.getDate() < 9">0</span
                        >{{ nowDate.getDate() + 1 }}일
                        {{ dateList[nowDate.getDay() - 1] }}요일
                    </h2>
                    <h3>
                        <template v-if="nowDate.getHours() < 12">오전</template>
                        <template v-else>오후 </template>

                        <span v-if="nowDate.getHours() % 12 <= 9">0</span
                        >{{ nowDate.getHours() % 12 }}시
                        <span v-if="nowDate.getMinutes() <= 9">0</span
                        >{{ nowDate.getMinutes() }}분
                        <span v-if="nowDate.getSeconds() <= 9">0</span
                        >{{ nowDate.getSeconds() }}초
                    </h3>
                </div>
            </div>

            <div class="main-page-items">
                <NoticeAndHotSunrin class="notice-and-hot-sunrin" />
                <Timer_v2 class="a2" />
                <Meal class="meal" />
                <TodaySchedule class="today-schedule" />
                <Schedule class="a5" />
            </div>
        </main>
    </div>
</template>
<script>
import NoticeAndHotSunrin from "../components/main/NoticeAndHotSunrin.vue";
import Meal from "../components/main/Meal.vue";
import TodaySchedule from "../components/main/TodaySchedule.vue";
import Schedule from "../components/main/Sechedule/Schedule.vue";
import Timer_v2 from "../components/main/Timer_v2.vue";

export default {
    name: "mainPage",
    data() {
        return {
            nowDate: new Date(),
            dateList: ["월", "화", "수", "목", "금", "토", "일"],
        };
    },
    methods: {},
    mounted() {
        setInterval(() => {
            this.nowDate = new Date();
        }, 1000);
    },
    components: {
        Timer_v2,
        Meal,
        TodaySchedule,
        NoticeAndHotSunrin,
        Schedule,
    },
};
</script>

<style lang="scss">
@import "src/assets/style/mainPage_v2/style.scss";
</style>
