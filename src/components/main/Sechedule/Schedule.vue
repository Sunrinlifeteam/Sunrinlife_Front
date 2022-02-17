<template>
<div class="schedule main-page-item">
    <h3>일주일간 일정</h3>
    <!--div>{{ tasks[0].schedule[0].content }}</div-->

    <div class="schedule-item">
    <div class="schedule-items" v-for="task in tasks" :key="task">
        <div class="items-week">{{ task.day }}</div>
        <div v-for="(content, i) in task.schedule" :key="i">

            <div v-if="!task.schedule[i].isEditable" @click.prevent="task.schedule[i].isEditable = true">
                {{ task.schedule[i].content }}
            </div>
            <div v-else>
                <input placeholder="추가할 내용 입력" v-model="task.schedule[i].content" @keyup.enter="task.schedule[i].isEditable = false"/>
                <button @click.prevent="task.schedule[i].isEditable = false">ok</button>
            </div>

        </div>

        <div>
            <button @click.prevent="task.schedule.push({content: '', state: 'none', isCompleted: false, isEditable: true})">add</button>
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
    grid-template-columns: repeat(7, 1fr);
    grid-gap : 8px;
    overflow: auto;
}
.schedule-items{
    width: 200px;
    background-color: aqua;
}
.items-week {
    color: red;
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
                        state: 'none',
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: 'UX 디자인',
                        state: 'clubActivity',
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '학원 가기',
                        state: 'none',
                        isCompleted: true,
                        isEditable: false
                    },
                    {
                        content: '프로그래밍',
                        state: 'performanceEvaluation',
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
                        state: 'none',
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비',
                        state: 'none',
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
                        state: 'none',
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비 완료',
                        state: 'none',
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
                        state: 'none',
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비',
                        state: 'none',
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
                        state: 'none',
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비',
                        state: 'none',
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
                        state: 'none',
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비',
                        state: 'none',
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
                        state: 'none',
                        isCompleted: false,
                        isEditable: false
                    },
                    {
                        content: '공모전 준비',
                        state: 'none',
                        isCompleted: false,
                        isEditable: false
                    }
                ]
            }
        ]
    }},
    components : {
    }
}
</script>