<template>
<div class="schedule main-page-item">
    <h3>일정</h3>

    <div class="schedule-item">
        <!-- <div class="schedule-items" v-for="task in tasks" :key="task">
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
        </div> -->
        <div class="schedule-items" v-for="day in weeks" :key="day">
            <div class="item-day">{{ day.date }}</div>
            <template v-for="content in scheduleOfficial" :key="content">
                <div v-if="day.date === content.date" class="schedule_list_item">
                    <div class="schedule_box" :class="'official'">
                        <div class="item-content">{{ content.name }}</div>
                    </div>
                </div>
            </template>
            <template v-for="content, i in getSchedulePersonal" :key="content">
                <div v-if="day.date === content.date" class="schedule_list_item">
                    <div class="schedule_box personal" v-if="!content.isEditable">
                        <div class="item-content" @dblclick.prevent="content.isEditable=true">{{ content.body }}</div>
                        <img src="../../../assets/delete.svg" class="item-button" @click.prevent="deleteTodo(getSchedulePersonal, i, content.id)">
                    </div>
                    <div class="schedule_box_edit personal" v-if="day.date === content.date && content.isEditable">
                        <input class="item-input" placeholder="추가할 내용 입력" v-model="content.body" @keyup.enter="editTodoComplete(getSchedulePersonal,content, i)" @blur="editTodoComplete(getSchedulePersonal, content, i)" autofocus/>
                        <img src="../../../assets/delete.svg" class="item-button" @click.prevent="getSchedulePersonal.splice(i, 1)">
                    </div>
                </div>
            </template>
            <div class="add_button_panel">
                <img src="../../../assets/add.svg" class="add-button" @click.prevent="addTodo(day.date)">
            </div>
        </div>
        
        
    </div>
    
</div>
</template>

<script>
import {mapState} from "vuex"
import {addSchedulePersonal, delSchedulePersonal, editSchedulePersonal } from "../../../api.js"
export default {
    name : "Schedule",
    data(){ return{
        weeks:this.getWeek(),
        
    }},
    components : {

    },
    computed:{
        ...mapState(["scheduleOfficial"]),
        getSchedulePersonal: function(){
            return this.$store.getters.getSchedulePersonal
        },
    },
    watch:{
    },
    methods: {
        addTodo(date) {
            let schedule = this.$store.getters.getSchedulePersonal
            schedule.push({date:date, body: '', isEditable: true, type: "add"})
            this.$store.dispatch("editSchedulePersonal", schedule)
            //console.log(this.$store.getters.getSchedulePersonal)
        },
        editTodoComplete(get, self, index){
            self.isEditable=false
            if(self.body === '') get.splice(index,1)
            else if(self.type === "add") {
                delete self.type
                addSchedulePersonal({date:self.date, body:self.body}).then((res)=>{
                    self.id = res.id
                })
            }
            else if(self.id !== undefined){
                editSchedulePersonal(self.id, {date:self.date, body:self.body})
            }
        },
        deleteTodo(get, i, id){
            delSchedulePersonal(id)
            get.splice(i, 1)
        },
        getWeek(){
            function leftPad(value) {
                if (value >= 10) {
                    return value
                }
                return `0${value}`
            }
            function toStringByFormatting(source, delimiter = '-') {
                const year = source.getFullYear(); const month = leftPad(source.getMonth() + 1)
                const day = leftPad(source.getDate())
                return [year, month, day].join(delimiter)
            }
            let week = []
            let now
            for(var i = 0; i < 7; i++){
                now = new Date()
                week.push({"date":toStringByFormatting(new Date(now.setDate(now.getDate() + i)))})
            }
            

            return week
        }
    }
}
</script>

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
    width: 5px;
    margin-top:2px;
    margin-left:2px;
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
.official:hover{
    grid-template-columns: none;
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

