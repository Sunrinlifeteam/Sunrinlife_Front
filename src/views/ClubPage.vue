<template>

<div class="panel">
    <div class="clud-page">
        <div class="page-content" :class="{'mobile-ui' : isMobileWindow}">
            <div class="club-list-wrap">
                <!-- 학과 선택창 -->
                <div class="major-selecter neu-morphism-card none-dragging">

                    <transition name="current-major-ani">
                        <div class="current-major"
                            v-if="!isShowDivisions"
                            @click="isShowDivisions = true;"
                            :class="{ [division]: true }">
                            <span v-if="division === 'security'">정보보호과</span>
                            <span v-else-if="division === 'software'">소프트웨어과</span>
                            <span v-else-if="division === 'buisness'">IT경영과</span>
                            <span v-else-if="division === 'design'">콘텐츠 디자인과</span>
                            <span v-else-if="division === 'general'">일반 동아리</span>
                            <span v-else-if="division === 'autonomous'">자율 동아리</span>
                        </div>
                    </transition>

                    <transition name="choice-major-ani">
                        <div class="choice-major-wrap none-dragging" v-if="isShowDivisions" @click="isShowDivisions = false">
                            <div class="choice-major security"
                                @click="change('security')">
                                정보
                            </div>
                            <div class="choice-major software"
                                @click="change('software')">
                                솦과
                            </div>
                            <div class="choice-major ceo"
                                @click="change('buisness')">
                                아경
                            </div>
                            <div class="choice-major design"
                                @click="change('design')">
                                콘디
                            </div>
                            <div class="choice-major"
                                @click="change('general')">
                                일반
                            </div>
                            <div class="choice-major security"
                                @click="change('autonomous')">
                                자율
                            </div>
                        </div>
                    </transition>
                </div>

                <!-- 동아리 리스트 -->
                <ul v-if="loadedClubData" class="club-list neu-morphism-card none-dragging">
                    <li
                        v-for="(i, n) in loadedClubData" :key="n"
                        :class="{ 'seleted' : selectIndex == n}"
                        @click="selectIndex = n">
                        <img v-if="i.logo_url != ''" :src="i.logo_url" :alt="`${i.name} 동아리 로고`" class="club-icon">
                        <img v-else src="../assets/symbol.svg" :alt="`동아리 로고 기본값`" class="club-icon">

                        <div v-if="!isMobileWindow" class="club-name">{{ i.name }}</div>
                    </li>
                </ul>
            </div>

            <ClubCard
                    v-if="!isMobileWindow && loadedClubData && loadedClubData[selectIndex]"
                    :selectClubData="loadedClubData[selectIndex]" />
            <ClubCardMobile
                    v-else-if="isMobileWindow && loadedClubData && loadedClubData[selectIndex]"
                    :selectClubData="loadedClubData[selectIndex]"/>
        </div>
    </div>
</div>
</template>

<script>
import ClubCard from "../components/club/ClubCard.vue"
import ClubCardMobile from "../components/club/ClubCardMobile.vue"



// import { JB, SW, it, de } from "../components/club/TempClubData"
import { mapState } from 'vuex'
import {
    getClubMajor,
    getClubGeneral,
    getClubAutonomous,} from "../api.js"
import store from "../store.js"

export default {
    name : "Club Page",
    data(){
        return{
            isShowDivisions: false,
            selectIndex: 0,
        }
    },
    computed :{
        ...mapState(["isMobileWindow", "clubData"]),
        getAuthToken() {
            return this.$store.getters.getAuthToken;
        },
        loadedClubData() {
            return this.clubData[this.division];
        },
        division() {
            return this.$route.query.division || "security";
        }
    },
    watch:{
        getAuthToken(){
            this.loadData();
        },
        $route(v){
            this.loadData(v)
        }
    },
    components : {
        ClubCard,
        ClubCardMobile,
    },
    methods: {
        change(division) {
            this.selectIndex = 0;
            this.$router.push({ path: 'club', query: { division }});
            this.selectIndex = 0;
        },
        loadData(){
            // 이미 있는 데이터가 동아리인 경우는 함수 종료
            if(this.clubData[this.division] !== undefined){
                return
            }


            //동아리 종류와 id메칭
            let clubIdx
            if(this.division === "security"){
                clubIdx = 0
            }
            else if(this.division === "software"){
                clubIdx = 1
            }
            else if(this.division === "buisness"){
                clubIdx = 2
            }
            else if(this.division === "design"){
                clubIdx = 3
            }
            else if(this.division === "general"){
                clubIdx = 4
            }
            else if(this.division === "autonomous"){
                clubIdx = 5
            }

            // 데이터가 없는 동아리인 경우에는 서버 통신
            if(clubIdx <= 3){
                getClubMajor(clubIdx).then((data) => {
                    store.commit("setClubData", { id:  this.division, data });
                });
            }
            else if(clubIdx === 4){
                getClubGeneral().then((data) => {
                    store.commit("setClubData", { id: this.division, data });
                });
            }
            else if(clubIdx === 5){
                getClubAutonomous().then((data) => {
                    store.commit("setClubData", { id: this.division, data });
                });
            }
        }
    },
    mounted(){
        if (this.$store.getters.getAuthToken !== null) this.loadData(this.division);
    }
}
</script>

<!-- 메인 -->
<style scoped lang="scss">
@import "src/assets/style/club/club/clubPage/style";
</style>