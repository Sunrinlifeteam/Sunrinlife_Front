<template>
<transition name="nav-bar">
    <nav v-if="isSidebarShow">
    
        <div class="nav-list">
            <div class="logo" @click="hideSidebarOnMobile(); $router.push('/')">
                <img src="./../assets/symbol.svg" alt="Logo" class="logo_symbol">
                <img src="./../assets/logo.svg" alt="Logo" class="logo_text">
            </div>

            <div class="menu_list">
                <router-link
                    v-for="i, n in navBarList" :key="n" :to="i.router"
                    @click="hideSidebarOnMobile()">
                    <img :src="i.img">
                    <span>{{ i.name }}</span>
                </router-link>
            </div>
            <template v-if="userData">
                <router-link class="list-user-profile" :to="'profile'" @click="hideSidebarOnMobile()">
                    <template v-if="userData.image">
                        <img :src="userData.image">
                    </template>
                    <template v-else>
                        <img src="../assets/user_profile_assets/basic_profile_img.svg">
                    </template>
                    <span class="list_user_profile_text">
                        <p class="list_user_profile_name">{{userData.username}}</p>
                        <p class="list_user_profile_department">{{department_map[userData.department]}}</p>
                    </span>
                </router-link>
            </template>
        </div>

        <!-- <span class="k" @click="$router.push('i_love_sunrin')">이스터에그</span> -->
    </nav>
</transition>

<transition name="nav-bg">
    <div v-if="isSidebarShow" @click="$store.commit('sidebarOnOff')" class="sidebar-bg"></div>
</transition>

</template>

<script>
import { mapState } from "vuex"


export default {
    name : "Sidebar",
    data(){
        return{
            
        }
    },
    methods : {
        hideSidebarOnMobile(){
            if (this.isMobileWindow)
                this.$store.commit('sidebarOff')
        }
    },
    computed :{
        ...mapState(['userData', 'navBarList', 'department_map', "isSidebarShow", "isMobileWindow"]),
        // store.js에 저장된 navBarList를 가져와서 목록으로 보여준다.
    },
    mounted(){

    }
}
</script>

<style scoped>


nav {
    position:fixed;
    width : 240px;
    /* background-color: var(--bg-black); */
    top : 0px;
    left : 0px;
    bottom: 0px;
    z-index: 2;
    background-color: white;
    box-shadow: 0px 0px 10px var(--gray5);
}

nav .nav-list {
    width:100%;
    border-radius: 0 16px 16px 0;

    display: inline-flex;
    flex-direction: column;
    z-index: 2;
}

nav .nav-list .list-category-line {
    border-top : 1px solid var(--gray3);

    margin : 2px 0;
}

nav .nav-list .list-user-profile {
    position:fixed;
    display:flex;
    left:32px;
    bottom:88px;
}

nav .nav-list .list-user-profile p{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
}

nav .nav-list .list-user-profile .list_user_profile_text{
    margin-left:15px;
}

nav .nav-list .list-user-profile .list_user_profile_name{
    font-size:14px;
}

nav .nav-list .list-user-profile .list_user_profile_department{
    font-size:12px;
    color:#a9a9a9;
}

nav .nav-list .list-user-profile img{
    width:36px;
    height:36px;
    border-radius: 100%;
    filter:none;
}

nav .logo{
    margin-top:64px;
    height:48px;
    display:inline-block;
    cursor: pointer;
}

nav .logo .logo_symbol{
    width:36px;
    margin-bottom:4px;
    margin-left:36px;
}

nav .logo .logo_text{
    display:inline;
    height:48px;
}

nav .menu_list{
    margin-top:60px;
    display: inline-flex;
    flex-direction: column;
}

nav .menu_list a{
    font-size: 18px;
    padding : 8px 16px;
    padding-left:32px;
    color:#d9d9d9;
    display : flex;

    cursor: pointer;
}

.nav-list .router-link-exact-active{
    color : #4992ff;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

.router-link-exact-active img{
    filter: invert(57%) sepia(64%) saturate(4033%) hue-rotate(198deg) brightness(102%) contrast(102%);
}

nav .menu_list a span{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    margin-left:10px;
    display: block;
}

nav .menu_list a img{
    display:inline;
    vertical-align: middle;
}

nav .menu_list a:hover, nav a:active{
    background-color: var(--gray1);
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.center {
    position: absolute;
    left: 50%;
    margin-left: -33px;
    bottom:130px;
}

.sidebar-bg {
    width : 100%;
    height: 100%;

    /* background-color: #0000008c; */

    visibility: hidden;

    position: absolute;
    top : 0px;
    left : 0px;
    z-index: 1;
}

.k {
    display: block;

    text-align: center;

    color : rgb(187 187 187 / 10%);
    cursor: pointer;

    position: absolute;
    bottom : 12px;
    left : 0px;
    right : 0px;
}

@media (max-width : 970px) {
    .sidebar-bg {
        visibility: visible;
    }
}

@media (max-height:500px) {
    nav .nav-list .list-user-profile {
        bottom:auto;
        top:350px;
    }
}
</style>