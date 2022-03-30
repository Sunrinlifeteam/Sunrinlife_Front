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

import { getNoticeById } from "./../api.js"

export default {
    name : "Notice detail page",
    data(){return{
        noticeData : {},
    }},
    components : {
        Sidebar,
        Header,

        NoticeIcon
    },
    mounted() {
        getNoticeById(this.$route.params.noticeId).then(res => this.noticeData = res)
    },
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
    gap : 16px;
}

.header h3 {
    font-size: 18px;
    font-weight: bold;
    color: #3d3d3d;
}

.notice-content {
    font-size: 18px;
    font-weight: bold;
    color: #3d3d3d;
}
</style>