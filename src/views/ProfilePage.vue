<template>
    <template v-if="userInfo">
        <div class="panel panel-profile">
            <div class="user-profile">
                
                <div class="user-profile-background-item">
                    <img v-if="isEditable && editBackgroundImage" class="user-profile-background-items" :src="editBackgroundImage">
                    <img v-else-if="userInfo.backgroundImage" class="user-profile-background-items" :src="userInfo.backgroundImage">
                    <div v-else class="user-profile-background"></div>

                    <input v-if="isEditable" type="file" ref="image" @change="uploadImage" id="profile-background-choice">
                    <label v-if="isEditable" for="profile-background-choice">
                        <img src="../assets/user_profile_assets/add.svg">
                    </label>
                </div>
                

                <!-- 프로필 이미지 -->
                <div class="user-img-items">
                        <img v-if="isEditable && editProfileImage" class="user-img-item" :src="editProfileImage" />
                        <img v-else-if="userInfo.image" class="user-img-item" :src="userInfo.image" />
                        <img v-else class="user-img-item" src="../assets/user_profile_assets/basic_profile_img.svg" />

                        <input v-if="isEditable" type="file" ref="image" @change="uploadProfileImage" id="profile-img-choice">
                        <label v-if="isEditable" for="profile-img-choice">
                            <img src="../assets/user_profile_assets/correctionIcon_white.svg" alt="">
                        </label>
                </div>
                <!-- 정보 수정 버튼 -->
                <div v-if="isMyProfile" class="info-correcrion-button" @click="!isEditable?changeProfile():updateProfile()">
                    <img class="correction-button-img" src="../assets/user_profile_assets/correctionIcon.svg"
                        v-if="!isEditable"/>
                    <img class="correction-button-img" src="../assets/user_profile_assets/checkIcon.svg"
                        v-else/>
                </div>



                <!-- 유저 정보(동아리, 이메일, 소개 등) -->
                <div class="user-info-items">
                    <div class="user-info-wrapper">
                        <div class="user-info-top-wrapper">
                            <div class="user-title">
                                <div class="user-name">{{userInfo.username}}</div>
                                <div class="user-info-top-left">
                                    <div>{{ department_map[userInfo.department] }}</div>
                                    <div>{{ userInfo.grade }}학년 {{ userInfo.class }}반 {{ userInfo.number }}번</div>
                                </div>
                            </div>
                            <div class="user-info-group">
                                <div class="user-info-top-right">
                                    <div class="user-info-contents" v-if="userInfo.clubInfo?.name !== undefined">
                                        <div class="user-info-label">동아리</div>
                                        <div class="user-info-content">{{ userInfo.clubInfo?.name }}</div>
                                        <!-- <select v-else name="club" id="club-select" v-model="editClubData">
                                            <option v-for="(i, k) in loadedClubData" :value="i.id" :key="k">{{ i.id }}</option>
                                        </select> -->
                                    </div>
                                    <div class="user-info-contents">
                                        <div class="user-info-label">메일</div>
                                        <div class="user-info-content">{{ userInfo.email }}</div>
                                    </div>
                                    <div class="user-info-contents" v-if="userInfo?.githubLink || isEditable">
                                        <div class="user-info-label">GITHUB</div>
                                        <a :href="userInfo.githubLink" target="_blank" v-if="!isEditable" class="user-info-content">{{ userInfo.githubLink }}</a>
                                        <input class="github" v-else type="text" v-model="editGithubLink">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr v-if="userInfo.description" :class="{ hr_after: isEditable || !userInfo.githubLink || !userInfo.clubInfo, hr_before: !isEditable }" color="#a9a9a9"> 


                        <div class="user-info-bottom-wrapper">
                            <div class="user-info-description">
                                <div class="user-info-label" v-if="userInfo.description || isEditable">소개</div>
                                <div class="user-info-content" v-if="!isEditable">{{ userInfo?.description }}</div>
                                <textarea v-else class="description-input" type="text" v-model="editDescription"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <span v-if="!isEditable && isMyProfile" class="logout-btn" @click="logoutClick">로그아웃</span>
            </div>
        </div>
    </template>
</template>

