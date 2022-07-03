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

<style scoped>
.notice-detail-content {
    padding : 16px;

    display: flex;
    flex-direction: column;
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

    padding : 48px;
}


@media (max-width : 970px) {
    .header {
        flex-direction: column-reverse;
        gap : 8px;
    }

    .notice-content {
        padding : 24px 36px;
    }
}
</style>