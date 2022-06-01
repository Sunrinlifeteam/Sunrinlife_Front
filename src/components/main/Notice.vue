<template>
<div class="notice-and-hot-sunrin main-page-item">
    <div class="main-page-item-title"><h3>공지</h3></div>
    <div class="main-page-item-content">
        <div v-for="i, j, in noticeMain" :key="j" class="notice-list">
            <NoticeIcon :type="i.type"/>
            <p class="title text-truncated" @click="$router.push(`/notice/${i.id}`)">{{i.title}}</p>
        </div>
    </div>
</div>
</template>

<script>
import NoticeIcon from "./../NoticeIcon.vue"

import { mapState } from "vuex"

export default {
    name : "Notice",
    data(){
        return {}
    },
    methods :{

    },
    components : {
        NoticeIcon
    },
    mounted(){
        
    },
    computed:{
        ...mapState(["noticeMain"]),
    },
}
</script>

<style scoped>
.notice-and-hot-sunrin{
    
}

.notice-and-hot-sunrin .main-page-item-content{
    display: flex;
    flex-direction: column;
}

.notice-list{
    height : 28px;

    display: flex;
    gap : 12px;
    margin-bottom:14px;
}

.notice-and-hot-sunrin .icon-wrap {
    padding-right : 4px;
}

.title{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;

    /* margin-bottom:18px; */

    cursor: pointer;
    flex: 1;

    margin-top:1.5px;
}
</style>
