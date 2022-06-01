<template>
    <div class="timer main-page-item">
        <div class="main-page-item-title"><h3>타이머</h3></div>
        <div class="main-page-item-content">
            <div class="current-item">
                <span class="sub_title">현재</span>
                <span class="font-bold className">{{
                    currentTime.className
                }}</span>
            </div>
            <div class="next-time">
                <span class="sub_title">남은 시간</span>
                <span class="clock" :class="{ 'caution-animation': isTimeFew }">
                    <span v-if="timeLeft.hour < 10" class="zero">0</span
                    >{{ timeLeft.hour }}시간
                    <span v-if="timeLeft.minute < 10" class="zero">0</span
                    >{{ timeLeft.minute }}분
                    <span v-if="timeLeft.second < 10" class="zero">0</span
                    >{{ timeLeft.second }}초
                </span>
            </div>
            <div class="time-table-wrap scroll">
                <ul class="time-table">
                    <li v-for="(i, n) in todaySchedule" :key="n">
                        <div class="top">
                            <div class="class-name">{{ i }}</div>
                            <div class="test">{{ n }}</div>
                            <!--  <div class="teacher">박예원 선생님</div>-->
                        </div>
                        <div class="bottom">
                            <div
                                v-if="startTimeList[n] != null"
                                class="start-time"
                            >
                                <span v-if="startTimeList[n].hour < 10">0</span
                                >{{ startTimeList[n].hour }} :
                                <span v-if="startTimeList[n].minute < 10"
                                    >0</span
                                >{{ startTimeList[n].minute }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import * as _TimerDatas from "./../../assets/TimerData.js";
import { mapState } from "vuex";
import { getTodaySchedule } from "@/api";

export default {
    name: "Timer",
    data() {
        return {
            currentTime: {},
            nextTime: {},
            timeLeft: { hour: 0, minute: 50, second: 0 },
            timeLeft_stdTime: {},
            isTimeFew: false,

            timerData: {},

            startTimeList: [],
        };
    },
    methods: {
        setTime() {
            for (let i = 0; i < this.timerData.length; i++) {
                const d = this.timerData[i];

                if (d.classType == "study") {
                    this.startTimeList = [...this.startTimeList, d.startTime];
                }

                if (d.isCurrentTime) {
                    this.currentTime = d;

                    if (i == this.timerData.length - 1) {
                        this.timeLeft_stdTime = this.timerData[0].endTime;
                    } else {
                        this.timeLeft_stdTime = this.timerData[i + 1].startTime;
                    }
                }
            }
        },
    },
    mounted() {
        this.timerData = _TimerDatas.timeData1;

        this.setTime();
        setInterval(() => {
            const timeLeft_time = this.timeLeft_stdTime.diffTimeForNow;
            // this.allS = timeLeft_time.allSecond

            this.timeLeft.hour = timeLeft_time.hour;
            this.timeLeft.minute = timeLeft_time.minute;
            this.timeLeft.second = timeLeft_time.second;

            if (timeLeft_time.allSecond <= 1) {
                location.reload();
                // setTimeout(()=>{
                //     this.setTime()
                // }, 1500)
            }
        }, 100);
    },
    computed: {
        ...mapState(["noticeMain", "userData", "todaySchedule"]),
        getUserData() {
            return this.$store.getters.getUserData;
        },
    },
    watch: {
        getUserData() {
            let userData = this.$store.getters.getUserData;

            getTodaySchedule(userData.grade, userData.class).then((data) => {
                this.$store.commit("getTodaySchedule", data);
            });
            console.log(JSON.stringify(this.startTimeList, null, 4));
        },
    },
};
</script>

<style scoped>
.timer {
    display: grid;
    grid-template-rows: auto 1fr;
}

.className {
    color: #4992ff;
    font-size: 20px;
}

.main-page-item-content {
    font-size: 1.5em;

    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 25px;
}

.timer span {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
}

.sub_title {
    font-size: 16px;
    margin-right: 16px;
}

.clock {
    font-size: 20px;
}

.time-table-wrap {
    padding: 4px;

    display: flex;

    overflow: auto;
}

.time-table {
    display: flex;
    gap: 16px;
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
    0%,
    100% {
        color: black;
    }
    30%,
    70% {
        color: var(--flat-red);
        /* color : red; */
    }
}

@media (max-width: 970px) {
    .time-table li {
        height: 144px;
    }
}
</style>
