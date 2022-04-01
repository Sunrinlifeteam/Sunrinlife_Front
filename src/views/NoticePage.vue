<template>

<Header/>
<Sidebar/>

<div class="panel page notice-page">
    <div class="page-content">
        <!-- <div class="search-wrap">
            <input type="text" placeholder="검색">
            <img src="/img/search.svg" alt="검색 아이콘" class="search-button">
        </div> -->

        <div class="notice-content" :class="{'neu-morphism-card' : !($store.state.isMobileWindow)}">
            <div class="header">
                <h3>공지</h3>
                <div class="search-wrap">
                    <input v-model="searchQueryText" type="text" placeholder="검색" @keyup.enter="search()">
                    <img src="/img/search.svg" alt="검색 아이콘" class="search-button" @click="search()">
                </div>
            </div>

            <ul class="notice-list">
                <li v-for="i, n in loadedNoticeData" :key="n"
                    @click="$router.push(`/notice/${i.id}`)">
                    <NoticeIcon :type="i.type"/>

                    <p class="notice-title text-truncated">{{ i.title }}</p>
                </li>
            </ul>

            <div class="pagination-wrap">
                <img src="./../assets/prev_arrow.svg" alt="" class="arrow prev-btn"
                    @click="()=>{ if(pageId > 1) changePage(pageId-1) }">
                <div class="page-button-wrap">
                    <template v-for="i in Math.min(loadedPageCount, 5)" :key="i">
                        <div
                            class="page-btn"
                            :class="{'current-page' : (pageStart + i) === pageId}"
                            @click="changePage(pageStart + i)">
                            {{ pageStart + i }}
                        </div>
                    </template>
                </div>
                <img src="./../assets/next_arrow.svg" alt="" class="arrow next-btn"
                    @click="()=>{ if(pageId < loadedPageCount) changePage(pageId+1) }">
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

import { getNotice, getNoticeSearch, getNoticePageCountWithSearch } from "./../api.js"
import store from "../store.js"



export default {
    naem : "Notice",
    data(){return{
        loadedNoticeData: {},
        loadedPageCount: 0,
        searchQueryText: "",
    }},
    components : {
        Sidebar,
        Header,

        NoticeIcon,
    },
    computed:{
        ...mapState(["noticePageCount", "noticePage", "notice"]),
        pageId: function(){
            return parseInt(this.$route.query.page) || 1;
        },
        searchQuery: function(){
            return this.$route.query.search;
        },
        pageStart: function(){
            return Math.max(Math.min(this.pageId - 3, this.loadedPageCount - 5), 0);
        },
        savedPages: function(){
            return Object.keys(this.$store.getters.getNoticePage || {}).map(x => parseInt(x)).filter(x => x);
        }
    },
    watch:{
        noticePageCount: function() {
            this.loadedPageCount = this.$store.getters.getNoticePageCount;
        },
        pageId: function() {
            this.loadNotice();
        }
    },
    methods: {
        loadNotice: function() {
            if (!this.searchQuery && this.savedPages.includes(this.pageId)){
                this.loadedNoticeData = this.noticePage[this.pageId].map(x => this.notice[x]);
            }else{
                this.getNoticeTask().then(res => {
                    if (!this.searchQuery)
                        store.commit("getNoticePage", {
                            page: this.pageId,
                            ids: res.map(x => x.id)
                        })
                    for (let data of res)
                        store.commit("getNotice", data)
                    this.loadedNoticeData = res;
                });
            }
        },
        getNoticeTask: function(){
            if (this.searchQuery)
                return getNoticeSearch(this.pageId, this.searchQuery);
            return getNotice(this.pageId);
        },
        changePage: async function(page) {
            await this.$router.push({ path: 'notice', query: { ...this.$route.query, page }});
        },
        search: async function(){
            await this.$router.push({ path: 'notice', query: { search: this.searchQueryText }});
            await this.updateCount();
            this.loadNotice();
        },
        updateCount: async function(){
            if (this.searchQuery)
                this.loadedPageCount = await getNoticePageCountWithSearch(this.searchQuery);
            else
                this.loadedPageCount = this.$store.getters.getNoticePageCount;
        }
    },
    mounted() {
        this.updateCount();
        this.loadNotice();
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

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search-wrap {
    height: 40px;
    max-width : 323px;
    flex : 1;

    padding: 13px 36px 13px 24px;
    border-radius: 8px;
    box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #f5f6f7;

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
    flex : 1;
    
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
