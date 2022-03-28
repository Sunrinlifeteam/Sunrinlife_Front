<template>
<div class="notice main-page-item">
    <div class="main-page-item-title"><h3>공지</h3></div>
    <div class="main-page-item-content">
        <div v-for="i, j, in noticeData" :key="j" class="title_list">
            <NoticeIcon :type="i.type"/>
            <p class="title" @click="$router.push(`/notice/${j}`)">{{i.title}}</p>
        </div>
    </div>
</div>
</template>

<script>

import Notice from "./../../Model/Notice.js"
import NoticeIcon from "./../../components/NoticeIcon.vue"

import { getNotice } from "../../api.js"

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
] //공지사항을 저장하는 리스트

export default {
    name : "Notice",
    data(){
        return {
            noticeData,
        }
    },
    methods :{

    },
    components : {
        NoticeIcon
    },
    mounted(){
        getNotice().then((res) => console.log(res))
    }
}
</script>

<style>
.notice{
    
}

.notice .main-page-item-content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* gap : 14px; */
}

.title_list{
    height : 28px;

    display: flex;
    gap : 12px;
}

.notice .icon-wrap {
    padding-right : 4px;
}

.title{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    
    text-overflow: ellipsis;
    overflow:hidden;
    
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    display: -webkit-box;

    /* margin-bottom:18px; */

    cursor: pointer;
    flex: 1;

    margin-top:1.5px;
}
</style>