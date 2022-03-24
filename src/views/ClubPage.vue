<template>
<Sidebar/>

<div class="panel">
    <div class="clud-page">
        <div class="page-content">

            <div class="club-list-wrap">
                <!-- 학과 선택창 -->
                <div class="major-selecter neu-morphism-card">
                    <transition name="current-major-ani">
                        <div class="current-major" @click="isSelectMajor = true" v-if="!isSelectMajor" :class="{security:!selectMajorIdx, software:selectMajorIdx===1, ceo:selectMajorIdx===2, design:selectMajorIdx===3}">
                            <span v-if="selectMajorIdx == 0">정보보호과</span>
                            <span v-else-if="selectMajorIdx == 1">소프트웨어과</span>
                            <span v-else-if="selectMajorIdx == 2">IT경영과</span>
                            <span v-else-if="selectMajorIdx == 3">콘텐츠 디자인과</span>
                        </div>
                    </transition>
                    <transition name="choice-major-ani">
                        <div class="choice-major-wrap" v-if="isSelectMajor" @click="isSelectMajor = false">
                            <div class="choice-major security"
                                @click="selectMajorIdx = 0">
                                정보
                            </div>
                            <div class="choice-major software"
                                @click="selectMajorIdx = 1">
                                솦과
                            </div>
                            <div class="choice-major ceo"
                                @click="selectMajorIdx = 2">
                                아경
                            </div>
                            <div class="choice-major design"
                                @click="selectMajorIdx = 3">
                                콘디
                            </div>
                        </div>
                    </transition>
                </div>

                <!-- 동아리 리스트 -->
                <ul class="club-list neu-morphism-card">
                    <li
                        v-for="(i, n) in clubData[selectMajorIdx]" :key="n"
                        :class="{ 'seleted' : selectClubIdx == n}"
                        @click="selectClubIdx = n">
                        <img :src="i.logo_url" :alt="`${i.name} 동아리 로고`" class="club-icon">
                        <div class="club-name">{{ i.name }}</div>
                    </li>
                </ul>
            </div>

            <div class="club-card neu-morphism-card">
                <div class="header">
                    <img src="/edcan.png" alt="" class="logo">
                    <div class="descriptions-wrap">
                        <h2 class="club-name">EDCAN</h2>
                        <p class="descriptions">
                            EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야! EDCAN은 정말 최고야!
                        </p>
                    </div>
                </div>

                <div class="sns-ranker-wrap">

                    <!-- ranker은 임원을 뜻하는 겁니다...... 영어를 못해서 죄송합니다.... -->
                    <div class="sns-wrap">
                        <!-- 페이스북 링크 -->
                        <a class="sns-link facebook-link" href="https://www.facebook.com/edcancircle" target="_blank">
                            <img src="/img/sns/facebook.svg" alt="Facebook 링크 아이콘" class="icon">
                            <div class="url">facebook.com/edcancircle</div>
                        </a>

                        <!-- 인스타 링크 -->
                        <a class="sns-link insta-link" href="https://www.instagram.com/sunrin_edcan/" target="_blank">
                            <img src="/img/sns/facebook.svg" alt="Instagram 링크 아이콘" class="icon">
                            <div class="url">@sunrin_edcan</div>
                        </a>

                        <!-- 웹사이트 링크 -->
                        <a class="sns-link web-link" href="https://edcan,kr" target="_blank">
                            <img src="/img/sns/link.svg" alt="Web 링크 아이콘" class="icon">
                            <div class="url">edcan.kr</div>
                        </a>

                        <!-- 동아리 부실 -->
                        <a class="sns-link location-link" href="#" target="_blank">
                            <img src="/img/sns/location.svg" alt="붕아리 부실" class="icon">
                            <div class="url">421실</div>
                        </a>
                    </div>

                    <!-- 임원 목록 -->
                    <div class="ranker-wrap">
                        <div class="ranker">
                            <div class="position">부장</div>
                            <div class="name">진다은</div>
                        </div>
                        <div class="ranker">
                            <div class="position">부부장</div>
                            <div class="name">박희찬</div>
                        </div>
                    </div>

                </div>

                <div class="curriculum-wrap">
                    <h3>수업 커리큘럼</h3>
                    <ul class="curriculum">
                        <li>Android Studio</li>
                        <li>Vue.js</li>
                        <li>Figma</li>
                        <li>XD</li>
                    </ul>
                </div>
            </div>
            <!-- <ClubCard
                :clubIdx="selectClubIdx"
                :marorIdx="0"
                /> -->
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from "./../components/Sidebar.vue"

import { JB, SW, it, de } from "./../components/club/TempClubData"

