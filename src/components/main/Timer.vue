<template>
<div class="timer main-page-item">
    <h3>타이머</h3>
    <div class="time-data">
        <div class="current-tiem">현재 <span class="font-bold">{{ currentTime.className }}</span></div>
        <div class="next-time">등교까지 남은 시간<br>{{ 남은시간.hour }}시간 {{ 남은시간.minute }}분 {{ 남은시간.second }}초</div>
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

        // if(i == TimerData.length - 1){
        //     남은시간_기준시간 = TimerData[0].endTime
        // }   else{
        //     남은시간_기준시간 = currentTime.endTime
        // }
        남은시간_기준시간 = currentTime.endTime

        남은시간 = new Time().diffTime(남은시간_기준시간)
    }
}


export default {
    name : "Timer",
    data(){ return {
        currentTime,
        nextTime,
        // currentTimeClassName,
        남은시간
    }},
    mounted(){
        setInterval(()=>{
            this.남은시간 = new Time().diffTime(남은시간_기준시간)
            // console.log(남은시간);
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
</style>