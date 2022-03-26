<template>
<div class="club-card neu-morphism-card">
    <div class="header">
        <img :src="selectCludData.logo_url" alt="" class="logo">
        <div class="descriptions-wrap">
            <h2 class="club-name">{{ selectCludData.name }}</h2>
            <p class="descriptions">{{ selectCludData.description }}</p>
        </div>
    </div>

    <div class="sns-ranker-wrap">

        <!-- ranker은 임원을 뜻하는 겁니다...... 영어를 못해서 죄송합니다.... -->
        <div class="sns-wrap">
            <!-- 페이스북 링크 -->
            <a class="sns-link facebook-link" :href="selectCludData.facebook" target="_blank"
                v-if="selectCludData.facebook != ''">
                <img src="/img/sns/facebook.svg" alt="Facebook 링크 아이콘" class="icon">
                <div class="url">www.facebook.com/{{ clubFacebookId.slice(-1)[0] }}</div>
            </a>

            <!-- 인스타 링크 -->
            <a class="sns-link insta-link" :href="selectCludData.instagram" target="_blank"
                v-if="selectCludData.instagram != ''">
                <img src="/img/sns/instagram.svg" alt="Instagram 링크 아이콘" class="icon">
                <div class="url">@ {{ clubInstagramId.slice(-1)[0] }}</div>
            </a>

            <!-- 웹사이트 링크 -->
            <a class="sns-link web-link" :href="selectCludData.url" target="_blank"
                v-if="selectCludData.url != ''">
                <img src="/img/sns/link.svg" alt="Web 링크 아이콘" class="icon">
                <div class="url">{{ selectCludData.url }}</div>
            </a>

            <!-- 동아리 부실 -->
            <a class="sns-link location-link" href="#">
                <img src="/img/sns/location.svg" alt="동아리 부실" class="icon">
                <div class="url">{{ selectCludData.location }}</div>
            </a>
        </div>

        <!-- 임원 목록 -->
        <div class="ranker-wrap">
            <div class="ranker">
                <div class="position">부장</div>
                <div class="name">{{ selectCludData.leader }}</div>
            </div>
            <div class="ranker">
                <div class="position">부부장</div>
                <div class="name">{{ selectCludData.viceleader }}</div>
            </div>
        </div>
    </div>

    <div class="curriculum-wrap" v-if="selectCludData.curriculum != null && selectCludData.curriculum != '' ">
        <h3>수업 커리큘럼</h3>
        <ul class="curriculum">
            <!-- <li>{{ selectCludData.curriculum }}</li> -->
            <li v-for="i, n in  selectCludData.curriculum.split('|')" :key="n">{{ i }}</li>
        </ul>
    </div>

</div>
</template>

<script>
export default {
    name : "Club card",
    data(){return{
        clubFacebookId : "",
        clubInstagramId : "",
    }},
    props : {
        selectCludData : Object
    },
    mounted() {
        this.clubFacebookId = this.selectCludData.facebook.split("/")
        this.clubInstagramId = this.selectCludData.instagram.split("/")
    },
    updated() {
        this.clubFacebookId = this.selectCludData.facebook.split("/")
        this.clubInstagramId = this.selectCludData.instagram.split("/")
    },
}
</script>

<style scoped>
.club-card {
    width : 100%;

    min-height: 600px;

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

@media (max-width : 1100px) {
    .club-card .header {
        flex-direction: column;
        align-items: flex-start;
    }

    .club-card .sns-ranker-wrap, .curriculum-wrap {
        padding : 0;
    }
}
</style>