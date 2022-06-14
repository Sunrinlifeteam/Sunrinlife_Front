<template>
    <div class="panel page post-create-page" v-if="postData">
        <div class="page-content">
            <div class="post-detail-content neu-morphism-card">

                <div class="header">
                    <h2>{{ postData.title }}</h2>

                    <div class="data-wrap">
                        <div class="heart-count">추천 {{ postData.likes }}</div>
                        <div class="writer" v-if="!isAnonymous" @click="$router.push({ name: 'otherProfile', params: { profileId: postData.author.id } })">{{ postData.author.username }}</div>
                        <div v-if="!isAnonymous">|</div>
                        <div class="date">
                            <span>{{ this.formatTime(postData.created) }}</span>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <img class="content-image"  v-for="item in postData.attachments" :key="item.id" :src="imageUrl(item)" alt="본문 이미지">
                    <p>{{ postData.content }}</p>
                </div>

                <div class="button-wrap">
                    <button class="heart" :class="{'enable' : liked}" @click="toggleLike">추천 {{ postData.likes }}</button>
                </div>

                <div class="comment-wrap">
                    <h3>댓글</h3>
                    <div class="comment-body">
                        <div class="comment-right">
                            <textarea placeholder="댓글" cols="30" rows="5"></textarea>
                        </div>
                        <div class="comment-left">
                            <button class="submit">입력</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { getPublicBoardDetail,getAnonymousBoardDetail } from '@/api';
import { DateTime } from "luxon";
import { likePublicBoard, likeAnonymousBoard, isLikedPublicBoard, isLikedAnonymousBoard } from '../api';

export default {
    name: "PostDetailPage",
    data(){
        return {
            postData: null,
            liked: false,
        }
    },
    computed: {
        getAuthToken() {
            return this.$store.getters.getAuthToken;
        },
        isAnonymous() {
            return this.$route.name === "anonymousCommunityPostDetail";
        }
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
        },
        loadData(){
            if(this.isAnonymous) {
                getAnonymousBoardDetail(this.$route.params.postId).then(res => this.postData = res.data);
                isLikedAnonymousBoard(this.$route.params.postId).then(res => this.liked = res.data);
            }
            else {
                getPublicBoardDetail(this.$route.params.postId).then(res => {
                    this.postData = res.data;
                }).catch(() => {});
                isLikedPublicBoard(this.$route.params.postId).then(res => this.liked = res.data);
            }
        },
        imageUrl(file) {
            if (!file) return null;
            const baseUrl = process.env.VUE_APP_API_URL;
            return `${baseUrl}/upload/view/${file.id}`;
        },
        toggleLike(){
            if(this.isAnonymous) likeAnonymousBoard(this.$route.params.postId).then(res => {
                this.postData.likes = res.data.likes;
                this.liked = res.data.liked;
            });
            else likePublicBoard(this.$route.params.postId).then(res => {
                this.postData.likes = res.data.likes;
                this.liked = res.data.liked;
            });
        }
    },
    watch: {
        getAuthToken() {
            this.loadData();
        },
        
    },
    mounted() {
        if (this.$store.getters.getAuthToken !== null) {
            this.loadData();
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

        min-height: 400px;

        margin-top : 40px;
    }

    .content img {
        width : 100%;
        max-width: 200px;
        max-height: 200px;
        object-fit: contain;
    }

    .content p {
        width: 100%;

        color: #3d3d3d;
        font-size: 14px;
        font-weight: 500;

        margin-top: 24px;

        word-break: break-all;
    }

    .button-wrap {
        margin-top: 43px;
    }

    button.heart {
        padding: 5px 15px;

        color: #ff4949;
        font-size: 14px;
        font-weight: 500;

        border: 1px solid #ff4949;
        border-radius: 4px;
        background-color: #fff;
    }

    button.heart.enable {
        color: #fff;
        background-color: #ff4949;
    }

    .comment-wrap {
        margin-top: 17px;
    }

    .comment-body {
        margin-top: 14px;
        display: grid;
        grid-template-columns: 1fr auto;
        gap : 16px;
    }

    .comment-right {

    }

    .comment-right * {
        width: 100%;
    }

    .comment-right textarea {
        padding: 10px 14px;

        border: 0px;
        border-radius: 8px;
        background-color: #f5f6f7;

        resize: none;
    }

    .comment-right textarea::placeholder {
        font-size: 14px;
        font-weight: 500;
        color: #b9b9b9;
    }

    .comment-left .submit {
        color: #fff;
        font-size: 14px;
        font-weight: 500;

        padding: 5px 34px;
        border: 1px solid #4893ff;
        border-radius: 4px;
        background-color: #4893ff;
    }

</style>