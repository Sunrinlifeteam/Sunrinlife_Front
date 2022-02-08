<template>
<div class="notice main-page-item">
    <div class="main-page-item-title"><h3>공지</h3></div>
    <div class="main-page-item-content">
        <div class="icon-wrap">
            <transition name="notice-icon">
                <div v-if="noticeType == 'school'" class="notice-icon notice-school">학교</div>
                <div v-else-if="noticeType == 'intranet'" class="notice-icon notice-intranet">인트라넷</div>
            </transition>
        </div>
        <p>{{ notice }}</p>
    </div>
</div>
</template>

<script>

import Notice from "./../../Model/Notice.js"

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

let notice = "" //화면에 보여지는 공지
let noticeType = ""
let currentNoticeIndex = 0; //현재 보여지고 있는 공지의 순서
let noticeStrCount = 1 //현배 보여지는 공지의 글자수

export default {
    name : "Notice",
    data(){
        return {
            notice,
            noticeType,
        }
    },
    methods :{

    },
    mounted(){
        setInterval(()=>{
            this.noticeType = noticeData[currentNoticeIndex].type
            this.notice = noticeData[currentNoticeIndex].title.slice(0, noticeStrCount++)

            if(noticeStrCount == noticeData[currentNoticeIndex].title.length + 50){
                this.notice = ""
                noticeStrCount = 1;
                currentNoticeIndex++
                currentNoticeIndex %= noticeData.length
            }

        }, 100)
    },
    watch:{
        noticeType(){
            console.log("변경됨");
        }
    }
}
</script>

<style>
.notice{
    
}

.notice .main-page-item-content{
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
}

.notice .icon-wrap {
    padding-right : 4px;
}

.notice .notice-icon {
    font-size : 14px;
    padding : 2px 4px;
    padding-bottom : 0px;

    border-radius: 24px;
    color : var(--gray1);
}

.notice-icon.notice-school {
    background-color: var(--flat-yellow);
}

.notice-icon.notice-intranet {
    background-color: var(--flat-green);
}

.notice p{
    align-items: center;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
}

@media (min-width : 750px) {
    /* body {
        background-color: #f00;
    } */
    .notice .notice-icon {
        padding : 4px 8px;
        padding-bottom : 0px;
    }
}
</style>