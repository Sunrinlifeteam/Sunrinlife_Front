<template>
    <div class="panel page post-create-page">
        <div class="page-content">
            <div class="post-create-content neu-morphism-card">

                <div class="header">
                    <img src="@/assets/prev_arrow.svg" alt="<" @click="$router.back();">
                    <h2>{{ isAnonymous ? "익명" : "일반" }} 게시글 작성</h2>
                </div>

                <div class="title-wrap input-wrap">
                    <h3>제목</h3>
                    <input type="text" placeholder="제목" v-model="title">
                </div>

                <ul class="selected-img-list">
                    <img v-for="i in images" :key="i" :src="i" class="post-image" />

                    <label class="image-add post-image">
                        <input type="file" class="image" multiple @change="addFile">
                        <img src="@/assets/community/image_add.svg" alt="" srcset="">
                    </label>
                </ul>

                <div class="content-wrap input-wrap">
                    <h3>내용</h3>
                    <textarea placeholder="내용" v-model="content"></textarea>
                </div>

                <div class="create-post-wrap">
                    <button class="create-post" @click="createPost()">작성 완료</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { writePublicBoard, writeAnonymousBoard, uploadSingleFile } from '../api';

export default {
    name: "PostCreatePage",
    data() {
        return {
            title: "",
            content: "",
            files: [],
            images: [],
        }
    },
    methods: {
        createPost() {
            if (this.title.length == 0) {
                alert("제목을 입력해주세요.");
                return;
            }
            if (this.content.length == 0) {
                alert("내용을 입력해주세요.");
                return;
            }
            (async () => {
                await this.uploadFiles();
                await this.writeBoard();
            })();
        },
        async uploadFiles() {
            let ids = [];
            for (let i = 0; i < this.files.length; i++) {
                try {
                    let { data } = await uploadSingleFile(this.files[i], this.files[i].type);
                    ids.push(data.id);
                } catch (e) {
                    alert("업로드 실패");
                    return;
                }
            }
            return ids;
        },
        async writeBoard(attachmentIds) {
            if (this.isAnonymous) writeAnonymousBoard(this.title, this.content, attachmentIds).then(() => this.$router.push({ name: "anonymousCommunity" }))
            else writePublicBoard(this.title, this.content, attachmentIds)
                .then(() => {
                    this.$router.push({ name: "publicCommunity" });
                })
                .catch(err => {
                    alert(err.message);
                });
        },
        addFile(event) {
            for (let file of event.target.files) {
                this.files.push(file);
                this.images.push(URL.createObjectURL(file));
            }
        }
    },
    computed: {
        isAnonymous() {
            return this.$route.name === "anonymousCommunityWrite";
        }
    }
};
</script>

<style scoped>
.post-create-content {
    padding: 36px 24px;

    display: flex;
    flex-direction: column;
    gap: 14px;
}

.header {
    display: flex;

    gap: 8px;
}

.header img {
    cursor: pointer;
}

.header h2 {
    font-size: 18px;
    font-weight: bold;
    color: #3d3d3d;
}

.post-image {
    width: 90px;
    height: 90px;

    margin-right: 15px;

    border-radius: 8px;
    background-color: #f5f6f7;

    cursor: pointer;
}

.selected-img-list {
    display: flex;
    flex-wrap: wrap;
}

.selected-img-list>img {
    object-fit: cover;
}

.image-add {
    padding: 13px;
    border-radius: 8px;

    display: inline-block;

    cursor: pointer;
}

.image-add input {
    display: none;
}

.input-wrap h3 {
    font-size: 14px;
    color: #3d3d3d;
}

.input-wrap input,
.input-wrap textarea {
    width: 100%;
    margin: 8px 0 20px;
    padding: 12px 16px;

    border: 0px;
    border-radius: 8px;
    background-color: #f5f6f7;
}

.input-wrap textarea {
    height: 180px;

    resize: none;
}

.create-post-wrap {
    margin-top: 91px;

    text-align: right;
}

.create-post-wrap .create-post {
    color: #fff;
    font-size: 16px;
    font-weight: bold;

    padding: 6px 30px;

    border-radius: 8px;
    background-color: #4893ff;
}
</style>