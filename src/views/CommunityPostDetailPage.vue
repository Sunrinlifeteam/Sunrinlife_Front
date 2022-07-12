<template>
    <div class="panel page post-create-page" v-if="postData">
        <div class="page-content">
            <div class="post-detail-content neu-morphism-card">

                <div class="header">
                    <h2>{{ postData.title }}</h2>

                    <div class="data-wrap">
                        <div class="heart-count">추천 {{ postData.likes }}</div>
                        <div class="writer" v-if="!isAnonymous"
                             @click="$router.push({ name: 'otherProfile', params: { profileId: postData.author.id } })">
                            {{ postData.author.username }}
                        </div>
                        <div v-if="!isAnonymous">|</div>
                        <div class="date">
                            <span>{{ this.formatTime(postData.created) }}</span>
                        </div>
                    </div>
                </div>

                <div class="board-content">
                    <img class="content-image" v-for="item in postData.attachments" :key="item.id" :src="imageUrl(item)"
                         alt="본문 이미지">
                    <p>{{ postData.content }}</p>
                </div>

                <div class="button-wrap">
                    <button class="heart" :class="{'enable' : liked}" @click="toggleLike">추천 {{ postData.likes }}
                    </button>
                </div>

<!--                <div class="comment-wrap">-->
<!--                    <h3>댓글</h3>-->
<!--                    <div class="comment-body">-->
<!--                        <div class="comment-right">-->
<!--                            <textarea v-model="commentInput" placeholder="댓글" cols="30" rows="5"></textarea>-->

<!--                            <ul class="comment-list">-->
<!--                                <li class="comment-item" v-for="i in 10" :key="i" :class="{'my-comment' : i % 3 == 0}">-->
<!--                                    <div class="head"-->
<!--                                         @click="$router.push({ name: 'otherProfile', params: { profileId: 'd5d10e64-e243-433c-a6f9-7da597deec49' } })">-->
<!--                                        <img-->
<!--                                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGgcAigAYkZCTUQwYTAwMGE2ZjAxMDAwMDNmMDIwMDAwMmIwMzAwMDA2YTAzMDAwMGYwMDMwMDAwYzkwNTAwMDBmZjA2MDAwMDc2MDcwMDAwYzQwNzAwMDA0NjA4MDAwMDA5MGEwMDAwAP/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/CABEIAJYAlgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFBgIB/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/aAAwDAQACEAMQAAAB8j6ngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALEK6X1ltAsWbM5Zu0ZLShlTJaolmtrqFgADQz73OeDm0LPh94etyuhiOS1sehaLujzmnEU/NrJOi93qXp0DbUABJGhZ9VPuS+F32LLjnk9C/9o5fR3UoLFVDRoTwerQO0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/EACYQAAICAQIFBAMAAAAAAAAAAAMEAgUBABQREhMVICQlMHAGNDX/2gAIAQEAAQUC+iFx9YwTImYYIkucxEgsTV5JsMLr6GMDOBxVIYhFFcL2Cx8lMgLRoRjjzr/3QhkVs68wsWUfc1pZs0/SQmhlYrdYTM7WzXV2tUELbV8OK5ql3efAjng5NSMTDDDixEZHnjz5KjKs266ce60s/dm07KwdbpGliWsjylCXSQ8xz6ZJCRmTAEc5d9O63IITTHW8yBKxM1F/X/JJS7jB9KQDOUrOW8wn8WM8MlgkVmZom1tq7WFq7QcKq5NFVnW0rtbSu0WeJfRX/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAEREiBQAv/aAAgBAwEBPwHgVZVlSrK5RGfWbslEkkj5f//EACIRAAEEAQQCAwAAAAAAAAAAAAEAAgMRBBIUIUEgMjNAUP/aAAgBAgEBPwH77jpFlb6JNy4yt6xHNj6Qzmdpjw8ah4TfG5BVYR7CJ5V2VhNIbZ78CLFFHCZXCEEpB4W3lPS20ntSMEpFUsdpbGA78v8A/8QANBAAAgEDAgIFCQkAAAAAAAAAAQIDABESBCETMSIwM0GTBRQjMjRwcXLRJFFSU2Fjc5HB/9oACAEBAAY/AvcQkd7ZGlhSabNjiLpTQyyzZrsbJTQtJqM1OOyCpcpY0RDbJzao0SOLUkjpMJDzqFleOEsOlHlciliV5gzbC6ipbyrNMuwQqbXqRNRHHpxbouoJ3pMppXyGQKJtUbxklJFzFxv1EPxrCLZ2ew3po5T6QHfvrUN+5etT50wRVIOSrR3l/oUiiSQNzAtzrTX/ABVPqrSq5fYNyJoxylh0DiE5k1BFEDgIh63PmaXSyQx+jhNn79uoh+an+0wXDHvP0qx1MPx3+lPJxowjPe+9eUAx6KLsKkOt4eGO2W29afH8ytL89SAq+CuQrPsoFBtIxlx3OOzA1AdVlxuF0shY8zWlESovEgGTBdz1CuOam9O5GoBY3IBFWHnIv8KkhW9le29aqXVE8FjwioF73FHHWagD+GhMZp5nX1Rw7WrS/P8A5Q6R7Je+tPnPKkkcYQ2SlbVcSWQLjliwqF4exZPRi1rDqgfuo6h4ZS5OVs9r1Kupj4kchyIvaxr2WTxTXsj+KaLaSArLa2bte1I2qhcyKuN1e167CbxK7CbxKRY1wjRcVX9PcV//xAAoEAEAAgIBAwMCBwAAAAAAAAABABEhMVFBYXEwkeEQcCCBobHB0fD/2gAIAQEAAT8h+xHCgXxOCNo3LdP25cy3hNC5UAO6i3URsW0gtrE65XFF9LjqLwYuV/ZTeSnMzQJSsuIDybKLTrnpAt9w1Hn0P9vZgWpJcKb5l96k7/dHxDCH6QawZ/q98ygio5gOJNg0zNXFbD4sUHKELDmu24LYsQAOme1w7lc7yZ94aphDXViGvx3TsPfEDQshTWWHdQW2bAorhsq+KgcEPbyRceV0yP4iAxKBnpmWCOP6Mfn3K10+IqxBZ7tXHFTUrPCOzxLfVJB5n0GyQA/KPHmwgreITRkGGWL1Wu1StTlpQMTpsbPvcv5VdWnF7gWvPyQ1Y8K7w5ujNyGcwxCVlgPDBFFWjF4qvSqzaGW231n8OIGGCFINI/ToLt7MnGRCzLupVijXRqz6veFQleuh3+xX/9oADAMBAAIAAwAAABAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIM0Q0EMEIIJQjvefhkIIJOTUlFuoIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIL/xAAcEQADAAIDAQAAAAAAAAAAAAAAAREQISAxQFD/2gAIAQMBAT8Q96VxNBeJuNNOPh2WDiGys3Nj7nFAykjqkj135f8A/8QAJBEBAAICAQMDBQAAAAAAAAAAAQARITFRIEGRQKGxUHHB0fD/2gAIAQIBAT8Q9eKaiCd3wy3zVckHciHP9mCHJeKjTFHir+IX0vR7R+IipfF2B9w/M1BcQDesEoKOI/bGh0E2hgVZ8zVzFds5NeImpfk/czn2axcLN0a1B+yfS//EACQQAQEAAgICAgICAwAAAAAAAAERACExQVFxYcEwgSBwkdHw/9oACAEBAAE/EP6IQDwnYirP1nF+/Tem28UyX94NQOm8bMeErw3hpvG83PDWwo4dzILy6dJiSRLMFMIoZQBG1JzMtjo6iUu71hpKkkNwaZHvrDhm2KAUXUrkRKeuhRgazeKJPSKmgauvwwL4ltWPcce8laumFg2tuk3ku0AmqUXHSCROhMPKBrnZidp0pa+qp6uH+4I8yB067N5div0fswymzY3mSoBfHnNKIMKXibaHHHvD4F8PchN1UM1s3jgtqwq1xUL4/mLooyHt9sECNsUWvmcacFujoHL87erlvMJ0nNa64xkt3QAdmj57wXdp9VRTe0/ebU0HhtEvxMNmoay5cvATBGqQNhXNYBkLNixU1SWacXIRiihaB4dZtkwHOkEqM3+AqQFPCqzHgeVOIosq4N4SjBWePnCy/XFBJUPrKzgqhXppJpMViHhY6oF/wYdWFAVw8mcVA8ZITFa8Fc3BS0G02055TdbeHN2u8uNF4slALt3845kmoUIsvj8TjhCj5G/WQM9aajILsGs43yg1D2Q16yvbu4DmMawH3j9ZIgJHgU1cUoeuK/YK7z/h/wCsCRBTu8PacDfmLlbt/or/2Q=="-->
<!--                                            alt="프로필 사진">-->
<!--                                        <div>-->
<!--                                            <span class="name">박희찬</span>-->
<!--                                            <span class="date">13초전</span>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="content">-->
<!--                                        Comment-->
<!--                                    </div>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                        <div class="comment-left">-->
<!--                            <button class="submit" @click="submitComment">입력</button>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

            </div>
        </div>
    </div>
