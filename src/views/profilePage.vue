<template>

    <Sidebar/>
    <div class="panel">
        <div class="user-profile">

            <!-- 정보 수정 버튼 -->
            <div class="info-correcrion-button">
                <img class="correction-button-img" src="./../assets/user_profile_assets/correctionIcon.svg"/>
            </div>

            <!-- 프로필 이미지 -->
            <div class="user-img-items">
                <div class="user-img-item">
                    <img class="user-img" src='./../assets/user_profile_assets/basic_profile_img.svg'/>
                </div>
            </div>

            <!-- 유저 정보(동아리, 이메일, 소개 등) -->
            <div class="user-info-items">
                <div class="user-basic-contact-items">

                    <!-- 이름, 번호, 학과 -->
                    <div class="user-basic-items">
                        <span class="user-name-item">{{ userInfo.userName }}</span>
                        <span class="user-major-item">{{ userInfo.userMajor }}과</span>
                        <span class="user-number-item">{{ userInfo.userClass }}학년 {{ userInfo.userNumber }}반</span>
                    </div>

                    <!-- 동아리, 이메일, 깃허브 -->
                    <div class="user-contact-items">

                        <!-- 동아리, 이메일 -->
                        <div class="user-contact-item">
                            <img class="user-contact-icon" src="./../assets/user_profile_assets/clubIcon.svg"/>
                            <span class="user-contact-text">{{ userInfo.userClub }}</span>
                        </div>
                        <div class="user-contact-item">
                            <img class="user-contact-icon" src="./../assets/user_profile_assets/emailIcon.svg"/>
                            <span class="user-contact-text">{{ userInfo.userEmail }}</span>
                        </div>

                        <!-- 깃허브 계정 -->
                        <div class="user-social-contact-item">
                            <img class="user-contact-icon" src="./../assets/user_profile_assets/githubIcon.svg"/>
                            <span class="user-contact-text">{{ userInfo.userContact.userGithub }}</span>
                        </div>

                    </div>

                </div>

                <!-- 소개 -->
                <div class="user-introduce-items">
                    <span class="user-introduce-title">소개</span>
                    <span class="user-introduce-item">{{ userInfo.userIntroduce }}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Sidebar from "./../components/Sidebar.vue"
export default {
    data() {
        return {
            userInfo: {
                userImg: './../assets/user_profile_assets/user_profile_img.png',
                userName: '김병주',
                userClass: 2,
                userNumber: 6,
                userMajor: '소프트웨어',
                userClub: 'App:ple Pi',
                userEmail: 'kd531585@gmail.com',
                userIntroduce: '세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네 세상 거지같네',
                userContact: {
                    userGithub: 'github.com/sh596',
                }
            }
        }
    },
    components:{
        Sidebar
    }
}
</script>

<style>
    body {
        /*padding: 205px 231px;*/
    }
    .user-profile {
        width: 979px;
        height: 351px;
        background-color: #fff;
        /*margin: 205px 231px;*/
        position: absolute;
        top: 205px;
        left: 231px;
        border-radius: 8px;
        box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.16);
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
    }
    .user-img {
        width: 100px;
        height: 100px;
        margin: 26px;
    }

    .user-info-items {
        /*background-color: aquamarine;*/
        height: 100%;
        width: 100%;
        padding: 60px 0;
    }

    .user-basic-contact-items {
        /*background-color: chartreuse;*/
        width: 100%;
        height: 118px;
    }

    .user-basic-items {
        /*background-color: rgb(76, 76, 110);*/
        width: 195px;
        height: 100%;
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
        width: 100%;
        height: 100%;
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
        /*background-color: deeppink;*/
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
        bottom: 12px;
        display: flex;
        top: 24px;
        right: 24px;
        position: absolute;
        background-color: #f5f6f7;
        cursor: pointer;
        transition-duration: 0.1s;
    }
    .info-correcrion-button:hover {
        background-color: #e1e2e4;
    }
    .correction-button-img {
        width: 24px;
        height: 24px;
        margin: 6px;
    }
</style>