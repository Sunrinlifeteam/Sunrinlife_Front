<template>
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
        <!-- ranker은 임원을 끗하는 겁니다...... 영어를 못해서 죄송.. -->
        <div class="sns-wrap">
            <a class="sns-link facebook-link" href="https://www.facebook.com/edcancircle" target="_blank">
                <img src="/img/sns/facebook.svg" alt="Facebook 링크 아이콘" class="icon">
                <div class="url">facebook.com/edcancircle</div>
            </a>
            <a class="sns-link insta-link" href="https://www.instagram.com/sunrin_edcan/" target="_blank">
                <img src="/img/sns/facebook.svg" alt="Instagram 링크 아이콘" class="icon">
                <div class="url">@sunrin_edcan</div>
            </a>
            <a class="sns-link web-link" href="https://edcan,kr" target="_blank">
                <img src="/img/sns/link.svg" alt="Web 링크 아이콘" class="icon">
                <div class="url">edcan.kr</div>
            </a>
            <a class="sns-link location-link" href="#" target="_blank">
                <img src="/img/sns/location.svg" alt="붕아리 부실" class="icon">
                <div class="url">421실</div>
            </a>
        </div>
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
</template>

<script>
export default {
    name : "Club card",
    props : {
        marorIdx : Number,
        clubIdx : Number,
    }
}
</script>

<style scoped>
.club-card {
    width : 100%;

    padding: 48px 32px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap : 36px;
}

.header {
    width : 100%;
    display: flex;
    align-items: center;
    gap : 32px;
}

.logo {
    width: 160px;
    height: 160px;

    border-radius: 29px;
    background-color: #f5f6f7;

    padding: 29px;
}

.descriptions-wrap {
    display: flex;
    flex-direction: column;
    gap : 12px;
}

.club-name {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
}

.descriptions {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
}


.sns-ranker-wrap {
    padding : 0 24px;

    display: flex;
    flex-direction: column;
    gap : 20px;
}

.sns-wrap {
    display: flex;
    flex-wrap: wrap;
    gap : 16px;
}

.sns-link {
    display: flex;
    align-items: center;
    gap : 8px;
}

.sns-link .icon {
    width : 24px;
    height : 24px;
}

.sns-link .url {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #3d3d3d;
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
    padding : 0 24px;
    display: flex;
    flex-direction: column;
    gap : 14px;
}

.curriculum {
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

.curriculum li {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #3d3d3d;
}

@media (max-width : 1100px) {
    .header {
        flex-direction: column;
        align-items: flex-start;
    }

    .sns-ranker-wrap, .curriculum-wrap {
        padding : 0;
    }
}
</style>