<template>
<div class="schedule main-page-item">
    <h3>일주일간 일정</h3>
    
    <div class="schedule-wrap">
        <div class="schedule-item">
            <span class="week">일</span>
            <ul class="todo-list">
                <li>일정이 없습니다.</li>
            </ul>
        </div>
        <div class="schedule-item">
            <span class="week">월</span>
            <ul class="todo-list">
                <li>일정이 없습니다.</li>
            </ul>
        </div>
        <div class="schedule-item">
            <span class="week">화</span>
            <ul class="todo-list">
                <li>일정이 없습니다.</li>
            </ul>
        </div>
        <div class="schedule-item">
            <span class="week">수</span>
            <ul class="todo-list">
                <li>일정이 없습니다.</li>
            </ul>
        </div>
        <div class="schedule-item">
            <span class="week">목</span>
            <ul class="todo-list">
                <li>일정이 없습니다.</li>
            </ul>
        </div>
        <div class="schedule-item">
            <span class="week">금</span>
            <ul class="todo-list">
                <li>일정이 없습니다.</li>
            </ul>
        </div>
        <div class="schedule-item">
            <span class="week">토</span>
            <ul class="todo-list">
                <li>일정이 없습니다.</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : "Schedule"
}
</script>

<style>

.schedule {
    overflow: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.schedule::-webkit-scrollbar{
    width : 20px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 16px;
}

.schedule::-webkit-scrollbar-thumb{
    background-color: rgba(128, 128, 128, 0.433);
    background-clip: padding-box;
    border : 3px solid transparent;
    border-radius: 12px;
}

.schedule::-webkit-scrollbar-thumb:active {
    background-color: rgba(128, 128, 128, 0.624);
}

.schedule:hover::-webkit-scrollbar-thumb{
    background-color: rgba(128, 128, 128, 0.864);
}

.schedule .schedule-wrap{
    width : 200%;

    display: grid;
    grid-template-columns: repeat(7, 1fr);
}

.schedule .schedule-item{
    border : 1px solid black;

    padding : 4px;
}

.schedule .schedule-item ul {
    padding : 0px 4px;
}

.schedule .schedule-item:first-child .week{
    color : red;
}

.schedule .schedule-item:last-child .week{
    color : blue;
}

@media (min-width : 750px) {
    .schedule .schedule-wrap{
        grid-template-columns: repeat(12, 1fr);
    }

    .schedule .schedule-item:nth-child(1) {
        grid-column: 1 / 5;
    }

    .schedule .schedule-item:nth-child(2) {
        grid-column: 5 / 9;
    }

    .schedule .schedule-item:nth-child(3) {
        grid-column: 9 / 13;
    }

    .schedule .schedule-item:nth-child(4) {
        grid-column: 1 / 4;
    }

    .schedule .schedule-item:nth-child(5) {
        grid-column: 4 / 7;
    }

    .schedule .schedule-item:nth-child(6) {
        grid-column: 7 / 10 ;
    }

    .schedule .schedule-item:nth-child(7) {
        grid-column: 10 / 13 ;
    }
}

</style>