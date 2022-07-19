<template>
    <div class="panel">
        <div class="page-content">
            <div class="notice-detail-content" :class="{'neu-morphism-card' : !$store.state.isMobileWindow}">
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
import NoticeIcon from "../components/NoticeIcon.vue"

import { getNoticeById } from "../api.js"

export default {
    name : "Notice detail page",
    data(){return{
        noticeData : {},
    }},
    components : {
        NoticeIcon
    },
    mounted() {
        getNoticeById(this.$route.params.noticeId).then(res => this.noticeData = res)
    },
}
</script>

<style scoped lang="scss">
@import "src/assets/style/notice/notice/noticeDetail/style.scss";
</style>