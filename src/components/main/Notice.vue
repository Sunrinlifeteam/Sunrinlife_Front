<template>
<div class="notice main-page-item">
    <h3>공지</h3>
    <p>{{ notice }}</p>
</div>
</template>

<script>

let noticeData = [
    "2021 스마틴 앱 챌린지(STAC) - 본교 학생 최우수상 수상",
    "2021 전국기능경기대회 수상",
    "2021 서울시 직업계고 창의아이디어경진대회 수상",
    "2021 창의아이디어경진대회 교내대회 결과 발표",
]

let notice = ""
let currentNoticeIndex = 0;
let noticeStrCount = 1

export default {
    name : "Notice",
    data(){
        return {
            notice
        }
    },
    methods :{

    },
    mounted(){
        setInterval(()=>{
            this.notice = noticeData[currentNoticeIndex].slice(0, noticeStrCount++)

            if(noticeStrCount == noticeData[currentNoticeIndex].length + 50){
                noticeStrCount = 1;
                currentNoticeIndex++
                currentNoticeIndex %= noticeData.length
            }

        }, 100)
    }
}
</script>

<style>
.notice p{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
}
</style>