<template>

<Header/>
<Sidebar/>

<div class="panel page notice-page">
    <div class="page-content">
        <div class="search-wrap">
            <input type="text" placeholder="검색">
            <img src="/img/search.svg" alt="검색 아이콘" class="search-button">
        </div>

        <div class="notice-content" :class="{'neu-morphism-card' : !($store.state.isMobileWindow)}">

            <ul class="notice-list">
                <li v-for="i, n in noticeData" :key="n"
                    @click="$router.push(`/notice/${i.id}`)">
                    <NoticeIcon :type="i.type"/>

                    <p class="notice-title text-truncated">{{ i.title }}</p>
                </li>
            </ul>

            <div class="pagination-wrap">
                <img src="./../assets/prev_arrow.svg" alt="" class="arrow prev-btn"
                    @click="()=>{ if(pageId > 1) pageId--}">
                <div class="page-button-wrap">
                    <template v-for="i in getNoticePageCount < 5 ? getNoticePageCount : 5" :key="i">
                        <div
                            class="page-btn"
                            :class="{'current-page' : pagination===1?pageId === i+(pageId-3):pagination===2?pageId === i+(pageId-4):pagination===3?pageId === i+(pageId-5):pageId === i}"
                            @click="pagination===1?pageId = i+(pageId-3):pagination===2?pageId = i+(pageId-4):pagination===3?pageId = i+(pageId-5):pageId = i">
                            {{ pagination===1?i+(pageId-3):pagination===2?i+(pageId-4):pagination===3?i+(pageId-5):i }}
                        </div>
                    </template>
                </div>
                <img src="./../assets/next_arrow.svg" alt="" class="arrow next-btn"
                    @click="()=>{ if(pageId < getNoticePageCount) pageId++ }">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import Header from "../components/Header.vue"

import NoticeIcon from "./../components/NoticeIcon.vue"

import { mapState } from "vuex"

import { getNotice } from "./../api.js"



export default {
    naem : "Notice",
    data(){return{
        pageId : 1,
        pagination: 0,

        noticeData : [],
    }},
    components : {
        Sidebar,
        Header,

        NoticeIcon,
    },
    computed:{
        ...mapState(["notice"]),
        getNoticePageCount:function(){
            return this.$store.getters.getNoticePageCount
        },
    },
    watch:{
        pageId:function(){
            const getNoticePageCount = this.$store.getters.getNoticePageCount
            if(getNoticePageCount < 6)
                this.pagination = 0
            else if(this.pageId > 2 && this.pageId < getNoticePageCount-1)
                this.pagination = 1
            else if(this.pageId === getNoticePageCount-1)
                this.pagination = 2
            else if(this.pageId === getNoticePageCount)
                this.pagination = 3
            else
                this.pagination = 0

            getNotice(this.pageId).then(res => this.noticeData = res)
        }
    },
    mounted() {
        getNotice(this.pageId).then(res => this.noticeData = res)
    },
}
</script>

<style scoped>

.page-content {
    height: 100%;
}

.notice-content {
    min-height : 581px;

    padding : 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    height:620px;
}

.search-wrap {
    width : 100%;
    height: 50px;

    margin-bottom : 16px;

    padding: 13px 36px 13px 24px;
    border-radius: 8px;
    box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;

    display: flex;
    gap : 8px;

    position: relative;
}

.search-wrap input {
    height: 100%;
    flex : 1;

    font-size: 16px;
    font-weight: 500;

    background-color: transparent;

    border : 0px;
    border-radius: 0px;
}

.search-wrap input::placeholder {
    color: #b9b9b9;
}

.search-wrap .search-button {
    width : 20px;
    height : 20px;

    cursor: pointer;
}


.notice-list {
    display: flex;
    flex-direction: column;
    gap : 24px;
}

.notice-list li {
    display: flex;
    gap : 12px;

    cursor: pointer;
}

.notice-list .notice-icon {
    margin : 0px;
}

.notice-list .notice-title {
    color: #3d3d3d;

    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin-top:1.5px;

    flex: 1;
}

.notice-list .writer {
    color: #b9b9b9;

    font-family: 'Noto Sans KR', sans-serif;
    font-size: 12px;
    font-weight: 500;
}

.pagination-wrap {
    height : 32px;
    position: absolute;
    display: flex;
    justify-content: center;
    gap : 12px;
    left:50%;
    transform:translate(-50%,0);
    bottom:10px;
}

.pagination-wrap img {
    width : 32px;

    padding : 8px;
}

.pagination-wrap .page-button-wrap {
    display: flex;
    gap : 4px;
}

.pagination-wrap .page-btn {
    width : 32px;

    color: #c9c9c9;
    
    font-family: 'Noto Sans KR', sans-serif;

    font-size: 14px;
    font-weight: 500;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
}

.pagination-wrap .page-btn:hover {
    background-color: var(--gray1);
}

.pagination-wrap .page-btn.current-page {
    color : white;

    background-color: var(--main-color4);
}

.pagination-wrap *  {
    cursor: pointer;
}

</style>
