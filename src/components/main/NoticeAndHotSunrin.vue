<template>
<div class="notice-and-hotsunrin main-page-item">

    <div class="main-page-content-wrap notice">
        <div class="main-page-item-title">
            <h3>공지</h3>

            <img src="@/assets/plus_icon.svg" alt="공지 더보기 버튼"
                @click="$router.push({ name:'notice' })">
        </div>

        <div class="main-page-item-content">
            <div v-for="(i, j) in noticeMain" :key="j" class="notice-list">
                <NoticeIcon :type="i.type"/>
                <p class="title text-truncated" @click="$router.push(`/notice/${i.id}`)">{{i.title}}</p>
            </div>
        </div>
    </div>

    <div class="main-page-content-wrap hotsunrin">
        <div class="main-page-item-title">
            <h3>핫선린</h3>

            <img src="@/assets/plus_icon.svg" alt="핫선린 더보기 버튼"
                @click="$router.push({ name:'community' })">
        </div>

        <div class="main-page-item-content">
            <div v-for="(i, j) in boardData" :key="j" class="hotsunrin-list" @click="$router.push(`/postDetail/${j}`)">
                <div class="heart-count">{{ i.heartCount }}</div>
                <p class="title text-truncated">{{i.title}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NoticeIcon from "@/components/NoticeIcon";
import { getNoticeMain } from "@/api";
import store from "@/store";
import { mapState } from "vuex";

export default {
    name: "NoticeAndHotSunrin",
    data(){
        return {
            boardData : [
                {
                    heartCount : 13,
                    title : "선린인터넷고등학교 인트라넷 오픈",
                    writer : "송우진",
                    timeStamp : new Date()
                },
                {
                    heartCount : 13,
                    title : "선린인터넷고등학교 인트라넷 오픈",
                    writer : "송우진",
                    timeStamp : new Date()
                },
                {
                    heartCount : 13,
                    title : "선린인터넷고등학교 인트라넷 오픈",
                    writer : "송우진",
                    timeStamp : new Date()
                },
            ]
        }
    },
    methods :{

    },
    components : {
        NoticeIcon
    },
    mounted(){
        getNoticeMain(3).then((data) => {
            store.commit("getNoticeMain", data)
        })
    },
    computed:{
        ...mapState(["noticeMain"]),
    },
};
</script>

<style scoped>
.main-page-item-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.main-page-item-title img {
    cursor: pointer;
}

.main-page-content-wrap {
    display: grid;
    grid-template-rows: auto 1fr;
    gap : 8px;
}

.notice-list {
    height: 24px;

    margin-bottom:14px;

    display: flex;
    gap: 12px;

    cursor: pointer;
}

.notice-list .title {
    flex: 1;
}

.hotsunrin-list {
    padding : 0 8px;

    margin-bottom: 14px;

    display: flex;
    align-items: center;
    gap: 10px;

    cursor: pointer;
}

.hotsunrin-list .heart-count {
    color: #ff4949;
    font-size: 12px;
    font-weight: bold;
}

.hotsunrin-list .heart-count {
    color: #ff4949;
    font-size: 12px;
    font-weight: bold;
}

.notice-list:last-child, .hotsunrin-list:last-child {
    margin-bottom: 0px;
}
</style>