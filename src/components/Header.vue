<template>
<header>
    <div class="user-profile font-medium">
        <span class="user-profile-data">{{currentUserData.year}}학년</span>
        <span class="user-profile-data">{{currentUserData.class}}반</span>
        <span class="user-profile-data">{{currentUserData.number}}번</span>
        <span class="user-profile-data">{{currentUserData.name}}</span>
    </div>

    <img src="./../assets/logo.svg" alt="Logo" class="logo">
</header>
</template>

<script>
import {mapState} from "vuex"

export default {
    name : "Header",
    data(){
        return{
            
        }
    },
    computed :{
        ...mapState(['currentUserData'])
    }
}

</script>

<style>
header {
    background-color: var(--main-btn-bg-color);
    
    padding : 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .user-profile {
    display: flex;
    align-items: center;
}

header .user-profile-data {
    font-size: 1.25em;
    margin : 0 4px;
}

header .logo{
    width : 30%;
}


@media (min-width: 600px) {
    header .logo{
        width : 15%    
    }
}
</style>