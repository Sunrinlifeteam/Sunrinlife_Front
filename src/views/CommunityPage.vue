<template>
    <div class="panel page community-page">
        <div class="page-content">
            <div class="community-content neu-morphism-card">
                <div>
                    <div class="header">
                        <h2 v-if="isAnonymous">익명 게시판</h2>
                        <h2 v-else>일반 게시판</h2>
                        <img src="@/assets/user_profile_assets/correctionIcon.svg" alt="글쓰기" @click="$router.push({ name: `${isAnonymous ? 'anonymous' : 'public'}CommunityWrite`})"/>
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

                            <img src="@/assets/community/select_arrow.svg" alt="실행"/>
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
                                        <img src="@/assets/community/eye_icon.svg" alt="" v-if="n % 3 == 0" />
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
                                        <img src="@/assets/community/eye_icon.svg" alt="" v-if="n % 3 == 0"/>
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
import Pagination from "@/components/Pagination.vue";
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

<style scoped>
.community-content {
    padding: 14px 24px;
    height: 825px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.header,
.search-filter-wrap {
    display: flex;
    justify-content: space-between;
}

.header h2 {
    font-size: 18px;
    font-weight: bold;
    color: #3d3d3d;
}

.header img {
    width: 36px;
    height: 36px;
    padding: 6px;
    background-color: #f5f6f7;
    border-radius: 50%;

    cursor: pointer;
}

.search-filter-wrap {
    margin-top: 15px;
}

.search-wrap {
    height: 40px;
    max-width: 430px;
    flex: 1;

    padding: 8px 16px;
    border-radius: 8px;
    background-color: #f5f6f7;

    display: flex;
    gap: 8px;

    position: relative;
}

.search-wrap input {
    height: 100%;
    flex: 1;

    font-size: 16px;
    font-weight: 500;

    background-color: transparent;

    border: 0px;
    border-radius: 0px;
}

.search-wrap input::placeholder {
    color: #b9b9b9;
}

.search-wrap .search-button {
    width: 20px;
    height: 20px;

    cursor: pointer;
}

.filter-wrap {
    width: 97px;
    height: 40px;

    position: relative;
}

.select-board-type {
    width: 100%;
    padding: 10px 6px 10px 12px;

    border: 0px;
    border-radius: 8px;
    background-color: #f5f6f7;

    appearance: none;
}

.filter-wrap img {
    pointer-events: none;

    position: absolute;

    top: 50%;
    right: 6px;
    transform: translateY(-50%);
}

.select-board-type::-ms-expand {
    display: none; /*for IE10,11*/
}

.select-board-type:focus {
    border: 0px;
}

.field-name {
    border-bottom: solid 1px #cdcdcd;

    display: flex;
    align-items: center;

    justify-content: space-between;
}

.field-name div{
    display: inline;
}

.field-name .title {
    
}
.field-name .heart{
    
}
.field-name .writer{
    
}
.field-name .date{
    
}

.field-name * {
    font-size: 12px;
    font-weight: bold;
    text-align: left;

    padding: 8px 8px;
}

.board-list {
    padding: 12px 16px;

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 15px;
}

.board-list h3 {
    font-size: 16px;
}

.board-list ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.board-list-item {
    display: flex;
    justify-content: space-between;
}

.board-list-item * {
    display: flex;
    align-items: center;
}

.board-list-item div{

}

.board-list-item .heart {
    display:block;
    width:22px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    margin-right: 16px;
}

.board-list-item .heart img {
    width: 24px;

    padding: 4px;
}

.board-list-item .title {

    color: #3d3d3d;

    font-size: 14px;
    font-weight: 500;
}

.board-list-item .title p:hover {
    cursor: pointer;
}

.board-list-item .title img {
    width: 24px;

    margin-left: 10px;
}

.board-list-item .writer {
    color: #b9b9b9;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
}

.board-list-item .date {
    color: #b9b9b9;
    font-size: 12px;
    font-weight: 500;

    margin-left: 17px;
}

.hot-sunrin {
    margin-top: 16px;

    background-color: hsla(0, 100%, 64%, 0.1);
}

.hot-sunrin h3 {
    color: #ff4949;
}

.hot-sunrin li .heart {
    color: #ff4949;
}

.normal li .heart {
    color: #4992ff;
}

.pagination-wrap {
    height: 32px;

    /* margin-top : 32px; */
    display: flex;
    justify-content: center;
}

.pagination-wrap img {
    width: 32px;

    padding: 8px;
}

.pagination-wrap .page-button-wrap {
    display: flex;
    gap: 4px;
}

.pagination-wrap .page-btn {
    width: 32px;

    color: #c9c9c9;
    font-size: 14px;
    font-weight: 500;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;
}

.pagination-wrap .page-btn:hover {
    background-color: var(--gray1);
}

.pagination-wrap .page-btn.current-page {
    color: white;

    background-color: var(--main-color4);
}

.pagination-wrap * {
    cursor: pointer;
}

@media(max-height:800px){
.community-content{
    height:90vh;
}
.board-list ul{
    gap: 1vh;
}
}
</style>
