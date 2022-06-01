<template>
<div class="today-schedule main-page-item">
    <div class="main-page-item-title"><h3>시간표</h3></div>
    <div class="main-page-item-content two_panel">
            
        <p v-for="i, n in todaySchedule" :key="n" class="text-truncated">{{ i }}</p>

    </div>
</div>
</template>

<script>
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
        
    }
}
</script>

<style scoped>
.today-schedule{

}

.today-schedule .time-table{
    
}

.today-schedule .main-page-item-content {
    overflow-y: auto;
}

.main-page-item-content p {
    font-size: 14px;
}

.two_panel {
    padding : 8px 12px;

    display: flex;
    flex-direction: column;
    gap : 5px;
}

</style>