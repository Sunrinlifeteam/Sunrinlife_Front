<template>
    <template v-if="userInfo">
        <div class="panel panel-profile">
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
                <div v-if="isMyProfile" class="info-correcrion-button" @click="!isEditable?changeProfile():updateProfile()">
                    <img class="correction-button-img" src="@/assets/user_profile_assets/correctionIcon.svg"
                        v-if="!isEditable"/>
                    <img class="correction-button-img" src="@/assets/user_profile_assets/checkIcon.svg"
                        v-else/>
                </div>



                <!-- 유저 정보(동아리, 이메일, 소개 등) -->
                <div class="user-info-items">
                    <div class="user-info-wrapper">
                            <!-- <div v-if="!isEditable" class="user-status-message">
                                {{ userInfo?.description }}
                            </div>
                            <input type="text" v-model="editDescription" v-else> -->
<!-- 
                        <div class="vertical">
                            <div class="user-info-group">
                                <div class="user-info-content">{{ department_map[userInfo.department] }}</div>
                            </div>
                            <div class="user-info-group">
                                <div class="user-info-content">{{ userInfo.grade }}학년 {{ userInfo.class }}반 {{ userInfo.number }}번</div>
                            </div>
                            <div class="user-info-group">
                                <div class="user-info-label">전공/일반 동아리</div>
                                <div class="user-info-content">{{ userInfo.clubInfo?.name }}</div>
                            </div>
                        </div> -->

                        <div class="user-info-top-wrapper">
                            <div class="user-title">
                                <div class="user-name">{{userInfo.username}}</div>
                            </div>
                            <div class="user-info-group">
                                <div class="user-info-top-left">
                                    <div class="user-info-label" style="color:#a9a9a9;">{{ department_map[userInfo.department] }}</div>
                                    <div class="user-info-content" style="color:#a9a9a9;">{{userInfo.grade+('0'+userInfo.class).slice(-2)+('0'+userInfo.number).slice(-2)}}</div>
                                </div>
                                <div class="user-info-top-right">
                                    <div class="user-info-contents">
                                        <img src="@/assets/user_profile_assets/clubIcon.svg" alt="clubIcon"
                                        v-if="userInfo.clubInfo.name || isEditable">
                                        <div>{{ userInfo.clubInfo?.name }}</div>
                                        <!-- <select v-else name="club" id="club-select" v-model="editClubData">
                                            <option v-for="(i, k) in loadedClubData" :value="i.id" :key="k">{{ i.id }}</option>
                                        </select> -->
                                    </div>
                                    <div class="user-info-contents">
                                        <img src="@/assets/user_profile_assets/emailIcon.svg" alt="emailIcon">
                                        <div>{{ userInfo.email }}</div>
                                    </div>
                                    <div class="user-info-contents">
                                        <img src="@/assets/user_profile_assets/githubIcon.svg" alt="githubIcon"
                                        v-if="userInfo.githubLink !== '' || isEditable">
                                        <div v-if="!isEditable">{{ userInfo.githubLink }}</div>
                                        <input class="github" v-else type="text" v-model="editGithubLink">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr color="#a9a9a9">

                        <div class="user-info-bottom-wrapper">
                            <div class="user-info-description">
                                <div class="user-description-label" v-if="userInfo.description !== '' || isEditable">소개</div>
                                <div class="user-description" v-if="!isEditable">{{ userInfo?.description }}</div>
                                <input v-else class="description-input" type="text" v-model="editDescription">
                            </div>
                        </div>
<!-- 
                        <div class="vertical">
                            <div class="user-info-group">
                                <div v-if="userInfo.githubLink !== '' || isEditable" class="user-info-label">GITHUB</div>
                                <div v-if="!isEditable" class="user-info-content">{{ userInfo.githubLink }}</div>
                                <input class="github" type="text" v-model="editGithubLink" v-else>
                            </div>
                        </div> -->
                    </div>
                </div>

                <span v-if="isMyProfile" class="logout-btn" @click="logoutClick">로그아웃</span>
            </div>
        </div>
    </template>
</template>

