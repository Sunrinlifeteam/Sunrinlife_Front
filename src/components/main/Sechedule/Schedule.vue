<template>
<div class="schedule main-page-item">
    <h3>일정</h3>

    <div class="schedule-item">
        <div class="schedule-items" v-for="task in tasks" :key="task">
            <div class="item-day">{{ task.day }}</div>
            <div v-for="(content, i) in task.schedule" :key="i" class="schedule_list_item">
                <div class="schedule_box" v-if="!content.isEditable" v-bind:class="{official:content.official, personal:!content.official}">
                    <div class="item-content" @dblclick.prevent="editTodo(content)">{{ content.content }}</div>
                    <img v-if="!content.official" src="../../../assets/delete.svg" class="item-button" @click.prevent="task.schedule.splice(i, 1)">
                </div>
                <div class="schedule_box_edit personal" v-if="content.isEditable">
                    <input class="item-input" placeholder="추가할 내용 입력" v-model="content.content" @keyup.enter="editTodoComplete(task, i)" @blur="editTodoComplete(task, i)" autofocus/>
                    <img src="../../../assets/delete.svg" class="item-button" @click.prevent="task.schedule.splice(i, 1)">
                </div>

            </div>
            <div v-if="task.schedule.length == 0">Add Todos!</div>
            <div class="add_button_panel">
                <img src="../../../assets/add.svg" class="add-button" @click.prevent="addTodo(task.schedule)">
            </div>
        </div>
    </div>
    
</div>
</template>

<style>
.schedule .main-page-item {
    overflow: auto;
}
.schedule-item {
    display: grid;
    grid-template-columns: repeat(7, 148px);
    grid-gap: 22px;
    overflow: auto;
    padding-bottom:5px;
}
.schedule-item::-webkit-scrollbar {
    height: 5px;
    margin-top:2px;
}
.schedule-item::-webkit-scrollbar-track {
    background-color: none; 
}

.schedule-item::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
}

.schedule-items{
    padding: 8px;
    background-color: rgb(248, 248, 248);
    border-radius: 8px;
    display: block;
}
.item-day {
    color: #3d3d3d;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 16px;
}
.schedule_list_item{
    margin-bottom:10px;
    cursor:pointer;
}
.schedule_box {
    height:32px;
    display: grid;
    grid-template-columns: auto;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size:14px;
    margin-bottom: 4px;
    align-items: center;
    border-radius: 8px;
    color:white;
    user-select:none;
}

.schedule_box:hover{
    grid-template-columns:  1fr 30px;
}
.schedule_box:hover > .item-button{
    display:block;
}

.official{
    background-color:#ffcf49;
    cursor:default;
}
.personal{
    background-color:#4992ff;
}

.schedule_box_edit {
    height:32px;
    display: grid;
    grid-template-columns: auto;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size:14px;
    margin-bottom: 4px;
    align-items: center;
    border-radius: 8px;
    color:white;
}
.schedule_box_edit:hover{
    grid-template-columns:  1fr 30px;
}
.schedule_box_edit:hover > .item-button{
    display:block;
}

.item-content {
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left:10px;
}
.item-input {
    height: 24px;
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    background-color: transparent;
    color:white;
    border: none;
    margin-left:10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.item-button {
    height: 24px;
    margin-left:4px;
    display:none;
}
.item-button:hover{
    cursor: pointer;
}

.add_button_panel{
    text-align: center;
}

.add-button {
    height: 24px;
}
.add-button:hover {
    cursor: pointer;
    scale: scale(1.00);
    transition: none;
}
</style>

<script>
import {getSchedule} from "../../../api.js"
export default {
    name : "Schedule",
    data(){ return{
        tasks: [
            //Mon
            {
                day: '3월 2일 수',
                schedule: [
                    {
                        content: '(학교 대회)',
                        official: true,
                    },
                    {
                        content: 'UX 디자인',
                        official: false,
                    },
                    {
                        content: '학원 가기',
                        official: false,
                    },
                    {
                        content: '프로그래밍',
                        official: false,
                    }
                ]
            },
            //Tue
            {
                day: '3월 3일 목',
                schedule: [
                    {
                        content: '(행사)',
                        official: true,
                    },
                    {
                        content: '공모전 준비',
                        official: false,
                    }
                ]
            },
            //Wed
            {
                day: '3월 4일 금',
                schedule: [
                    {
                        content: '컴퓨터 수리',
                        official: false,
                    },
                    {
                        content: '공모전 준비 완료',
                        official: false,
                    }
                ]
            },
            //Thu
            {
                day: '3월 5일 토',
                schedule: [
                    {
                        content: '(대회)',
                        official: true,
                    },
                    {
                        content: '(대회)',
                        official: true,
                    }
                ]
            },
            //Fri
            {
                day: '3월 6일 일',
                schedule: [
                    {
                        content: '컴퓨터 수리',
                        official: false,
                    },
                    {
                        content: '공모전 준비',
                        official: false,
                    }
                ]
            },
            //Sat
            {
                day: '3월 7일 월',
                schedule: [
                    {
                        content: '컴퓨터 수리',
                        official: false,
                    },
                    {
                        content: '공모전 준비',
                        official: false,
                    }
                ]
            },
            //Sun
            {
                day: '3월 8일 화',
                schedule: [
                    {
                        content: '(행사)',
                        official: true,
                    },
                    {
                        content: '공모전 준비',
                        official: false,
                    }
                ]
            }
        ]
    }},
    components : {
    },
    computed:{
        getAuthToken(){
            return this.$store.getters.getAuthToken
        }
    },
    watch:{
        getAuthToken(){
            getSchedule().then((data)=>{
                console.log(data)
            })
        }
    },
    methods: {
        addTodo(schedule) {
            schedule.push({content: '', state: 'none', isCompleted: false, isEditable: true})
        },
        editTodo(content) {
            if(!content.official) content.isEditable=true
        },
        editTodoComplete(task, i){
            task.schedule[i].isEditable=false
            if(task.schedule[i].content === '') task.schedule.splice(i,1)
        }
    }
}
</script>