<script>
import { mapState } from "vuex"
// import { getClubAll } from '../api.js'
// import store from '../store.js'
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
            editBackgroundImage : "",

            userInfo: null
            // 수정을 입력받은 데이터
        } 
    },
    methods: {
        uploadImage(payload){
            const reader = new FileReader()

            reader.onload = () => {
                const key = {
                    'profile-img-choice': 'editProfileImage',
                    'profile-background-choice': 'editBackgroundImage'
                };
                this[key[payload.target.id]] = reader.result;
            }
            
            reader.readAsDataURL(payload.target.files[0]);
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
            if (this.editBackgroundImage !== this.userInfo.backgroundImage)
                this.userInfo.backgroundImage = update["backgroundImage"] = this.editBackgroundImage;
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
            // getClubAll().then((data)=>{
            //     store.commit("setClubData", {id:"all",data})
            //     console.log(data)
            // })
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
            this.editBackgroundImage = val.backgroundImage;
            this.editSubClubInfo = val.subClubInfo?.map(x => x.id).join(',');
        },
        async loadData(){
            if (this.isMyProfile){
                this.userInfo = this.userData;
            }
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
        width: 684px;
        height: 533px;
        margin: 0 auto;

        border-radius: 8px;
        box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.16);
        position: relative;
    }
    .user-profile-background {
        width: 100%;
        height: 100%;
        background:#ffcf49;
        border-radius: 8px 8px 0px 0px;
    }

    .hr_before{
        margin-top:37px;
        margin-bottom:18px;
    }
    .hr_after{
        margin-top:25px;
        margin-bottom:18px;
    }
    .user-img-items {
        width: 116px;
        height: 116px;
        filter: drop-shadow(0px 2px 10px rgba(177, 174, 174, 0.25));
        border-radius: 50%;
        left:36px;
        top:89px;
        position:absolute;
    }
    .user-img-item {    
        object-fit: cover;
        width: 100%;
        height: 100%;
        background-color: #ebebeb;
        border-radius: 50%;
        position: relative;
    }
    .user-img {
        width: 100px;
        height: 100px;
        margin: 26px;
    }

    input, textarea{
        border:none;
        resize: none;
        border-radius: 8px;
        background-color: #f5f6f7;
        font-size:15px;
        padding: 8px 14px 8px 14px;
    }
    #profile-img-choice {
        display: none;
    }
    #profile-background-choice{
        display: none;
        width: 100px;
        height: 100%;
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
        right: 0px;

        cursor: pointer;
    }
    

    label[for="profile-background-choice"]{
        width: 32px;
        height: 32px;

        border-radius: 100%;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
        background-color: rgb(223, 223, 223);

        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;

        cursor: pointer;
    }
    label[for="profile-background-choice"] img{
        margin-top: 4px;
        margin-left: 4px;
    }
    .user-profile-background-item{
        width:100%;
        height:138px;
        position: relative;
    }
    .user-profile-background-items{
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 8px 8px 0 0;
    }

    .info-correcrion-button{
        width:32px;
        height:32px;
        position:absolute;
        background-color: #f5f6f7;
        border-radius: 100%;
        cursor: pointer;
        top:164px;
        right:18px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
    }
    .correction-button-img{
        width:24px;
        height:24px;
        margin-top:4px;
        margin-left:4px;
    }

    .user-info-items {
        /*background-color: aquamarine;*/
        height:395px;
        background: white;
        border-radius: 0px 0px 9px 9px;

    }
    .user-info-group{
        display: flex;
        gap: 36px;
        margin-top: 18px;
    }
    .user-info-wrapper {
        display:flex;
        flex-direction: column;
        margin-left:36px;
        margin-right: 36px;
    }
    .user-info-top-wrapper{
        padding-top:24px;
        box-sizing: border-box;
    }
    .user-info-bottom-wrapper{
        padding: 0 28px 0 28px;
    }
    .user-info-label {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #9e9e9e;
    }
    .description-input{
        margin-top: 8px;
        width: 100%;
        height: 85px;
    }
    .description-input input{
        padding: 0 0 8px 0;
    }
    .user-info-content {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #3d3d3d;
        margin-left: 5px;
    }
    .user-info-contents{
        display: flex;
        gap: 2px;
        flex-direction: column;
    }
    .user-title {
        margin-left: 156px;
        display:flex;
        gap:4px;
        flex-direction: column;
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
        line-height: 29px;
        /* identical to box height */


        color: #000000;
    }
    .user-info-top-left{
        display:flex;
        color: #3d3d3d;
        gap:4px;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
    }
    .user-info-top-right{
        display: flex;
        flex-wrap: wrap;
        align-content:space-between;
        padding: 0px;
        margin-left: 28px;
        gap: 16px 76px;
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
