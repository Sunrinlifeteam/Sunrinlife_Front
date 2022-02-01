<template>
<div class="today-schedule main-page-item">
    <h3>오늘의 일정</h3>
    
    <div class="time-table">
        <h4>시간표</h4>
        <ul>
            <li v-for="i, n in timeTable" :key="n">{{ n + 1 }}교시 : {{ i }}</li>
        </ul>
    </div>

    <hr>

    <!-- <div class="todo-lis">
        <h4>Todo 리스트</h4>
        <ul>
            <li v-for="i, n in todoList" :key="n">{{ i }}</li>
        </ul>
    </div> -->

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

.today-schedule > div {
    padding : 8px;
}

.today-schedule ul{
    padding : 2px 8px;
}

.today-schedule .time-table ul{

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.today-schedule hr {
    border : 1px solid var(--gray4);
}

</style>