<template>
<div class="panel page community-page">
    <div class="page-content">
        <div class="community-content neu-morphism-card">
            <div class="header">
                <h2>일반 게시판 / 익명 게시판</h2>
                <img src="./../assets/user_profile_assets/correctionIcon.svg" alt="">
            </div>

            <div class="search-filter-wrap">
                <div class="search-wrap">
                    <input v-model="searchQueryText" type="text" placeholder="검색">
                    <img src="/img/search.svg" alt="검색 아이콘" class="search-button">
                </div>
            </div>

            <div class="hot-sunrin board-list">
                <h3>핫선린</h3>

                <ul>
                    <li v-for="i, n in boardData" :key="n" class="board-list-item">
                        <div class="heart">
                            {{ i.heartCount }}
                        </div>
                        <div class="title">
                            {{ i.title }}
                            <img src="./../assets/community/eye_icon.svg" alt="" v-if="n % 3 == 0">
                        </div>
                        <div class="writer">
                            {{ i.writer }}
                        </div>
                        <div class="date">
                            <span v-if="i.timeStamp.getMonth() < 9">0</span>
                            {{ i.timeStamp.getMonth() + 1 }}-
                            <span v-if="i.timeStamp.getDay() < 10">0</span>
                            {{ i.timeStamp.getDay() }}
                        </div>
                    </li>
                </ul>
            </div>

            <div class="normal board-list">
                <h3>일반</h3>

                <ul>
                    <li v-for="i, n in boardData" :key="n" class="board-list-item">
                        <div class="heart">
                            {{ i.heartCount }}
                        </div>
                        <div class="title">
                            {{ i.title }}
                            <img src="./../assets/community/eye_icon.svg" alt="" v-if="n % 3 == 0">
                        </div>
                        <div class="writer">
                            {{ i.writer }}
                        </div>
                        <div class="date">
                            <span v-if="i.timeStamp.getMonth() < 9">0</span>
                            {{ i.timeStamp.getMonth() + 1 }}-
                            <span v-if="i.timeStamp.getDay() < 10">0</span>
                            {{ i.timeStamp.getDay() }}
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name : "CommunitPage",
    data(){ return {
        boardData : [
            {
                heartCount : 13,
                title : "선린인터넷고등학교 인트라넷 오픈",
                writer : "송우진",
                timeStamp : new Date()
            },
            {
                heartCount : 13,
                title : "선린인터넷고등학교 인트라넷 오픈",
                writer : "송우진",
                timeStamp : new Date()
            },
            {
                heartCount : 13,
                title : "선린인터넷고등학교 인트라넷 오픈",
                writer : "송우진",
                timeStamp : new Date()
            },
            {
                heartCount : 13,
                title : "선린인터넷고등학교 인트라넷 오픈",
                writer : "송우진",
                timeStamp : new Date()
            },
            {
                heartCount : 13,
                title : "선린인터넷고등학교 인트라넷 오픈",
                writer : "송우진",
                timeStamp : new Date()
            },
        ]
    }}
}
</script>

<style scoped>
.community-content {
    padding : 16px;
}

.header, .search-filter-wrap {
    display: flex;
    justify-content: space-between;
}

.header h2 {
    font-size: 18px;
    font-weight: bold;
    color: #3d3d3d;
}

.header img {
    width: 36px;
    height: 36px;
    padding: 6px;
    background-color: #f5f6f7;
    border-radius: 50%;
    
    cursor: pointer;
}

.search-filter-wrap {
    margin-top : 15px;
}

.search-wrap {
    height: 40px;
    max-width : 323px;
    flex : 1;

    padding: 8px 16px;
    border-radius: 8px;
    background-color: #f5f6f7;

    display: flex;
    gap : 8px;

    position: relative;
}

.search-wrap input {
    height: 100%;
    flex : 1;

    font-size: 16px;
    font-weight: 500;

    background-color: transparent;

    border : 0px;
    border-radius: 0px;
}

.search-wrap input::placeholder {
    color: #b9b9b9;
}

.search-wrap .search-button {
    width : 20px;
    height : 20px;

    cursor: pointer;
}

.board-list {
    padding : 12px 15px;

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap : 15px;
}

.board-list h3 {
    font-size: 16px;
}

.board-list ul {
    display: flex;
    flex-direction: column;
    gap : 16px;
}

.board-list-item {
    display: flex;
    gap : 21px;
}

.board-list-item * {
    display: flex;
    align-items: center;
}

.board-list-item .heart{
    text-align: left;
    font-size: 12px;
    font-weight: 500;
}

.board-list-item .heart img {
    width : 24px;

    padding: 4px;
}

.board-list-item .title {
    color: #3d3d3d;

    font-size: 14px;
    font-weight: 500;
}

.board-list-item .title img {
    width: 24px;

    margin-left : 10px;
}

.board-list-item .writer {
    color: #b9b9b9;
    font-size: 12px;
    font-weight: 500;
}

.board-list-item .date{
    color: #b9b9b9;
    font-size: 12px;
    font-weight: 500;

    margin-left: 13px;
}

.hot-sunrin {
    margin-top: 16px;
    
    background-color: hsla(0, 100%, 64%, 0.1);
}

.hot-sunrin h3 {
    color: #ff4949;
}

.hot-sunrin li .heart {
    color: #ff4949;
}

.normal li .heart {
    color: #4992ff;
}

</style>