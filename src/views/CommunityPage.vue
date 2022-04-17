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

                <!-- <select name="" id=""></select> -->
            </div>

            <ul class="hot-sunrin board-list">
                <li v-for="i, n in boardData" :key="n">
                    <div class="heart">
                        <img src="./../assets/heart_red.svg" alt="">
                        {{ i.heartCount }}
                    </div>
                    <div class="title">
                        <span>{{ i.title }}</span>
                        <img src="./../assets/symbol.svg" alt="" v-if="n % 3 == 0">
                    </div>
                    <div class="writer">
                        {{ i.writer }}
                    </div>
                    <div class="date">
                        {{ i.timeStamp.getMonth() + 1 }}-{{ i.timeStamp.getDay() }}
                    </div>
                </li>
            </ul>

            <ul class="normal board-list">
                <li v-for="i, n in boardData" :key="n">
                    <div class="heart">
                        <img src="./../assets/heart_blue.svg" alt="">
                        {{ i.heartCount }}
                    </div>
                    <div class="title">
                        <span>{{ i.title }}</span>
                        <img src="./../assets/symbol.svg" alt="" v-if="n % 3 == 0">
                    </div>
                    <div class="writer">
                        {{ i.writer }}
                    </div>
                    <div class="date">
                        {{ i.timeStamp.getMonth() + 1 }}-{{ i.timeStamp.getDay() }}
                    </div>
                </li>
            </ul>

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
    padding : 10px 13px;

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap : 22px;
}

.board-list li {
    display: flex;
    gap : 16px;
}

.board-list li .title {
    flex : 1;
}

.board-list li .heart{
    font-size: 12px;
    font-weight: 500;

    display: flex;
    align-items: center;
}

.board-list li .heart img {
    width : 24px;

    padding: 4px;
}


.board-list li .title {
    color: #3d3d3d;

    font-size: 14px;
    font-weight: 500;
}

.board-list li .title img {
    width: 24px;

    margin-left : 10px;
}

.board-list li .writer {
    color: #b9b9b9;
    font-size: 12px;
    font-weight: 500;
}

.board-list li .date{
    color: #b9b9b9;
    font-size: 12px;
    font-weight: 500;
}

.hot-sunrin {
    margin-top: 16px;
    
    background-color: hsla(0, 100%, 64%, 0.1);
}

.hot-sunrin li .heart {
    color: #ff4949;
}

</style>