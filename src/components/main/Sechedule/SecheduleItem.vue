<template>
<div class="schedule-item">
    <span class="week font-bold">
        {{ weekData[secheduleData.date.getDay() - 1] }}
        ({{ secheduleData.date.getMonth() + 1}}/{{ secheduleData.date.getDate() }})
    </span>

    <ul class="todo-list">
        <li v-for="i, n in secheduleData.todos" :key="n">{{ i }}</li>
    </ul>

    <div class="todo-none-msg font-bold" v-if="secheduleData.todos.length == 0">일정이<br/>없습니다</div>
</div>
</template>

<script>
const weekData = ["월", "화", "수", "목", "금", "토", "일"]

export default {
    name : "SecheduleItem",
    data(){return{
        weekData,
    }},
    props : {
        secheduleData : Object,
    }
}
</script>

<style>
.schedule-item{
    max-width : 160px;

    border-radius: 20px;

    padding : 14px;
    
    box-shadow: 0px 4px 15px var(--gray4);

    position: relative;
}

.schedule-item .week {
    font-size : 16px;
}

.schedule-item .todo-list {
    padding : 0px 8px;
}

.schedule-item .todo-list li {
    margin : 4px 0px;
    /* list-style: disc; */

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
}

.schedule-item .todo-none-msg {
    font-size: 16px;
    text-align: center;
    line-height: 25px;

    position: absolute;
    top : 60%;
    left : 50%;

    transform: translate(-50%, -50%);
}

@media (min-width : 750px) {
    .schedule-item .todo-none-msg {
        font-size: 20px;
        line-height: 30px;
        top : 50%;
    }
}
</style>