<template>
    <div class="panel page community-page">
        <div class="page-content">
            <div class="community-content neu-morphism-card">
                <div class="temp">
                    <div class="header">
                        <h2 v-if="isAnonymous">익명 게시판</h2>
                        <h2 v-else>일반 게시판</h2>
                        <img src="../assets/user_profile_assets/correctionIcon.svg" alt="글쓰기" @click="$router.push({ name: `${isAnonymous ? 'anonymous' : 'public'}CommunityWrite`})"/>
                    </div>

                    <div class="search-filter-wrap">
                        <div class="search-wrap">
                            <input v-model="searchQuery" type="text" placeholder="검색"/>
                            <img src="/img/search.svg" alt="검색 아이콘" class="search-button"/>
                        </div>
                        <div class="filter-wrap">
                            <select class="select-board-type" v-model="filterSelect">
                                <option>전체</option>
                                <option>핫선린</option>
                                <option>일반</option>
                            </select>

                            <img src="../assets/community/select_arrow.svg" alt="실행"/>
                        </div>
                    </div>

                    <div class="field-name">
                        <div>
                            <div class="heart">추천</div>
                            <div class="title">제목</div>
                        </div>
                        <div>
                            <div class="writer" v-if="!isAnonymous">작성자</div>
                            <div class="date">작성일</div>
                        </div>
                    </div>

                    <div class="hot-sunrin board-list" v-if="(filterSelect === '전체' && pageId === 1) || filterSelect === '핫선린'">
                        <h3>핫선린</h3>

                        <ul>
                            <li v-for="(i, n) in hotData" :key="n" class="board-list-item">
                                <div>
                                    <div class="heart">
                                        {{ i.likes }}
                                    </div>
                                    <div class="title">
                                        <p @click="$router.push({ name: `${ isAnonymous ? 'anonymous' : 'public' }CommunityPostDetail`, params: { postId: i.id }, })">
                                            {{ i.title }}
                                        </p>
                                        <img src="../assets/community/eye_icon.svg" alt="" v-if="n % 3 == 0" />
                                    </div>
                                </div>
                                <div>
                                    <div class="writer" v-if="!isAnonymous" @click="$router.push({ name: 'otherProfile', params: { profileId: i.author.id } })">
                                        {{ i.author.username }}
                                    </div>
                                    <div class="date">
                                        <span>{{ parsingTime(i.created) }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="normal board-list" v-if="filterSelect === '전체' || filterSelect === '일반'">
                        <h3>일반</h3>

                        <ul>
                            <li v-for="i, n in boardData" :key="n" class="board-list-item">
                                <div>
                                    <div class="heart">
                                        {{ i.likes }}
                                    </div>
                                    <div class="title">
                                        <p @click="$router.push({ name: `${ isAnonymous ? 'anonymous' : 'public' }CommunityPostDetail`, params: { postId: i.id }, })">{{ i.title }}</p>
                                        <!-- todo 제목 짤림 -->
                                        <img src="../assets/community/eye_icon.svg" alt="" v-if="n % 3 == 0"/>
                                    </div>
                                </div>
                                <div>
                                    <div class="writer" v-if="!isAnonymous" @click="$router.push({ name: 'otherProfile', params: { profileId: i.author.id } })">
                                        {{ i.author.username }}
                                    </div>
                                    <div class="date">
                                        <span>{{ parsingTime(i.created) }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Pagination v-bind:page-count="pageCount" />
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import { DateTime } from "luxon";
import { getPublicHotBoardList, getPublicBoardList, getPublicBoardPageCount, getAnonymousBoardPageCount, getAnonymousBoardList, getAnonymousHotBoardList } from "../api.js";

export default {
    name: "CommunitPage",
    data() {
        return {
            pageCount: 0,
            hotData:[],
            boardData:[],
        };
    },
    components: {
        Pagination,
    },
    computed: {
        getAuthToken() {
            return this.$store.getters.getAuthToken;
        },
        isAnonymous:function() {
            return this.$route.name === "anonymousCommunity";
        },
        pageId: function () {
            return parseInt(this.$route.query.page) || 1;
        },
        searchQuery: function () {
            return this.$route.query.search || "";
        },
        filterSelect: function () {
            return this.$route.query.filter || "전체";
        },
    },
    watch: {
        getAuthToken() {
            this.loadData()
        },
        pageId: function () {
            this.loadData()
        },
        $route:function(){
            this.loadData()
        }
    },
    methods: {
        parsingTime(time) {
            const date = DateTime.fromISO(time, "yyyy-MM-dd HH:mm:ss");
            if (date.hasSame(DateTime.local(), "day")) {
                return date.toFormat("HH:mm");
            } else if (date.hasSame(DateTime.local(), "year")) {
                return date.toFormat("MM-dd");
            } else {
                return date.toFormat("yyyy-MM-dd");
            }
        },
        loadData(){
            if(this.isAnonymous){
                if(this.pageId === 1) getAnonymousHotBoardList().then(res => this.hotData = res.data);
                getAnonymousBoardList(this.pageId - 1).then(res => this.boardData = res.data);
                getAnonymousBoardPageCount().then(res => this.pageCount = res);
            }
            else{
                if(this.pageId === 1) getPublicHotBoardList().then((res)=>this.hotData = res.data);
                getPublicBoardList(this.pageId - 1)
                    .then((res) => {
                        this.boardData = res.data;
                    })
                    .catch((e) => console.log(e));
                getPublicBoardPageCount().then((res) => {
                    this.pageCount = res;
                });
            }
            
        },
        postWrite(){
            if(this.isAnonymous) this.$router.push({ name: 'anonymousCommunityWrite'} )
            else this.$router.push({ name: 'publicCommunityWrite'} )
        }
    },
    mounted() {
        if (this.$store.getters.getAuthToken !== null) {
            this.loadData()
        }
    },
};
</script>

<style scoped lang="scss">
@import "src/assets/style/community/community/communityPage/style";
</style>