<script>
import { mapState } from "vuex"
import { getClubAll } from '@/api.js'
import store from '@/store.js'
import { editProfileData, getUserDataById, logout } from "../api.js"
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
            if (this.editGithubLink !== this.userInfo.githubLink){
                if(this.editGithubLink !== ""){
                    if(this.editGithubLink.indexOf("https://github.com/") === -1){
                        alert("정확한 깃허브 링크를 입력해주세요.");
                        return;
                    }
                }
                this.userInfo.githubLink = update["githubLink"] = this.editGithubLink;
            }
            if (this.editProfileImage !== this.userInfo.image)
                this.userInfo.image = update["image"] = this.editProfileImage;
            if (this.editDescription !== this.userInfo.description)
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
                await editProfileData(update);
            }
        },
        changeProfile(){
            this.isEditable = true
            getClubAll().then((data)=>{
                store.commit("setClubData", {id:"all",data})
                console.log(data)
            })
        },
        logoutClick(){
            logout().then(res => {
                if(res === "success") this.$router.push({ name: 'login' })
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
        getAuthToken() {
            return this.$store.getters.getAuthToken;
        },
        ...mapState(["userData", "department_map", "clubData"]),
        githubID: function() {
            return this.userInfo?.githubLink.split('/').filter(x=>x).pop();
        },
        userId() {
            return this.$route.params.profileId;
        },
        isMyProfile() {
            return this.userId === undefined;
        },
        loadedClubData(){
            return this.clubData["all"]
        }
    },
    watch: {
        getAuthToken() {
            this.loadData()
        },
        userData: function(){
            if (this.isMyProfile)
                this.userInfo = this.userData;
        },
        userInfo: function(val) {
            this.setEditData(val);
        },
        $route() {
            this.loadData();
        },
    },
    mounted() {
        this.loadData();
    }
}
</script>

<style scoped>
    body {
        /*padding: 205px 231px;*/
    }
    .panel-profile {
        display:flex;
        justify-content: center;
        align-items: center;
        height:100vh;
    }
    .user-profile{
        width: 979px;
        height: 506px;
        margin: 0 auto;

        border-radius: 8px;
        box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.16);
        position: relative;
    }
    .user-profile-background {
        width:100%;
        height:208px;
        background:#ffcf49;
        border-radius: 8px 8px 0px 0px;

    }
    .user-img-items {
        width: 152px;
        height: 152px;
        /*background-color: blanchedalmond;*/
        left:48px;
        top:132px;
        position:absolute;
    }
    .user-img-item {
        width: 152px;
        height: 152px;
        border-radius: 50%;
        background-color: #f5f6f7;
        position: relative;
        filter: drop-shadow(0px 2px 10px rgba(177, 174, 174, 0.25));
    }
    .user-img {
        width: 100px;
        height: 100px;
        margin: 26px;
    }

    input{
        border:none;
        border-radius: 8px;
        background-color: #f5f6f7;
        font-size:15px;
        padding: 8px 0 8px 14px;
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

    .info-correcrion-button{
        width:36px;
        height:36px;
        position:absolute;
        background-color: #f5f6f7;
        border-radius: 100%;
        cursor: pointer;
        top:190px;
        right:24px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
    }
    .correction-button-img{
        width:24px;
        height:24px;
        margin-top:6px;
        margin-left:6px;
    }

    .user-info-items {
        /*background-color: aquamarine;*/
        height:298px;
        background: white;
        border-radius: 0px 0px 9px 9px;

    }
    .user-info-group{
        display: flex;
        gap: 36px;
        margin-top: 16px;
    }
    .user-info-wrapper {
        display:flex;
        flex-direction: column;
        gap:16px;
        margin-left:224px;
        margin-right: 16px;
    }
    .user-info-top-wrapper{
        padding-top:19px;
        padding: 19px 16px 0 16px;
        box-sizing: border-box;
    }
    .user-info-bottom-wrapper{
        padding: 0 16px 0 16px;
    }
    .user-info-label {
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #3d3d3d;
    }
    .user-description-label{
        font-size: 14px;
        line-height: 20px;
        color: var(--main-color4);
    }
    .description-input{
        margin-top: 8px;
        width: 100%;
        height: 50px;
    }
    .description-input input{
        padding: 0 0 8px 0;
    }
    .user-description{
        font-size: 16px;
        line-height: 24px;
        margin-left: 16px;
        color: #3d3d3d;
        margin-top: 8px;
    }
    .user-info-content {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #242424;
    }
    .user-info-contents{
        display: flex;
        gap: 12px;
        font-size: 16px;
        align-items: center;
    }
    .user-info-contents img{
        width: 24px;
        height: 24px;
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
        font-size: 24px;
        line-height: 24px;
        /* identical to box height */


        color: #000000;
    }
    .user-info-top-left{
        display:flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .user-info-top-right{
        display: flex;
        flex-wrap: wrap;
        align-content:space-between;
        gap: 16px 24px;
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

    .github{
        font-size: 14px;
        width: 300px;
    }
    #club-select{

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
