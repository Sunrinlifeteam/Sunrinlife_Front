<template>
<div class="timer main-page-item">
    <div class="main-page-item-title"><h3>타이머</h3></div>
    <div class="main-page-item-content">
        <div class="current-item">
            <span class="sub_title">현재</span>
            <span class="font-bold className">5교시 국어</span>
        </div>
        <div class="next-time">
            <span class="sub_title">남은 시간</span>
            <span class="clock" :class="{'caution-animation' : isTimeFew}">
                <span v-if="남은시간.hour < 10" class="zero">0</span>{{ 남은시간.hour }}시간
                <span v-if="남은시간.minute < 10" class="zero">0</span>{{ 남은시간.minute }}분
                <span v-if="남은시간.second < 10" class="zero">0</span>{{ 남은시간.second }}초
            </span>
        </div>
        <div class="time-table-wrap scroll">
            <ul class="time-table">
                <li v-for="i in 7" :key="i">
                    <div class="top">
                        <div class="class-name">인공지능과 미래사회</div>
                        <div class="teacher">박예원 선생님</div>
                    </div>
                    <div class="bottom">
                        <div class="start-time">08:40</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import TimerDatas from "./../../assets/TimerData.js"
import { mapState } from "vuex";

export default {
    name : "Timer",
    data(){ return {
        currentTime : {},
        nextTime : {},
        남은시간 : { hour : 0, minute : 50, second : 0 },
        남은시간_기준시간 : {},
        isTimeFew : false,

        TimerDatas,
    }},
    methods: {

    },
    mounted(){

    },
    computed:{
        ...mapState(["noticeMain"]),
    },
}
</script>

<style scoped>
.timer{
    display: grid;
    grid-template-rows: auto 1fr;
}

.className{
    color : #4992ff;
    font-size:20px;
}

.main-page-item-content{
    font-size: 1.5em;

    display: grid;
    grid-template-rows: auto auto 1fr;
    gap : 25px;
}

.timer span{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

.sub_title{
    font-size:16px;
    margin-right: 16px;
}

.clock{
    font-size:20px;
}

.time-table-wrap {
    padding: 4px;

    display: flex;

    overflow: auto;
}

.time-table {
    display: flex;
    gap : 16px;
}

.time-table li {
    width: 114px;

    color: white;

    padding: 6px 14px 16px 12px;
    border-radius: 8px;
    background-color: #4992ff;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    word-break: keep-all;
}

.time-table li .class-name {
    font-size: 14px;
}

.time-table li .teacher {
    font-size: 12px;

    margin-top: 2px;
}

.time-table li .start-time {
    font-size: 12px;
}

@keyframes cautionAnimation {
    0%, 100%{
        color : black;
    }
    30%, 70%{
        color : var(--flat-red);
        /* color : red; */
    }
}

@media (max-width: 970px) {
    .time-table li {
        height: 144px;
    }
}
</style>