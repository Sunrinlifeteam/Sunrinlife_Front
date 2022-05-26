<template>
    <div class="panel page post-create-page">
        <div class="page-content">
            <div class="post-detail-content neu-morphism-card">

                <div class="header">
                    <h2>{{ postData.title }}</h2>

                    <div class="data-wrap">
                        <div class="heart-count">추천 {{ postData.heartCount }}</div>
                        <div class="writer">{{ postData.writer }}</div>
                        <div>|</div>
                        <div class="date">
                            <span v-if="postData.timeStamp.getMonth() < 9">0</span>
                            <span>{{ postData.timeStamp.getMonth() + 1 }}</span>
                            <span>-</span>
                            <span v-if="postData.timeStamp.getDay() < 10">0</span>
                            <span>{{ postData.timeStamp.getDay() }}</span>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <img :src="postData.imgUrl" alt="본문 이미지">
                    <p>{{ postData.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostDetailPage",
    data(){return {
       postData : {
           "title" : "대충 " + this.$route.params.postId + "번째 게시물 제목",
           "content" : "대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 ",
           "imgUrl" : "https://github.com/ckstmznf/2022-EDCAN-Web/blob/master/public/img/main_page_bg/bg_10.jpg?raw=true",
           "heartCount" : 13,
           "writer" : "강태영",
           "timeStamp" : new Date()
       }
    }},
};
</script>

<style scoped>
    .post-detail-content {
        min-height: 806px;

        padding: 36px;
    }

    .header {
        display: grid;

        grid-template-columns: 1fr auto;
        align-items: center;
    }

    .header h2 {
        color: #3d3d3d;
        font-size: 20px;

        word-break: break-word;
    }

    .data-wrap {
        display: flex;
    }

    .data-wrap {
        font-size: 14px;
        color: #b9b9b9;
    }

    .data-wrap .heart-count {
        color: #ff4949;
        font-size: 14px;
        font-weight: 500;

        margin-right: 24px;
    }

    .data-wrap .writer {
        margin-right: 8px;
    }

    .data-wrap .date {
        margin-left: 8px;
    }

    .content {
        width: 100%;

        margin-top : 40px;
    }

    .content img {
        width : 100%;
        max-width: 623px;
    }

    .content p {
        width: 100%;

        color: #3d3d3d;
        font-size: 14px;
        font-weight: 500;

        margin-top: 24px;

        word-break: break-all;
    }
</style>