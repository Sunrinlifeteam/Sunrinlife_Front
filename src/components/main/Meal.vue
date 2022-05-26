<template>
<div class="meal main-page-item">
    <div class="main-page-item-title"><h3>급식</h3></div>
    <div class="main-page-item-content two_panel">
        <p v-for="i, n in meal" :key="n" class="text-truncated">{{i.menu_name.split(" ()")[0]}}</p>
        

        <!-- <div class="meal-detail" @click="$router.push('meal')">세부 보기</div> -->
    </div>
</div>
</template>

<script>
//import TimeTableData from "../../assets/TimerData.js"
// import Time from "./../../../Model/Time.js"

//let luanchRemainingTime
//let launchStartTime

// TimeTableData.forEach((e)=>{
//     if(e.classType == "launch"){
//         launchStartTime = e.startTime
//         luanchRemainingTime = launchStartTime.diffTimeForNow
//     }
// })

import {mapState} from "vuex"

export default {
    name : "Meal",
    data(){return{
        //luanchRemainingTime,
    }},
    mounted(){
        // setInterval(()=>{
        //     this.luanchRemainingTime = launchStartTime.diffTimeForNow
        // }, 500)
    },
    computed:{
        ...mapState(["meal"]),
    },
    watch:{
    }
}
</script>

<style scoped>
.meal {
    
}

.meal .main-page-item-content {
    flex-direction: column;
    justify-content: space-around;
}


.meal-detail {
    text-decoration: underline;
    cursor: pointer;
}

.two_panel p{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight:500;
    font-size:14px;
    margin-left: 16px;
    margin-top:7px;
}

.main-page-item-content {
    overflow-y: auto;
}

@media (max-width: 970px) {
    .two_panel > p:last-child{
        margin-bottom:10px;
    }
}
</style>