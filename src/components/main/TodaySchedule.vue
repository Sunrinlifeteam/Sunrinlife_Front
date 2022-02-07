<template>
<div class="today-schedule main-page-item">
    <div class="main-page-item-title"><h3>오늘의 일정</h3></div>
    <div class="main-page-item-content">
        <div class="time-table">
            <h4>시간표</h4>
            <ul>
                <li v-for="i, n in timeTable" :key="n">{{ n + 1 }}교시 : {{ i }}</li>
            </ul>
        </div>
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

const todoList = [
    "todo1",
    "todo2",
    "todo3",
    "todo4",
    "todo5",
]

export default {
    name : "TodaySchedule",
    data(){return{
        timeTable,
        todoList,
    }}
}
</script>

<style>
.today-schedule{

}

.today-schedule .time-table{
    padding : 4px 16px;
}


</style>