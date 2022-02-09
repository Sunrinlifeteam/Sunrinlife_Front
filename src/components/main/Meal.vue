<template>
<div class="meal main-page-item">
    <div class="main-page-item-title"><h3>급식</h3></div>
    <div class="main-page-item-content">
        <ul>
            <li v-for="i, n in mealData" :key="n">{{i}}</li>
        </ul>

        <div class="remaining-time">
            점심시간까지
            <div class="time-data">
                <span v-if="luanchRemainingTime.hour < 10" class="zero">0</span>{{ luanchRemainingTime.hour }}시간
                <span v-if="luanchRemainingTime.minute < 10" class="zero">0</span>{{ luanchRemainingTime.minute }}분
                <span v-if="luanchRemainingTime.second < 10" class="zero">0</span>{{ luanchRemainingTime.second }}초 남음
            </div>
        </div>

        <div class="meal-detail" @click="$router.push('meal')">세부 보기</div>
    </div>
</div>
</template>

<script>
import TimeTableData from "../../assets/TimerData.js"
// import Time from "./../../../Model/Time.js"

let luanchRemainingTime
let launchStartTime

TimeTableData.forEach((e)=>{
    if(e.classType == "launch"){
        launchStartTime = e.startTime
        luanchRemainingTime = launchStartTime.diffTimeForNow
    }
})

const mealData = [
    "밥",
    "국",
    "반찬",
    "에드캔은",
    "정말 최고야",
]

export default {
    name : "Meal",
    data(){return{
        mealData,
        luanchRemainingTime,
    }},
    mounted(){
        setInterval(()=>{
            this.luanchRemainingTime = launchStartTime.diffTimeForNow
        }, 500)
    }
}
</script>

<style>
.meal {
    
}

.meal .main-page-item-content {
    display : flex;
    flex-direction: column;
    justify-content: space-around;
}

.meal ul {
    padding : 0 16px;
}

.meal li {
    font-size: 1.25em;
    list-style: disc;
}

.meal-detail {
    text-decoration: underline;
    cursor: pointer;
}
</style>