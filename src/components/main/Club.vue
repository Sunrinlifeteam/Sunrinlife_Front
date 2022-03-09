<template>
<div class="club main-page-item">
    <divc class="main-page-item-title">
        <h3>동아리</h3>
    </divc>
    <div class="main-page-item-content">
        <router-link v-for="i, j in clubs" :key="j" class="club_panel" :class="j" :to="j"> <!-- 경로 수정해야함 -->
            <p>{{i}}</p>
        </router-link>
    </div>
</div>
</template>

<script>
const clubs = {
    "security":"정보보호과",
    "software":"소프트웨어과",
    "ceo":"IT경영과",
    "design":"콘텐츠디자인과"
}
export default {
    name : "Club",
    data(){
        return{
            clubs
        }
    }
}
</script>

<style>
.club {

}

.club .main-page-item-content {
    display: grid;
    grid-template-columns: repeat(4, 140px);
    grid-gap: 22px;
    overflow: auto;
    padding-bottom:5px;
}
.main-page-item-content::-webkit-scrollbar {
    height: 5px;
    margin-top:2px;
}
.main-page-item-content::-webkit-scrollbar-track {
    background-color: none; 
}

.main-page-item-content::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
}

.club_panel{
    padding: 8px;
    border-radius: 8px;
    display: block;
    text-align: center;
}
.club_panel p{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size:16px;
    margin-top:190px;
}

</style>