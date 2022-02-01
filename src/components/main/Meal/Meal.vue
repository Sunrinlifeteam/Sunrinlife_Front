<template>
<div class="meal main-page-item">
    <h3>급식</h3>

    <div class="meal-items-wrap">
        <MealItem 
            v-for="i, n in mealDatas" :key="n"
            :mealData="i" />
    </div>
    <div class="meal-detail" @click="$router.push('meal')">세부 보기</div>
</div>
</template>

<script>
import MealItem from "./MealItem.vue"

const mealDatas = [
    {
        date : new Date("2022-2-1"),
        menus : ["밥", "국", "반찬", "에드캔은", "정말 최고야",]
    },
    {
        date : new Date("2022-2-2"),
        menus : ["밥", "국", "반찬", "에미야", "국이 짜다",]
    },
    {
        date : new Date("2022-2-3"),
        menus : ["밥", "국", "반찬", "선린 최고의", "동아리", "EDCAN"]
    },
]

export default {
    name : "Meal",
    data(){return{
        mealDatas
    }},
    components :{
        MealItem
    }
}
</script>

<style>
.meal-items-wrap{
    display : grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    grid-gap: 12px;
}
</style>