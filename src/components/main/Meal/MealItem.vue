<template>
<div class="mealItem"
    :class="{tooday : mealData.date.isTooDay()}"
    >

    <h4>{{ mealData.date.toLocaleDateString() }}</h4>
    <ul>
        <li v-for="i, n in mealData.menus" :key="n">{{ i }}</li>
    </ul>

</div>
</template>

<script>
export default {
    name : "MealItem",
    data(){return{

    }},
    props:{
        mealData : Object
    }
}
</script>

<style>
.mealItem{
    display: grid;
    grid-template-rows: auto 1fr;
}

.mealItem h4{
    display : inline;
}

.mealItem ul{
    padding : 8px;
    border: 4px solid var(--flat-purple);
    border-radius: 16px;

    display : inline-flex;
    flex-direction: column;
    justify-content: space-around;
}

.mealItem.tooday ul{
    color : white;
    background-color: var(--flat-purple);
}

.mealItem ul li{
    display : inline;
}
</style>