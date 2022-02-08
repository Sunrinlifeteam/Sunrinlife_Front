<template>
<div class="schedule main-page-item">
    <div class="main-page-item-title">
        <h3>일주일간 일정</h3>
    </div>
    <div class="main-page-item-content">
        <SecheduleItem
            v-for="i, n in secheduleData" :key="n"
            :secheduleData="i"/>
    </div>
</div>
</template>

<script>
import SecheduleItem from "./SecheduleItem.vue"
import Sechedule from "./../../../Model/Sechedule.js"

const secheduleData = [
    new Sechedule(
        new Date("2022-2-8"),
        []
    ),
    new Sechedule(
        new Date("2022-2-9"),
        ["todo1", "todo2","todo3"]
    ),
    new Sechedule(
        new Date("2022-2-10"),
        ["todo1", "todo2","todo3"]
    ),
    new Sechedule(
        new Date("2022-2-11"),
        ["todo1", "todo2","todo3"]
    ),
    new Sechedule(
        new Date("2022-2-12"),
        ["todo1", "todo2","todo3"]
    ),
    new Sechedule(
        new Date("2022-2-13"),
        ["todo1", "todo2","todo3"]
    ),
    new Sechedule(
        new Date("2022-2-14"),
        ["todo1", "todo2","todo3"]
    ),
]

export default {
    name : "Schedule",
    data(){ return{
        secheduleData
    }},
    components : {
        SecheduleItem
    }
}
</script>

<style>

.schedule {
    overflow: auto;
}

.schedule::-webkit-scrollbar{
    width : 20px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 16px;
}

.schedule::-webkit-scrollbar-thumb{
    background-color: var(--gray4);
    background-clip: padding-box;
    border : 3px solid transparent;
    border-radius: 12px;
}

.schedule:hover::-webkit-scrollbar-thumb {
    background-color: var(--gray6);
}

.schedule .main-page-item-content{
    width : 200%;

    padding : 4px;

    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap : 4px;
}

.schedule .schedule-item:nth-child(1){
    color : white;
    background-color: var(--main-color3);
    box-shadow: 0px 4px 13px var(--main-color3);
}

</style>