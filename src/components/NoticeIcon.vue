<template>
<div
    v-if="type === 'school'"
    class="notice-icon notice-school none-dragging">학교</div>
<div
    v-else-if="type === 'intranet'"
    class="notice-icon notice-intranet none-dragging">인트라넷</div>
</template>

<script>
export default {
    name : "Notice icon",
    props : {
        type : String
    }
}
</script>

<style scoped>
.notice-icon {
    font-size : 14px;
    padding : 2px 10px;
    margin-bottom:14px;
    border-radius: 24px;
    color : var(--gray1);
    height:28px;
    text-align: center;
    
    padding : 4px 4px;

    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

.notice-icon.notice-school {
    background-color: #ffcf49;
    width:50px;
}

.notice-icon.notice-intranet {
    background-color: #4992ff;
    width: 74px;
}
</style>