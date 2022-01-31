<template>
<div class="timer main-page-item">
    <h3>타이머</h3>
    <div class="time-data">
        <div class="current-tiem">현재 <span class="font-bold">5</span>교시</div>
        <div class="next-time">6교시까지 00시간 00분 00초</div>
    </div>
</div>
</template>

<script>
// import TimeTable from "./../../Model/TimeTable.js"
// const timeDate = {
//     '1' : new TimeTable(

//     )
// }

export default {
    name : "Timer",
    date(){
        return{
            // timeDate
        }
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