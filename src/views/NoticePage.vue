<template>

<Header/>
<Sidebar/>

<div class="panel page notice-page">
    <div class="page-content">
        <div class="notice-content neu-morphism-card">
            <div class="hader">
                <h6>공지</h6>
                <div class="search-wrap">
                    <input type="text" placeholder="검색">
                    <img src="/img/search.svg" alt="검색 아이콘" class="search-button">
                </div>
            </div>
            
            <ul class="notice-list">
                <li v-for="i, n in notice[`${[pageId]}`]" :key="n"
                    @click="$router.push(`/notice/${i.id}`)">
                    <div v-if="i.type === 'school'" class="notice-icon notice-school">학교</div>
                    <div v-else-if="i.type === 'intranet'" class="notice-icon notice-intranet">인트라넷</div>

                    <p class="notice-title">{{ i.title }}</p>
                </li>
            </ul>

            <div class="pagination-wrap">
                <img src="./../assets/prev_arrow.svg" alt="" class="prev-btn"
                    @click="()=>{ if(pageId > 1) pageId--}">
                <div class="page-button-wrap">
                    <template v-for="i in getNoticePageCount<5?getNoticePageCount:5" :key="i">
                        <div
                            class="page-btn"
                            :class="{'current-page' : pagination===1?pageId === i+(pageId-3):pagination===2?pageId === i+(pageId-4):pagination===3?pageId === i+(pageId-5):pageId === i}"
                            @click="pagination===1?pageId = i+(pageId-3):pagination===2?pageId = i+(pageId-4):pagination===3?pageId = i+(pageId-5):pageId = i">
                            {{ pagination===1?i+(pageId-3):pagination===2?i+(pageId-4):pagination===3?i+(pageId-5):i }}
                        </div>
                    </template>
                </div>

                <img src="./../assets/next_arrow.svg" alt="" class="next-btn"
                    @click="()=>{ if(pageId < 1) pageId++ }">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import Header from "../components/Header.vue"
import {mapState} from "vuex"



export default {
    naem : "Notice",
    data(){return{
        pageId : 1,
        pagination: 0
    }},
    components : {
        Sidebar,
        Header,
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
        }
    }
}
</script>

<style scoped>

.page-content {
    height: 100%;
}

.notice-content {
    padding : 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height:620px;
}

.hader {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hader h6 {
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: bold;
    color: #3d3d3d;
}

.hader .search-wrap {
    width: 323px;

    position: relative;
}

.hader .search-wrap input {
    width : 100%;

    border: 0px;
    border-radius: 8px;

    background-color: #e6e6e6;

    padding : 11px 16px;

    flex : 1;
}

.hader .search-wrap input::placeholder {
    color: #949494;

    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: 500;
}

.hader .search-wrap .search-button {
    width : 20px;
    height : 20px;

    position: absolute;
    top : 50%;
    right : 18px;
    transform: translateY(-50%);

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

    text-overflow: ellipsis;
    overflow:hidden;
    
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    display: -webkit-box;

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

    cursor: pointer;
}

.pagination-wrap .page-btn:hover {
    /* color : white; */

    background-color: var(--gray1);

    /* opacity: 0.5; */
}

.pagination-wrap .page-btn.current-page {
    color : white;

    background-color: var(--main-color4);
}

img:hover{
    cursor:pointer;
}
</style>