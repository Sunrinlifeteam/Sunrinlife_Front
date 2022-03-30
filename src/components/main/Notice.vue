<template>
<div class="notice main-page-item">
    <div class="main-page-item-title"><h3>공지</h3></div>
    <div class="main-page-item-content">
        <div v-for="i, j, in noticeMain" :key="j" class="title_list">
            <transition name="notice-icon">
                <div v-if="i.type === 'school'" class="notice-icon notice-school">학교</div>
                <div v-else-if="i.type === 'intranet'" class="notice-icon notice-intranet">인트라넷</div>
            </transition>
            <p class="title" @click="$router.push(`/notice/${i.id}`)">{{i.title}}</p>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from "vuex"
export default {
    name : "Notice",
    data(){
        return {
            
        }
    },
    methods :{

    },
    mounted(){
        
    },
    computed:{
        ...mapState(["noticeMain"]),
    },
}
</script>

<style>
.notice{
    
}

.notice .main-page-item-content{
    
}

.title_list{
    
    display: flex;
}

.notice .icon-wrap {
    padding-right : 4px;
}

.notice-icon {
    font-size : 14px;
    padding : 2px 10px;
    margin-bottom:14px;
    border-radius: 24px;
    color : var(--gray1);
    height:28px;
    text-align: center;
    
    padding : 4px 4px;
    margin-right:12px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

.notice-icon.notice-school {
    background-color: #ffcf49;
    width:50px;
}

.notice-icon.notice-intranet {
    background-color: #4992ff;
    width: 74px;
}

.title{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    
    text-overflow: ellipsis;
    overflow:hidden;
    
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    display: -webkit-box;

    margin-bottom:18px;

    cursor: pointer;
    flex: 1;

    margin-top:1.5px;
}
</style>