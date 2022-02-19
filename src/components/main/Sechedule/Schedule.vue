<template>
<div class="schedule main-page-item">
    <h3>일주일간 일정(스타일 X)</h3>

    <div class="schedule-item">
        <div class="schedule-items" v-for="task in tasks" :key="task">
            <div class="item-day">{{ task.day }}</div>
            <div v-for="(content, i) in task.schedule" :key="i">

                <div class="item-list-true" v-if="!task.schedule[i].isEditable">
                    <div class="item-content" @click.prevent="task.schedule[i].isEditable = true">{{ task.schedule[i].content }}</div>
                    <button class="item-button" @click.prevent="task.schedule.splice(i, 1)">del</button>
                </div>
                <div class="item-list-false" v-if="task.schedule[i].isEditable">
                    <input class="item-input" placeholder="추가할 내용 입력" v-model="task.schedule[i].content" @keyup.enter="editTodo(task.schedule[i])"/>
                    <button class="item-button" @click.prevent="editTodo(task.schedule[i])">ok</button>
                    <button class="item-button" @click.prevent="task.schedule.splice(i, 1)">del</button>
                </div>

            </div>
            <div v-if="task.schedule.length == 0">Add Todos!</div>

            <div>
                <button class="add-button" @click.prevent="addTodo(task.schedule)">add</button>
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
    grid-template-columns: repeat(7, 50%);
    grid-gap: 8px;
    overflow: auto;
}
.schedule-items{
    padding: 8px;
    background-color: rgb(248, 248, 248);
    border-radius: 8px;
    display: block;
}
.item-day {
    color: black;
    font-family: "GmarketSansMedium";
    font-size: 16px;
    font-weight: bold;
    height: 24px;
}
.item-list-true {
    height: 24px;
    display: grid;
    grid-template-columns: 1fr 30px;
    font-family: "GmarketSansMedium";
    margin-bottom: 4px;
    align-items: center;
}
.item-list-false {
    display: grid;
    grid-template-columns: 1fr 30px 30px;
    grid-gap: 4px;
    font-family: "GmarketSansMedium";
    margin-bottom: 4px;
}
.item-content {
    font-size: 16px;
    font-family: "GmarketSansMedium";
}
.item-input {
    width: 100%;
    height: 24px;
    border-radius: 4px;
    font-size: 16px;
    font-family: "GmarketSansMedium";
    border: none;
    background-color: rgb(255, 236, 233);
}
.item-button {
    height: 24px;
    border-radius: 4px;
    font-size: 16px;
    font-family: "GmarketSansMedium";
    background-color: rgb(255, 74, 42);
}
.item-button:hover {
    background-color: rgb(255, 142, 122);
    scale: scale(1);
    transition: none;
}
.add-button {
    width: 100%;
    height: 24px;
    border-radius: 4px;
    font-size: 16px;
    font-family: "GmarketSansMedium";
    background-color: rgb(255, 74, 42);
}
.add-button:hover {
    background-color: rgb(255, 142, 122);
    scale: scale(1.00);
    transition: none;
}
</style>

<script>
export default {
    name : "Schedule",
    data(){ return{
        tasks: [
            //Mon
            {
                day: 'mon',
                schedule: [
                    {
                        content: '밥 먹기',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: 'UX 디자인',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '학원 가기',
                        isPrimary: false,
                        isCompleted: true,
                        isEditable: false
                    },
                    {
                        content: '프로그래밍',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    }
                ]
            },
            //Tue
            {
                day: 'tue',
                schedule: [
                    {
                        content: '컴퓨터 수리',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    }
                ]
            },
            //Wed
            {
                day: 'wed',
                schedule: [
                    {
                        content: '컴퓨터 수리',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비 완료',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    }
                ]
            },
            //Thu
            {
                day: 'thu',
                schedule: [
                    {
                        content: '컴퓨터 수리',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    }
                ]
            },
            //Fri
            {
                day: 'fri',
                schedule: [
                    {
                        content: '컴퓨터 수리',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    }
                ]
            },
            //Sat
            {
                day: 'sat',
                schedule: [
                    {
                        content: '컴퓨터 수리',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    }
                ]
            },
            //Sun
            {
                day: 'sun',
                schedule: [
                    {
                        content: '컴퓨터 수리',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비',
                        isPrimary: false,
                        isCompleted: false,
                        isEditable: false
                    }
                ]
            }
        ]
    }},
    components : {
    },
    methods: {
        addTodo(schedule) {
            schedule.push({content: '', state: 'none', isCompleted: false, isEditable: true})
        },
        editTodo(schedule) {
            schedule.isEditable = false
        }
    }
}
</script>