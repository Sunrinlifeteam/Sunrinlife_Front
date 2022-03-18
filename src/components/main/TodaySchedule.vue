<template>
<div class="today-schedule main-page-item">
    <div class="main-page-item-title"><h3>시간표</h3></div>
    <div class="main-page-item-content two_panel">
            
        <p v-for="i, n in timeTable" :key="n">{{ i }}</p>

    </div>
</div>
</template>

<script>

const timeTable = [
    "국어",
    "수학",
    "영어",
    "프밍",
    "정통",
    "인공지능",
    "에드캔",
]

export default {
    name : "TodaySchedule",
    data(){return{
        timeTable,
    }}
}
</script>

<style>
.today-schedule{

}

.today-schedule .time-table{
    
}


</style>