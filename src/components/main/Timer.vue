<template>
<div class="timer main-page-item">
    <h3>타이머</h3>
    <div class="time-data">
        <div class="current-tiem">현재 <span class="font-bold">{{ currentTime.className }}</span></div>
        <div class="next-time">
            {{ nextTime.className }}까지 남은 시간
            <div class="clock" :class="{'caution-animation' : isTimeFew}">
                <span v-if="남은시간.hour < 10" class="zero">0</span>{{ 남은시간.hour }}시간
                <span v-if="남은시간.minute < 10" class="zero">0</span>{{ 남은시간.minute }}분
                <span v-if="남은시간.second < 10" class="zero">0</span>{{ 남은시간.second }}초
            </div>

        </div>
    </div>
</div>
</template>

<script>
import TimerData from "./../../assets/TimerData.js"
import TimerItem from "./../../Model/TimerItem.js"
import Time from "./../../Model/Time.js"

// let currentTime
// let nextTime

// let 남은시간
// let 남은시간_기준시간



export default {
    name : "Timer",
    data(){ return {
        currentTime : new TimerItem(0, 0, 0),
        nextTime : new TimerItem(0, 0, 0),
        남은시간 : new Time(),
        남은시간_기준시간 : new Time()
        // isTimeFew : false
    }},
    mounted(){
        for(let i = 0; i < TimerData.length; i++){

            if(TimerData[i].isCurrentTime){
                this.currentTime = TimerData[i]

                if(i == TimerData.length - 1){
                    this.nextTime = TimerData[0]
                    this.남은시간_기준시간 = this.nextTime.endTime
                }
                else if(this.currentTime.classType == "study"){
                    this.nextTime = TimerData[i + 2]
                    this.남은시간_기준시간 = this.nextTime.endTime
                }
                else{
                    this.nextTime = TimerData[i + 1]
                    this.남은시간_기준시간 = this.currentTime.endTime
                }

                this.남은시간 = new Time().diffTime(this.남은시간_기준시간)
            }
        }

        setInterval(()=>{
            this.남은시간 = new Time().diffTime(this.남은시간_기준시간)
        }, 500)
    }
}
</script>

<style>
.timer{
    display: grid;
    grid-template-rows: auto 1fr;
}

.timer .time-data{
    font-size: 1.5em;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.timer .caution-animation{
    animation-name: cautionAnimation;
    animation-duration: 1500ms;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
    /* animation-timing-function: ease-in-out; */
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
</style>