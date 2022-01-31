<template>
<header>
    <div class="user-profile font-medium">
        <span class="user-profile-data">{{currentUserData.year}}학년</span>
        <span class="user-profile-data">{{currentUserData.class}}반</span>
        <span class="user-profile-data">{{currentUserData.number}}번</span>
        <span class="user-profile-data">{{currentUserData.name}}</span>
    </div>

    <img src="./../../public/EDCAN.svg" alt="Logo" class="logo">
</header>
</template>

<script>

let currentUserData = {
    name : "박희찬",
    year : 1,
    class : 4,
    number : 13
}
export default {
    name : "Header",
    data(){
        return{
            currentUserData
        }
    }
}

</script>

<style>
header {
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