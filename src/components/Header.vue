<template>
<header>
    <div class="menu">
        <div class="user-profile">
            <img
                class="user-profile-img"
                @click="$emit('navOnOff')"
                :src="currentUserData.profileImg" alt="사용자 프로필">

            <span class="user-profile-data">{{ currentUserData.year }}학년</span>
            <span class="user-profile-data">{{ currentUserData.class }}반</span>
            <span class="user-profile-data">{{ currentUserData.number }}번</span>
            <span class="user-profile-data">{{ currentUserData.name }}</span>
        </div>
        <img
            @click="$router.push('/main')"
            src="./../../public/symbol.svg" alt="sunrin life Logo" class="logo">
        <!-- <img
            @click="$router.push('/main')"
            src="./../assets/logo.svg" alt="sunrin life Logo" class="logo"> -->
    </div>
    <!-- <div class="school-img">
        <p>우리들의 두번째 학교 <b>선린 Life</b></p>
    </div> -->
</header>
</template>

<script>
import { mapState } from "vuex"

export default {
    name : "Header",
    data(){
        return{
            
        }
    },
    methods:{
        navOnOff(){
            console.log("navOnOff");
            this.$emit("navOnOff")
        }
    },
    computed :{
        ...mapState(['currentUserData'])
    }
}

</script>

<style>
header {
    z-index: 1;
}

header .menu {
    background-color: white;
    
    height : 70px;

    padding : 12px;

    box-shadow: 0px -10px 10px var(--gray8);

    display: flex;
    justify-content: space-between;

    position: fixed;
    top : 0px;
    left : 0px;
    right : 0px;
}

header .user-profile {
    display: flex;
    align-items: center;
}

header .user-profile img {
    width : 40px;

    border-radius: 100%;

    cursor: pointer;

    transition: 1000ms;
}

header .user-profile-data{
    font-size: 22px;
    margin : 0 8px;
}

header .logo {
    cursor: pointer;

    transition: 1000ms;
}

header .logo:hover, header .logo:active {
    transform: scale(1.3) rotateZ(1.5turn);
}

header .school-img {
    background-color: var(--flat-light-blue);

    height : 300px;

    margin-top : 70px;
}

@media (max-width : 750px) {
    /* header .menu .logo {
        width : 20%;
    } */
}
</style>