<template>
    <div class="panel page notice-page">
        <div class="page-content">
            <div
                class="notice-content"
                :class="{ 'neu-morphism-card': !$store.state.isMobileWindow }"
            >
                <div class="header">
                    <h3>공지</h3>
                    <div class="search-wrap">
                        <input
                            v-model="searchQueryText"
                            type="text"
                            placeholder="검색"
                            @keyup.enter="search()"
                        />
                        <img
                            src="/img/search.svg"
                            alt="검색 아이콘"
                            class="search-button"
                            @click="search()"
                        />
                    </div>
                </div>

                <ul class="notice-list">
                    <li
                        v-for="(i, n) in loadedNoticeData"
                        :key="n"
                        @click="$router.push({ name: 'noticeId', params: { noticeId: i.id } })"
                    >
                        <NoticeIcon :type="i.type" />

                        <p class="notice-title text-truncated">{{ i.title }}</p>
                    </li>
                </ul>
                <Pagination v-bind:page-count="loadedPageCount" />
            </div>
        </div>
    </div>
</template>

<script>
import NoticeIcon from "../components/NoticeIcon.vue";

import { mapState } from "vuex";

import {
    getNotice,
    getNoticeSearch,
    getNoticePageCountWithSearch,
    getNoticePageCount
} from "../api.js";
import store from "../store.js";
import Pagination from "../components/Pagination.vue";

export default {
    name: "Notice",
    data() {
        return {
            loadedPageCount: null,
            loadedNoticeData: {},
            searchQueryText: "",
        };
    },
    components: {
        NoticeIcon,
        Pagination
    },
    computed: {
        ...mapState(["noticePageCount", "noticePage", "notice"]),
        getAuthToken() {
            return this.$store.getters.getAuthToken;
        },
        pageId: function () {
            return parseInt(this.$route.query.page) || 1;
        },
        searchQuery: function () {
            return this.$route.query.search;
        },
        savedPages: function () {
            return Object.keys(this.$store.getters.getNoticePage || {})
                .map((x) => parseInt(x))
                .filter((x) => x);
        },
    },
    watch: {
        getAuthToken(){
            getNoticePageCount().then(res=>store.commit("setNoticePageCount", res));
        },
        pageId: function () {
            this.loadNotice();
        },
        noticePageCount: function() {
            this.loadedPageCount = this.$store.getters.getNoticePageCount;
        },
    },
    methods: {
        loadNotice: function () {
            if (!this.searchQuery && this.savedPages.includes(this.pageId)) {
                this.loadedNoticeData = this.noticePage[this.pageId].map(
                    (x) => this.notice[x]
                );
            } else {
                this.getNoticeTask().then((res) => {
                    if (!this.searchQuery)
                        store.commit("getNoticePage", {
                            page: this.pageId,
                            ids: res.map((x) => x.id),
                        });
                    for (let data of res) store.commit("getNotice", data);
                    this.loadedNoticeData = res;
                });
            }
        },
        getNoticeTask: function () {
            if (this.searchQuery)
                return getNoticeSearch(this.pageId, this.searchQuery);
            return getNotice(this.pageId);
        },
        search: async function () {
            await this.$router.push({
                path: "notice",
                query: { search: this.searchQueryText },
            });
            await this.updateCount();
            this.loadNotice();
        },
        updateCount: async function () {
            if (this.searchQuery)
                this.loadedPageCount = await getNoticePageCountWithSearch(this.searchQuery);
            else this.loadedPageCount = this.$store.getters.getNoticePageCount
        },
    },
    mounted() {
        this.loadNotice();
        this.updateCount();
        if(this.$store.getters.getNoticePageCount === null) getNoticePageCount().then(res=>store.commit("setNoticePageCount", res));
        if(this.$route.query.search){
            this.searchQueryText = this.$route.query.search
        }
    },
};
</script>

<style scoped lang="scss">
@import "src/assets/style/notice/notice/noticePage/style.scss";
</style>
