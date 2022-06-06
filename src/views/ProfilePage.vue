<template>
    <template v-if="userInfo">
        <div class="panel">
            <div class="user-profile">

                <div class="user-profile-background"></div>
                                <!-- 프로필 이미지 -->
                <div class="user-img-items">
                        <img v-if="isEditable && editProfileImage" class="user-img-item" :src="editProfileImage" />
                        <img v-else-if="userInfo.image" class="user-img-item" :src="userInfo.image" />
                        <img v-else class="user-img-item" src="../assets/user_profile_assets/basic_profile_img.svg" />

                        <input v-if="isEditable" type="file" ref="image" @change="uploadProfileImage" id="profile-img-choice">
                        <label v-if="isEditable" for="profile-img-choice">
                            <img src="@/assets/user_profile_assets/correctionIcon_white.svg" alt="">
                        </label>
                </div>
                <!-- 정보 수정 버튼 -->
                <!-- <div v-if="isMyProfile" class="info-correcrion-button">
                    <img class="correction-button-img" src="@/assets/user_profile_assets/correctionIcon.svg"
                        v-if="!isEditable"
                        @click="isEditable = true"/>
                    <img class="correction-button-img" src="@/assets/user_profile_assets/checkIcon.svg"
                        v-else
                        @click="updateProfile"/>
                </div> -->



                <!-- 유저 정보(동아리, 이메일, 소개 등) -->
                <div class="user-info-items">
                    <div class="user-info-wrapper">
                        <div class="vertical">
                            <div class="user-title">
                                <div class="user-name">{{userInfo.username}}</div>
                                <div class="user-email">{{userInfo.email}}</div>
                            </div>
                            <div class="user-status-message">
                                {{ userInfo.description?userInfo.description:"" }}
                            </div>
                        </div>

                        <div class="vertical">
                            <div class="user-info-group">
                                <div class="user-info-label">학과</div>
                                <div class="user-info-content">{{ department_map[userInfo.department] }}</div>
                            </div>
                            <div class="user-info-group">
                                <div class="user-info-label">학년/반/번호</div>
                                <div class="user-info-content">{{ userInfo.grade }}학년 {{ userInfo.class }}반 {{ userInfo.number }}번</div>
                            </div>
                            <div class="user-info-group">
                                <div class="user-info-label">전공/일반 동아리</div>
                                <div class="user-info-content">{{ userInfo.clubInfo.name }}</div>
                            </div>
                        </div>

                        <div class="vertical">
                            <div class="user-info-group">
                                <div class="user-info-label">GITHUB</div>
                                <div class="user-info-content">{{ userInfo.githubLink }}</div>
                            </div>
                                 <div class="user-info-group">
                                <div class="user-info-label">INSTAGRAM</div>
                                <div class="user-info-content"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <span v-if="isMyProfile" class="logout-btn" @click="logoutClick">로그아웃</span>
            </div>
        </div>
    </template>
</template>

<script>
import { mapState } from "vuex"
import { editProfileData, getUserData, getUserDataById, logout } from "../api.js"
import store from "../store.js"
export default {
    data() {
        return {
            isEditable : false, //현재 수정 모드인지 아닌지를 판단

            editClubInfo : "",
            editSubClubInfo : "",
            editGithubLink : "",
            editDescription : "",
            editProfileImage : "",

            userInfo: null
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
            if (this.editGithubLink != this.userInfo.githubLink)
                this.userInfo.githubLink = update["githubLink"] = this.editGithubLink;
            if (this.editProfileImage != this.userInfo.image)
                this.userInfo.image = update["image"] = this.editProfileImage;
            if (this.editDescription != this.userInfo.description)
                this.userInfo.description = update["description"] = this.editDescription;
            
            if (this.editClubInfo){
                if (!this.userInfo.clubInfo || this.editClubInfo != this.userInfo.clubInfo.id){
                    if (!this.userInfo.clubInfo) this.userInfo.clubInfo = {};
                    update["clubInfo"] = this.editClubInfo || 0;
                    this.userInfo.clubInfo.name = "로딩중...";
                }
            }
            if (this.editSubClubInfo){
                if (!this.userInfo.subClubInfo) this.userInfo.subClubInfo = [];
                update["subClubInfo"] = this.editSubClubInfo.split(',')
                    .map(x => parseInt(x))
                    .filter(x => x)
                this.userInfo.subClubInfo = [{name: "로딩중..."}]
            }
            this.isEditable = false

            if (Object.keys(update).length > 0){
                console.log(update)
                await editProfileData(update)
                getUserData().then((data) => {
                    store.commit("setuserInfo", data)
                })
            }
        },
        logoutClick(){
            logout().then(res => {
                if(res == "success") this.$router.push("/login")
            })
        },
        setEditData(val){
            if (!val) return;
            this.editClubInfo = val.clubInfo?.id;
            this.editGithubLink = val.githubLink;
            this.editDescription = val.description;
            this.editProfileImage = val.image;
            this.editSubClubInfo = val.subClubInfo?.map(x => x.id).join(',');
        },
        async loadData(){
            if (this.isMyProfile)
                this.userInfo = this.userData;
            else
                this.userInfo = await getUserDataById(this.userId);
        }
    },
    computed:{
        ...mapState(["userData", "department_map"]),
        githubID: function() {
            return this.userInfo?.githubLink.split('/').filter(x=>x).pop();
        },
        userId() {
            return this.$route.query.id;
        },
        isMyProfile() {
            return this.userId === undefined;
        }
    },
    watch: {
        userData: function(){
            if (this.isMyProfile)
                this.userInfo = this.userData;
        },
        userInfo: function(val) {
            this.setEditData(val);
        },
        '$route'() {
            this.loadData();
        },
        '$store.getters.getAuthToken'() {
            this.loadData();
        }
    },
    mounted() {
        if (this.$store.getters.getAuthToken !== null) this.loadData();
    }
}
</script>

<style>
    body {
        /*padding: 205px 231px;*/
    }
    .user-profile{
        width: 556px;
        height: 541px;
        margin: 0 auto;
        margin-top:205px;
        border-radius: 8px;
        box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.16);
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .user-profile-background {
        width:100%;
        height:161px;
        background:rgb(75, 75, 75);
        border-radius: 9px 9px 0px 0px;

    }
    .user-img-items {
        width: 112px;
        height: 112px;
        /*background-color: blanchedalmond;*/
        left:28px;
        top:135px;
        position:absolute;
    }
    .user-img-item {
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background-color: #f5f6f7;
border: 5px solid #50E98D;
        position: relative;
        filter: drop-shadow(0px 2px 10px rgba(177, 174, 174, 0.25));
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
        height:380px;
        background: white;
        border-radius: 0px 0px 9px 9px;

    }
    .user-info-wrapper {
        display:flex;
        flex-direction: column;
        gap:21px;
        margin-left:167px;
        margin-top: 21px;
    }
    .vertical {
        display:flex;
        flex-direction:column;
        gap:13px;
    }
    .user-info-label {
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        color: #727272;
    }
    .user-info-content {
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        color: #242424;
    }
    .user-info-group {
        display:flex;
        flex-direction: column;
        gap:3px;
    }
    .user-title {
        display:flex;
        gap:7px;
        align-items:flex-end;
    }
    .user-status-message {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #979797;
    }
    .user-name {
        font-weight: 600;
font-size: 20px;
line-height: 24px;
/* identical to box height */


color: #000000;
    }
    .user-email {
        font-weight: 600;
font-size: 15px;
line-height: 18px;
/* identical to box height */


color: #4D4D4D;
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
