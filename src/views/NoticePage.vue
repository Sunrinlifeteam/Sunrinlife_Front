<template>
<Sidebar/>
<div class="panel page notice-page">
    <div class="page-content neu-morphism-card">
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
            <!-- <img src="" alt="" class="prev-btn"> -->
            <div class="page-button-wrap">
                <div class="page-btn" v-for="i, n in pageList" :key="n">{{ i }}</div>
            </div>
            <!-- <img src="" alt="" class="next-btn"> -->
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

let pageList = [ 1, 2, 3, 4, 5, 6, 7 ]

export default {
    naem : "Notice",
    data(){return{
        noticeData,
        pageList,
    }},
    components : {
        Sidebar,
    }
}
</script>

<style scoped>
.panel {
    padding : 16px;
}

.page-content {
    height: 100%;
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
    width : 25px;
    height : 25px;

    position: absolute;
    top : 50%;
    right : 18px;
    transform: translateY(-50%);
}

.notice-list {
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    gap : 24px;
}

.notice-list li {
    display: flex;
    gap : 12px;
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

.pagination-wrap .page-button-wrap {
    display: flex;
}

.pagination-wrap .page-btn {
    background-color: #f00;
    
    width : 24px;
    height : 24px;

    color: #c9c9c9;
    
    font-family: 'Noto Sans KR', sans-serif;

    font-size: 14px;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
}

</style>