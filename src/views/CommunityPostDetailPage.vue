<template>
    <div class="panel page post-create-page" v-if="postData">
        <div class="page-content">
            <div class="post-detail-content neu-morphism-card">

                <div class="header">
                    <h2>{{ postData.title }}</h2>

                    <div class="data-wrap">
                        <div class="heart-count">추천 {{ postData.likes }}</div>
                        <div class="writer" @click="authorDetail()">
                            {{ postData.author?.username || "익명" }}
                        </div>
                        <div>|</div>
                        <div class="date">
                            <span>{{ this.formatTime(postData.created) }}</span>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <img :src="null" alt="본문 이미지">
                    <p>{{ postData.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getBoardDetail } from '@/api';
import { DateTime } from "luxon";

export default {
    name: "PostDetailPage",
    data(){
        return {
            postData: null
        }
    },
    computed: {
        getAuthToken() {
            return this.$store.getters.getAuthToken;
        },
        isAnonymous() {
            return this.postData.type;
        },
    },
    methods: {
        formatTime(time) {
            const date = DateTime.fromISO(time, "yyyy-MM-dd HH:mm:ss");
            if (date.hasSame(DateTime.local(), "day")) {
                return date.toFormat("HH:mm");
            } else if (date.hasSame(DateTime.local(), "year")) {
                return date.toFormat("MM-dd");
            } else {
                return date.toFormat("yyyy-MM-dd");
            }
        },
        authorDetail(data) {
            if (!this.isAnonymous) this.$router.push({ name: 'profile', query: { id: data.author.id } });
        }
    },
    watch: {
        getAuthToken() {
            getBoardDetail(this.$route.params.postId).then(res => {
                this.postData = res.data;
            });
        },
        postData() {

        },
    },
    mounted() {
        if (this.$store.getters.getAuthToken !== null) {
            getBoardDetail(this.$route.params.postId).then(res => {
                this.postData = res.data;
            }).catch(() => {});
        }
    }
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
        cursor: pointer;
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