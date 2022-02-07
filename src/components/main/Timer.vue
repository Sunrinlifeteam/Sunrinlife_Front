<template>
<div class="timer main-page-item">
    <div class="main-page-item-title"><h3>타이머</h3></div>
    <div class="main-page-item-content">
        <div class="current-tiem">현재 <span class="font-bold className">{{ currentTime.className }}</span></div>
        <div class="next-time">
            <span>{{ nextTime.className }}</span>까지 남은 시간
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
import Time from "./../../Model/Time.js"

let currentTime
let nextTime

let 남은시간
let 남은시간_기준시간

for(let i = 0; i < TimerData.length; i++){

    if(TimerData[i].isCurrentTime){
        currentTime = TimerData[i]

        if(i == TimerData.length - 1){
            nextTime = TimerData[0]
            남은시간_기준시간 = nextTime.endTime
        }
        else if(currentTime.classType == "study"){
            nextTime = TimerData[i + 2]
            남은시간_기준시간 = nextTime.endTime
        }
        else{
            nextTime = TimerData[i + 1]
            남은시간_기준시간 = currentTime.endTime
        }

        남은시간 = new Time().diffTime(남은시간_기준시간)
    }
}

export default {
    name : "Timer",
    data(){ return {
        currentTime,
        nextTime,
        남은시간,
        isTimeFew : false
    }},
    mounted(){
        setInterval(()=>{
            this.남은시간 = new Time().diffTime(남은시간_기준시간)
            this.isTimeFew = this.남은시간.allSecond < 60
        }, 500)
    }
}
</script>

<style>
.timer{
    display: grid;
    grid-template-rows: auto 1fr;
}

.timer .className{
    color : var(--main-color1)
}

.timer .main-page-item-content{
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
    animation-timing-function: ease-in-out;
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