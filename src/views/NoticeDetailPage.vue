<template>
    <Header/>
    <Sidebar/>

    <div class="panel">
        <div class="page-content">
            <div class="notice-detail-content neu-morphism-card">
                <div class="header">
                    <NoticeIcon :type="noticeData.type"/>

                    <h3>{{ noticeData.title }}</h3>
                </div>

                <div class="notice-content">
                    {{ noticeData.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import Header from "../components/Header.vue"

import NoticeIcon from "./../components/NoticeIcon.vue"

import Notice from "./../Model/Notice.js"

export default {
    name : "Notice detail page",
    data(){return{
        noticeData : new Notice(
            "intranet",
            "2021 스마틴 앱 챌린지(STAC) - 본교 학생 최우수상 수상",
            "대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 ",
            "대충 파일",
        ),
    }},
    components : {
        Sidebar,
        Header,

        NoticeIcon
    }
}
</script>

<style scoped>
.notice-detail-content {
    padding : 16px;

    display: flex;
    flex-direction: column;
    gap : 20px;
}

.notice-icon {
    margin : 0px;
}

.header {
    display: flex;
    flex-direction: column;
    gap : 8px;
}

.header h3 {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #3d3d3d;
}

.notice-content {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    font-weight: 400;
}
</style>