</template>

<script>
import { getPublicBoardDetail, getAnonymousBoardDetail } from "../api";
import { DateTime } from "luxon";
import { likePublicBoard, likeAnonymousBoard, isLikedPublicBoard, isLikedAnonymousBoard } from "../api";

export default {
    name: "PostDetailPage",
    data() {
        return {
            postData: null,
            liked: false,
            commentInput: ""
        };
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
            if (!this.isAnonymous) this.$router.push({ name: "profile", query: { id: data.author.id } });
        },
        loadData() {
            if (this.isAnonymous) {
                getAnonymousBoardDetail(this.$route.params.postId).then(res => this.postData = res.data);
                isLikedAnonymousBoard(this.$route.params.postId).then(res => this.liked = res.data);
            } else {
                getPublicBoardDetail(this.$route.params.postId).then(res => {
                    this.postData = res.data;
                }).catch(() => {
                });
                isLikedPublicBoard(this.$route.params.postId).then(res => this.liked = res.data);
            }
        },
        imageUrl(file) {
            if (!file) return null;
            const baseUrl = import.meta.env.VITE_API_URL;
            return `${baseUrl}/upload/view/${file.id}`;
        },
        toggleLike() {
            if (this.isAnonymous) likeAnonymousBoard(this.$route.params.postId).then(res => {
                this.postData.likes = res.data.likes;
                this.liked = res.data.liked;
            });
            else likePublicBoard(this.$route.params.postId).then(res => {
                this.postData.likes = res.data.likes;
                this.liked = res.data.liked;
            });
        },
        submitComment() {
            alert("아직 구현되지 않은 기능입니다.");
        }
    },
    watch: {
        getAuthToken() {
            this.loadData();
        }

    },
    mounted() {
        if (this.$store.getters.getAuthToken !== null) {
            this.loadData();
        }
    }
};
</script>

<style scoped lang="scss">
@import "src/assets/style/community/community/communityPostDetailPage/style";
</style>