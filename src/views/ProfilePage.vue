<template>
    <Header/>
    <Sidebar/>

    <template v-if="userData">
        <div class="panel">
            <div class="user-profile">

                <!-- 정보 수정 버튼 -->
                <div class="info-correcrion-button">
                    <img class="correction-button-img" src="./../assets/user_profile_assets/correctionIcon.svg"
                        v-if="!isEditable"
                        @click="isEditable = true"/>
                    <img class="correction-button-img" src="./../assets/user_profile_assets/checkIcon.svg"
                        v-else
                        @click="updateProfile"/>
                </div>

                <!-- 프로필 이미지 -->
                <div class="user-img-items">
                    <div class="user-img-item">
                        <img v-if="isEditable && editProfileImage" class="user-img" :src="editProfileImage" />
                        <img v-else-if="userData.image" class="user-img" :src="userData.image" />
                        <img v-else class="user-img" src="../assets/user_profile_assets/basic_profile_img.svg" />

                        <input v-if="isEditable" type="file" ref="image" @change="uploadProfileImage" id="profile-img-choice">
                        <label v-if="isEditable" for="profile-img-choice">
                            <img src="./../assets/user_profile_assets/correctionIcon_white.svg" alt="">
                        </label>
                    </div>
                </div>

                <!-- 유저 정보(동아리, 이메일, 소개 등) -->
                <div class="user-info-items">
                    <div class="user-basic-contact-items">

                        <!-- 이름, 번호, 학과 -->
                        <div class="user-basic-items">
                            <span class="user-name-item">{{ userData.username }}</span>
                            <span class="user-major-item">{{ department_map[userData.department] }}</span>
                            <span class="user-number-item">{{ userData.grade }}학년 {{ userData.class }}반 {{ userData.number }}번</span>
                        </div>

                        <!-- 동아리, 이메일, 깃허브 -->
                        <div class="user-contact-items">

                            <!-- 동아리 -->
                            <div v-if="!isEditable" class="user-contact-item user-contact-club">
                                <img class="user-contact-icon" src="./../assets/user_profile_assets/clubIcon.svg"/>
                                <span class="user-contact-text">{{ userData.clubInfo?userData.clubInfo.name:"" }}</span>
                            </div>
                            <div v-else class="user-contact-item user-contact-club edit">
                                <img class="user-contact-icon" src="./../assets/user_profile_assets/clubIcon.svg"/>
                                <input v-model="editClubInfo" class="user-contact-text user-profile-edit-inout">
                            </div>

                            <!-- 부동아리 -->
                            <div v-if="!isEditable" class="user-contact-item user-contact-club">
                                <img class="user-contact-icon" src="./../assets/user_profile_assets/clubIcon.svg"/>
                                <span class="user-contact-text">{{ userData.subClubInfo.length?userData.subClubInfo.map(x => x.name).join(','):"" }}</span>
                            </div>
                            <div v-else class="user-contact-item user-contact-club edit">
                                <img class="user-contact-icon" src="./../assets/user_profile_assets/clubIcon.svg"/>
                                <input v-model="editSubClubInfo" class="user-contact-text user-profile-edit-inout">
                            </div>

                            <!-- 이메일 -->
                            <div class="user-contact-item">
                                <img class="user-contact-icon" src="./../assets/user_profile_assets/emailIcon.svg"/>
                                <span class="user-contact-text">{{ userData.email }}</span>
                            </div>

                            <!-- 깃허브 계정 -->
                            <div v-if="!isEditable && userData.githubLink != null" class="user-social-contact-item">
                                <img class="user-contact-icon" src="./../assets/user_profile_assets/githubIcon.svg"/>
                                <span class="user-contact-text">{{ userData.githubLink?githubID:"" }}</span>
                            </div>
                            <div v-else-if="isEditable" class="user-social-contact-item edit">
                                <img class="user-contact-icon" src="./../assets/user_profile_assets/githubIcon.svg"/>
                                <input v-model="editGithubLink" v class="user-contact-text user-profile-edit-inout">
                            </div>

                        </div>

                    </div>

                    <!-- 소개 -->
                    <div v-if="!isEditable" class="user-introduce-items">
                        <span class="user-introduce-title">소개</span>
                        <span class="user-introduce-item">{{ userData.description?userData.description:"" }}</span>
                    </div>
                    <div v-else class="user-introduce-items edit">
                        <span class="user-introduce-title">소개</span>
                        <textarea v class="user-introduce-item user-profile-edit-inout" v-model="editDescription"></textarea>
                    </div>
                </div>

                <span class="logout-btn" @click="logoutClick">로그아웃</span>
            </div>
        </div>
    </template>
</template>

<script>
import Sidebar from "./../components/Sidebar.vue"
import Header from "./../components/Header.vue"

