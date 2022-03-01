<template>
<ul class="club-list neu-morphism-card">
    <li @click="$emit('clubListItemClick', 0)">
        <img src="/edcan.png" alt="AnA 동아리 로고" class="club-icon">
        <div class="club-name">AnA</div>
    </li>
    <li @click="$emit('clubListItemClick', 1)">
        <img src="/edcan.png" alt="App:ple Pi 동아리 로고" class="club-icon">
        <div class="club-name">App:ple Pi</div>
    </li>
    <li @click="$emit('clubListItemClick', 2)">
        <img src="/edcan.png" alt="EDCAN 동아리 로고" class="club-icon">
        <div class="club-name">EDCAN</div>
    </li>
    <li @click="$emit('clubListItemClick', 3)">
        <img src="/edcan.png" alt="IWOP 동아리 로고" class="club-icon">
        <div class="club-name">IWOP</div>
    </li>
    <li @click="$emit('clubListItemClick', 4)">
        <img src="/edcan.png" alt="RG 동아리 로고" class="club-icon">
        <div class="club-name">RG</div>
    </li>
    <li @click="$emit('clubListItemClick', 5)">
        <img src="/edcan.png" alt="zer0pen 동아리 로고" class="club-icon">
        <div class="club-name">zer0pen</div>
    </li>
</ul>
</template>

<script>
export default {
    name : "Cub list",
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

    display: flex;
    align-items: center;
    gap : 8px;

    cursor: pointer;
}

.club-list li.current {
    background-color: #f5f6f7;
}

.club-icon {
    width: 24px;
    height: 24px;
    box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.16);
}
</style>