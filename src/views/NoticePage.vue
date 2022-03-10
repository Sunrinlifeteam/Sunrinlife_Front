<template>
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
                <li v-for="i, n in noticeData" :key="n">
                    <div v-if="i.type === 'school'" class="notice-icon notice-school">학교</div>
                    <div v-else-if="i.type === 'intranet'" class="notice-icon notice-intranet">인트라넷</div>

                    <p class="notice-title">{{ i.title }}</p>
                </li>
            </ul>

            <div class="pagination-wrap">
                <img src="./../assets/prev_arrow.svg" alt="" class="prev-btn"
                    @click="()=>{ if(pageId > 1) pageId--}">
                <div class="page-button-wrap">
                    <template v-for="i, n in pageList" :key="n">
                        <div
                            v-if="(pageId - 2 <= n + 1 && n + 1 <= pageId + 2) || (pageId <= 2 && n + 1 <= 5) || (pageId >= pageList.length - 2 && n + 1 >= pageList.length - 4)"
                            class="page-btn"
                            :class="{'current-page' : pageId == n + 1}"
                            @click="pageId = n + 1">
                            {{ i }}
                        </div>
                    </template>
                </div>
                <img src="./../assets/next_arrow.svg" alt="" class="next-btn"
                    @click="()=>{ if(pageId < pageList.length) pageId++ }">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Notice from "./../Model/Notice.js"
import Sidebar from "../components/Sidebar.vue"

let noticeData = [
    new Notice(
        "intranet",
        "2021 스마틴 앱 챌린지(STAC) - 본교 학생 최우수상 수상",
        "대충 내용",
        "대충 파일",
    ),
    new Notice(
        "school",
        "2021 전국기능경기대회 수상",
        "대충 내용",
        "대충 파일",
    ),
    new Notice(
        "intranet",
        "2021 서울시 직업계고 창의아이디어경진대회 수상",
        "대충 내용",
        "대충 파일",
    ),
    new Notice(
        "school",
        "2021 창의아이디어경진대회 교내대회 결과 발표",
        "대충 내용",
        "대충 파일",
    ),
    new Notice(
        "school",
        "2021 창의아이디어경진대회 교내대회 결과 발표",
        "대충 내용",
        "대충 파일",
    ),
]

let pageList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]

export default {
    naem : "Notice",
    data(){return{
        noticeData,
        pageList,

        pageId : 1,
    }},
    components : {
        Sidebar,
    }
}
</script>

<style scoped>

.page-content {
    height: 100%;
}

.notice-content {
    padding : 16px;

    display: flex;
    flex-direction: column;
    gap: 20px;
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

    font-family: NotoSansKR;
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
    font-size: 14px;
    font-weight: 500;
    line-height: 1.6;

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

    display: flex;
    justify-content: center;
    gap : 12px;
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

</style>