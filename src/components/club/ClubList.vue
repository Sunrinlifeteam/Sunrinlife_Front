<template>
<ul class="club-list neu-morphism-card">
    <li
        v-for="(i, n) in clubList" :key="n"
        @click="$emit('clubListItemClick', n)"
        :class="{ 'seleted' : clubIdx == n}">
        <img src="/edcan.png" :alt="`${i} 동아리 로고`" class="club-icon">
        <div class="club-name">{{ i }}</div>
    </li>
</ul>
</template>

<script>
export default {
    name : "Cub list",
    data(){ return{
        clubList : [
            "AnA",
            "App:ple Pi",
            "EDCAN",
            "IWOP",
            "RG",
            "zer0pen",
        ]
    }},
    props : {
        marorIdx : Number,
        clubIdx : Number,
    }
}
</script>

<style scoped>
.club-list {
    padding: 25px 16px;

    display: inline-flex;
    flex-direction: column;
    gap : 4px;
}

.club-list li {
    padding: 8px 26px;
    border-radius: 8px;

    display: inline-flex;
    align-items: center;
    gap : 8px;

    cursor: pointer;
}

.club-list li.seleted {
    background-color: var(--gray1);
}

.club-icon {
    width: 24px;
    height: 24px;
    box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.16);
}

.club-name{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size:16px;
}

</style>