export default {
    name : "Club Page",
    data(){return{
        selectClubIdx : 0,
        selectMajorIdx : 0,

        isSelectMajor : false,

        clubData : [JB, SW, it, de]
    }},
    components : {
        Sidebar,
    }
}
</script>

<!-- 메인 -->
<style scoped>
.page-content {
    display: grid;
    grid-template-columns: auto 1fr;
    gap : 30px;
}

.club-list-wrap{
    width:195px
}

@media (max-width : 1100px) {
    .page-content {
        grid-template-columns : unset;
        grid-template-rows: auto auto;
    }

    .club-list-wrap {
        width : 100%;

        display: flex;
        flex-direction: column;
    }

    .club-card .header {
        flex-direction: column;
        align-items: flex-start;
    }

    .club-card .sns-ranker-wrap, .curriculum-wrap {
        padding : 0;
    }
}
</style>

<!-- 학과 선택 -->
<style scoped>
.major-selecter {
    height: 44px;

    margin-bottom : 24px;

    position: relative;

    overflow: hidden;
    
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

.major-selecter * {
    cursor: pointer;
}

.major-selecter > div {
    width : 100%;
    height : 100%;

    display: flex;

    position: absolute;
    top : 0px;
    left : 0px;
}

.major-selecter .current-major {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    font-weight: 700;

    justify-content: center;
    align-items: center;
}

.major-selecter .choice-major-wrap {
    align-items: stretch;
}

.major-selecter .choice-major-wrap .choice-major {
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;
}

.major-selecter .choice-major-wrap input {
    display: none;
}


.current-major-ani-enter-from, .current-major-ani-leave-to {
    transform: translateY(-100%);
}

.current-major-ani-enter-active, .current-major-ani-leave-active {
    transition: 300ms;
}

.current-major-ani-enter-to, .current-major-ani-leave-from {
    transform: translateY(0);
}

.choice-major-ani-enter-from, .choice-major-ani-leave-to {
    transform: translateY(100%);
}

.choice-major-ani-enter-active, .choice-major-ani-leave-active {
    transition: 300ms;
}

.choice-major-ani-enter-to, .choice-major-ani-leave-from {
    transform: translateY(0%);
}
</style>

<!-- 동아리 목록 -->
<style scoped>

.club-list {
    padding: 25px 16px;

    display: inline-flex;
    flex-direction: column;
    gap : 4px;
}

.club-list li {
    padding: 8px 26px;
    border-radius: 8px;

    display: inline-flex;
    align-items: center;
    gap : 8px;

    cursor: pointer;
}

.club-list li.seleted {
    background-color: var(--gray1);
}

.club-list .club-icon {
    width: 24px;
    height: 24px;
    box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.16);
}

.club-list .club-name{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size:16px;
}
</style>

<!-- 동아리 설명 -->
<style scoped>
.club-card {
    width : 100%;

    padding: 48px 32px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap : 36px;
}

.club-card .header {
    width : 100%;
    display: flex;
    align-items: center;
    gap : 32px;
}

.club-card .logo {
    width: 160px;
    height: 160px;

    border-radius: 29px;
    background-color: #f5f6f7;

    padding: 29px;
}

.club-card .descriptions-wrap {
    display: flex;
    flex-direction: column;
    gap : 12px;
}

.club-card .club-name {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
}

.club-card .descriptions {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
}


.club-card .sns-ranker-wrap {
    padding : 0 24px;

    display: flex;
    flex-direction: column;
    gap : 20px;
}

.club-card .sns-wrap {
    display: flex;
    flex-wrap: wrap;
    gap : 16px;
}

.club-card .sns-link {
    display: flex;
    align-items: center;
    gap : 8px;
}

.club-card .sns-link .icon {
    width : 24px;
    height : 24px;
}

.club-card .sns-link .url {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #3d3d3d;
}

.club-card .ranker-wrap {
    display: flex;
    gap : 36px;
}

.club-card .ranker {
    display: flex;
    align-items: center;
    gap : 12px;
}

.club-card .ranker .position {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 16px;
    font-weight: bold;
    color: var(--main-color4);
}

.club-card .ranker .name {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 16px;
    font-weight: 500;
    /* color: #3d3d3d; */
}

.club-card .curriculum-wrap {
    padding : 0 24px;
    display: flex;
    flex-direction: column;
    gap : 14px;
}

.club-card .curriculum {
    width : 100%;
    max-width : 200px;

    background-color: var(--gray1);
    
    border-radius: 8px;

    padding: 12px;

    display: inline-flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    gap : 12px;
}

.club-card .curriculum li {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #3d3d3d;
}
</style>