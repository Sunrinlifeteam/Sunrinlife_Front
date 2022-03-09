<template>
<transition name="nav-bar">
    <nav>
    
        <div class="nav-list">
            <div class="logo">
                <img src="./../assets/symbol.svg" alt="Logo" class="logo_symbol">
                <img src="./../assets/logo.svg" alt="Logo" class="logo_text">
            </div>

            <div class="menu_list">
                <router-link
                    v-for="i, n in navBarList" :key="n"
                    :to="i.router"><img :src="i.img"><span>{{ i.name }}</span></router-link>
            </div>
            <router-link class="list-user-profile" :to="profile">
                
                <img :src="currentUserData.profileImg">
                <span class="list_user_profile_text">
                    <p class="list_user_profile_name">{{currentUserData.name}}</p>
                    <p class="list_user_profile_department">{{currentUserData.department}}</p>
                </span>
                <!-- {{currentUserData}} -->
            </router-link>
        </div>


        <!-- <div 
            @click="$router.push('easterEgg')"
            class="easter-egg">이스터에그</div> -->
    </nav>
</transition>



</template>

<script>
import { mapState } from "vuex"
let profile = "profile"
export default {
    name : "Sidebar",
    data(){
        return{
            profile
        }
    },
    computed :{
        ...mapState(['currentUserData', 'navBarList'])
        // store.js에 저장된 navBarList를 가져와서 목록으로 보여준다.
    },
    props : {
        // navState : Number
    }
}
</script>

<style>


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
}

nav .logo{
    margin-top:64px;
    height:48px;
    display:inline-block;
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
    display : inline;

    cursor: pointer;
}

nav .menu_list a span{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    margin-left:10px;
    vertical-align: middle;
}

nav .menu_list a img{
    display:inilne;
    vertical-align: middle;
}

nav .menu_list a:hover, nav a:active{
    background-color: var(--gray1);
}

.nav-list .router-link-exact-active{
    color : #4992ff;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

.nav-bg {
    width : 100%;
    height: 100vh;
    background-color: var(--bg-black);

    position: fixed;
    top : 0;
    left : 0;
    z-index: 1;
}

.easter-egg{
    color : #f2f2f2;

    position: absolute;
    bottom : 0px;

    cursor: pointer;
}

@media (max-height:500px) {
    nav .nav-list .list-user-profile {
        bottom:auto;
        top:350px;
    }
}
</style>