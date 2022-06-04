<template>
<div class="club-card mobile">
    <div class="header">
        <img v-if="selectClubData.logo_url != ''" :src="selectClubData.logo_url" alt="" class="logo">
            <img v-else src="@/assets/symbol.svg" :alt="`동아리 로고 기본값`" class="logo">

        <div class="name-sns-wrap">
            <h2 class="club-name">{{ selectClubData.name }}</h2>
            
            <!-- 페이스북 링크 -->
            <a class="sns-link facebook-link" :href="selectClubData.facebook" target="_blank"
                v-if="selectClubData.facebook != ''">
                <img src="/img/sns/facebook.svg" alt="Facebook 링크 아이콘" class="icon">
                <div class="url">{{ clubFacebookId }}</div>
            </a>

            <!-- 인스타 링크 -->
            <a class="sns-link insta-link" :href="selectClubData.instagram" target="_blank"
                v-if="selectClubData.instagram != ''">
                <img src="/img/sns/instagram.svg" alt="Instagram 링크 아이콘" class="icon">
                <div class="url">{{ clubInstagramId }}</div>
            </a>

            <!-- 웹사이트 링크 -->
            <a class="sns-link web-link" :href="selectClubData.url" target="_blank"
                v-if="selectClubData.url != ''">
                <img src="/img/sns/link.svg" alt="Web 링크 아이콘" class="icon">
                <div class="url">{{ selectClubData.url }}</div>
            </a>

            <!-- 동아리 부실 -->
            <a class="sns-link location-link" href="#">
                <img src="/img/sns/location.svg" alt="동아리 부실" class="icon">
                <div class="url">{{ selectClubData.location }}</div>
            </a>
        </div>
    </div>

    <p class="descriptions">{{ selectClubData.description }}</p>

    <!-- 임원 목록 -->
    <div class="ranker-wrap">
        <div class="ranker">
            <div class="position">부장</div>
            <div class="name">{{ selectClubData.leader }}</div>
        </div>
        <div class="ranker">
            <div class="position">부부장</div>
            <div class="name">{{ selectClubData.viceleader }}</div>
        </div>
    </div>

    <div class="curriculum-wrap" v-if="selectClubData.curriculum != null && selectClubData.curriculum != '' ">
        <h3>수업 커리큘럼</h3>
        <ul class="curriculum">
            <li v-for="i, n in  selectClubData.curriculum.split('|')" :key="n">{{ i }}</li>
        </ul>
    </div>

</div>
</template>

<script>
export default {
    name: "Club card",
    data(){
        return {}
    },
    props: {
        selectClubData: Object
    },
    computed: {
        clubFacebookId() {
            return this.selectClubData.facebook.split("/").filter(x=>x).pop();
        },
        clubInstagramId() {
            return this.selectClubData.instagram.split("/").filter(x=>x).pop();
        }
    },
}
</script>

<style scoped>
.club-card {
    display: flex;
    flex-direction: column;
    gap : 20px;
}

.header {
    display: flex;
    gap : 24px; 
}

.header .logo {
    width: 160px;
    height: 160px;

    border-radius: 29px;
    background-color: #f5f6f7;

    padding: 29px;
}

.name-sns-wrap {
    display: flex;
    flex-direction: column;
    gap : 8px;
}

.club-name {
    font-size: 18px;
}

.sns-link {
    display: flex;
    align-items: center;
    gap : 8px;
}

.sns-link .icon {
    width : 16px;
    height : 16px;
}

.sns-link .url {
    font-weight: 500;
    font-size: 12px;
    color: #3d3d3d;
}

.descriptions {
    font-size: 14px;
    font-weight: bold;
    word-break : keep-all;
}


.ranker-wrap {
    display: flex;
    gap : 36px;
}

.ranker {
    display: flex;
    align-items: center;
    gap : 12px;
}

.ranker .position {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 16px;
    font-weight: bold;
    color: var(--main-color4);
}

.ranker .name {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 16px;
    font-weight: 500;
    /* color: #3d3d3d; */
}

.curriculum-wrap {
    display: flex;
    flex-direction: column;
    gap : 14px;
}

.curriculum {
    width : 100%;
    max-width : 200px;

    background-color: var(--gray3);
    
    border-radius: 8px;

    padding: 12px;

    display: inline-flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    gap : 12px;
}

.curriculum li {
    font-weight: 500;
    font-size: 14px;
    font-weight: 500;
    color: #3d3d3d;
}

</style>