<template>

<Header/>
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

            <ClubCard
                    :selectCludData="clubData[selectMajorIdx][selectClubIdx]" />
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from "./../components/Sidebar.vue"
import Header from "../components/Header.vue"

import ClubCard from "../components/club/ClubCard.vue"



import { JB, SW, it, de } from "./../components/club/TempClubData"

// import { getClubMajor } from "./../api.js"

export default {
    name : "Club Page",
    data(){return{
        clubData : [JB, SW, it, de],

        // clubData : [[], [], [], []],

        selectClubIdx : 0,
        selectMajorIdx : 0,

        isSelectMajor : false,
    }},
    components : {
        Header,
        Sidebar,
        ClubCard,
    },
    watch : {
        selectMajorIdx(){
            this.selectClubIdx = 0
        }
    },
    mounted() {
        // this.clubData[0] = getClubMajor(0)
        // this.clubData[1] = getClubMajor(1)
        // this.clubData[2] = getClubMajor(2)
        // this.clubData[3] = getClubMajor(3)
    },
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
    width : 195px
}

.club-list-wrap > * {
    width : 100%;
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