import { mapState } from "vuex"
import {editProfileData, getUserData, logout} from "../api.js"
import store from "../store.js"
export default {
    data() {
        return {
            isEditable : false, //현재 수정 모드인지 아닌지를 판단

            editClubInfo : "",
            editSubClubInfo : "",
            editGithubLink : "",
            editDescription : "",
            editProfileImage : ""
            // 수정을 입력받은 데이터
        } 
    },
    methods: {
        uploadProfileImage(){
            const reader = new FileReader()

            reader.onloadend = () => {
                this.editProfileImage = reader.result
            }
            reader.readAsDataURL(this.$refs.image.files[0]);
        },
        async updateProfile(){
            const update = {}
            if (this.editGithubLink != this.userData.githubLink)
                this.userData.githubLink = update["githubLink"] = this.editGithubLink;
            if (this.editProfileImage != this.userData.image)
                this.userData.image = update["image"] = this.editProfileImage;
            if (this.editDescription != this.userData.description)
                this.userData.description = update["description"] = this.editDescription;
            
            if (this.editClubInfo){
                if (!this.userData.clubInfo || this.editClubInfo != this.userData.clubInfo.id){
                    if (!this.userData.clubInfo) this.userData.clubInfo = {};
                    update["clubInfo"] = this.editClubInfo || 0;
                    this.userData.clubInfo.name = "로딩중...";
                }
            }
            if (this.editSubClubInfo){
                if (!this.userData.subClubInfo) this.userData.subClubInfo = [];
                update["subClubInfo"] = this.editSubClubInfo.split(',')
                    .map(x => parseInt(x))
                    .filter(x => x)
                this.userData.subClubInfo = [{name: "로딩중..."}]
            }
            this.isEditable = false

            if (Object.keys(update).length > 0){
                console.log(update)
                await editProfileData(update)
                getUserData().then((data) => {
                    store.commit("setUserData", data)
                })
            }
        },
        logoutClick(){
            logout().then(res => {
                if(res == "success") this.$router.push("/login")
            })
        }
    },
    components:{
        Sidebar,
        Header,
    },
    computed:{
        ...mapState(["userData", "department_map"]),
        githubID: function() {
            return this.userData?.githubLink.split('/').filter(x=>x).pop();
        }
    },
    watch: {
        userData: function(val) {
            this.editClubInfo = val.clubInfo?.id
            this.editGithubLink = val.githubLink
            this.editDescription = val.description
            this.editProfileImage = val.image
            this.editSubClubInfo = val.subClubInfo.map(x => x.id).join(',')
        }
    },
    mounted() {
        this.editClubInfo = this.userData?.clubInfo?.id
        this.editGithubLink = this.userData?.githubLink
        this.editDescription = this.userData?.description
        this.editProfileImage = this.userData?.image
        this.editSubClubInfo = this.userData?.subClubInfo.map(x => x.id).join(',')
    }
}
</script>

<style>
    body {
        /*padding: 205px 231px;*/
    }
    .user-profile{
        width: 90%;
        height: 350px;

        max-width : 1040px;

        background-color: #fff;
        
        margin: 0 auto;
        margin-top:205px;
        border-radius: 8px;
        box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.16);

        position: relative;
    }

    .user-img-items {
        width: 240px;
        height: 100%;
        /*background-color: blanchedalmond;*/
        float: left;
    }
    .user-img-item {
        margin: 48px;
        width: 152px;
        height: 152px;
        border-radius: 50%;
        background-color: #f5f6f7;

        position: relative;
    }
    .user-img {
        width: 100px;
        height: 100px;
        margin: 26px;
    }

    
    #profile-img-choice {
        display: none;
    }

    label[for="profile-img-choice"]{
        width: 36px;
        height: 36px;
        padding: 6px;

        border-radius: 100%;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #4992ff;

        position: absolute;
        bottom : 0px;
        right : 0px;

        cursor: pointer;
        z-index: 3;
    }

    .user-info-items {
        /*background-color: aquamarine;*/
        padding: 60px 0;
    }

    .user-basic-contact-items {
        /*background-color: chartreuse;*/
        height: 118px;
    }

    .user-basic-items {
        /*background-color: rgb(76, 76, 110);*/
        width: 195px;
        float: left;
    }
    .user-name-item {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.45;
        letter-spacing: normal;
        text-align: left;
        color: #3d3d3d;
        display: block;
        margin-bottom: 7px;
    }
    .user-major-item, .user-number-item {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #a9a9a9;
        display: block;
    }

    .user-contact-items {
        /*background-color: crimson;*/
    }
    .user-contact-item {
        display: inline;
        margin-right: 24px;
    }
    .user-contact-icon {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-right: 12px;
    }
    .user-contact-text {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #3d3d3d;
        vertical-align: middle;
    }
    .user-social-contact-item {
        display: block;
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .user-introduce-items {
        /* background-color: deeppink; */
        /* position: relative; */
        /* background-color: #f00; */
    }
    .user-introduce-title {
        height: 24px;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #4992ff;
    }
    .user-introduce-item {
        /*background-color: #1e7edd;*/
        display: block;
        padding: 8px 16px;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #3d3d3d;
    }

    .info-correcrion-button {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display:inline-block;
        position: relative;
        float:right;
        margin-top:24px;
        margin-right:24px;
        background-color: #f5f6f7;
        transition-duration: 0.1s;
    }
    .info-correcrion-button:hover {
        background-color: #e1e2e4;
        cursor: pointer;
    }
    .correction-button-img {
        width: 24px;
        height: 24px;
        margin: 6px;
    }


    .user-profile-edit-inout {
        height : 40px;
        border : 0;

        color: #3d3d3d;

        padding: 8px 14px;
        border-radius: 8px;
        background-color: #f5f6f7;
    }

    .user-contact-club .user-profile-edit-inout {
        width : 150px;
    }

    .user-social-contact-item .user-profile-edit-inout {
        width : 300px;
    }

    textarea.user-profile-edit-inout {
        width : 50%;
        height: 7em;

        margin : 0px;

        border: none;
        resize: none;
    }

    .logout-btn {
        font-size: 12px;
        font-weight: 500;
        color: #ff4949;

        position: absolute;
        bottom : 24px;
        right : 24px;

        cursor: pointer;
    }

    @media (max-width:1200px) {
        .user-social-contact-item {
            display: block;
            margin:0;
        }
        .user-contact-item{
            display:block;
            margin-bottom:10px;
        }
    }
</style>
