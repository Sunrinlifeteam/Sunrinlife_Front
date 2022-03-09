<template>
<Sidebar/>
<div class="panel page notice-page">
    <div class="page-content neu-morphism-card">
        <div class="hader">
            <h6>공지</h6>
            <div class="search-wrap">
                <input type="text" placeholder="검색">
                <img src="/img/search.svg" alt="검색 아이콘" class="search-button">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"

export default {
    naem : "Notice",
    components : {
        Sidebar,
    }
}
</script>

<style scoped>
.hader {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hader h6 {
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: bold;
    color: #3d3d3d;
}

.hader .search-wrap {
    width: 323px;

    display: flex;

    position: relative;
}

.hader .search-wrap input {
    border: 0px;
    border-radius: 8px;

    background-color: #e6e6e6;

    padding : 11px 16px;

    flex : 1;
}

.hader .search-wrap input::placeholder {
    color: #949494;

    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: 500;
}

.hader .search-wrap .search-button {
    width : 25px;
    height : 25px;

    position: absolute;
    top : 50%;
    right : 18px;
    transform: translateY(-50%);
}

</style>