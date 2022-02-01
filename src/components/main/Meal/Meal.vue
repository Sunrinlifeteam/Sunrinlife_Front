<template>
<div class="meal main-page-item">
    <h3>급식</h3>

    <ul>
        <li v-for="i, n in mealData" :key="n">{{i}}</li>
    </ul>

    <div class="remaining-time">
        점심시간까지<br>
        00시간 00분 00초 남음
    </div>

    <div class="meal-detail" @click="$router.push('meal')">세부 보기</div>
</div>
</template>

<script>
const mealData = [
    "밥",
    "국",
    "반찬",
    "에드캔은",
    "정말 최고야",
]

export default {
    name : "Meal",
    data(){return{
        mealData
    }},
    components :{

    }
}
</script>

<style>
.meal {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.meal ul {
    padding : 16px;
}

.meal li {
    font-size: 1.25em;
    list-style: disc;
}

.meal-detail {
    text-decoration: underline;
    cursor: pointer;
}
</style>