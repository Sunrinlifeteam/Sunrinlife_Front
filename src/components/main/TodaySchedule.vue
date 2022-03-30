<template>
<div class="today-schedule main-page-item">
    <div class="main-page-item-title"><h3>시간표</h3></div>
    <div class="main-page-item-content two_panel">
            
        <p v-for="i, n in todaySchedule" :key="n">{{ i }}</p>

    </div>
</div>
</template>

<script>
import {getTodaySchedule} from "../../api.js"
import {mapState} from "vuex"

export default {
    name : "TodaySchedule",
    data(){return{
        
    }},
    computed:{
        ...mapState(["todaySchedule"]),
        getUserData(){
            return this.$store.getters.getUserData
        }
    },
    watch:{
        getUserData(){
            let userData = this.$store.getters.getUserData
            getTodaySchedule(userData.grade, userData.class).then((data) => {
                this.$store.commit("getTodaySchedule", data)
            })
        }
    }
}
</script>

<style>
.today-schedule{

}

.today-schedule .time-table{
    
}


</style>