<template>
<div class="notice main-page-item">
    <div class="main-page-item-title"><h3>공지</h3></div>
    <div class="main-page-item-content">
        <div v-for="i, j, in noticeMain" :key="j" class="title_list">
            <NoticeIcon :type="i.type"/>
            <p class="title text-truncated" @click="$router.push(`/notice/${i.id}`)">{{i.title}}</p>
        </div>
    </div>
</div>
</template>

<script>
import NoticeIcon from "./../NoticeIcon.vue"

import { mapState } from "vuex"
import { getNoticeMain } from "./../../api.js"
import store from "../../store.js"

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
        getNoticeMain().then((data) => {
            store.commit("getNoticeMain", data)
        })
    },
    computed:{
        ...mapState(["noticeMain"]),
    },
}
</script>

<style>
.notice{
    
}

.notice .main-page-item-content{
    display: flex;
    flex-direction: column;
    
}

.title_list{
    height : 28px;

    display: flex;
    gap : 12px;
    margin-bottom:14px;
}

.notice .icon-wrap {
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
