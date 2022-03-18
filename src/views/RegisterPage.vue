<template>

<div class="register">
    <div class="register_panel">
        <div class="logo">
            <img class="logo_symbol" src="../assets/symbol.svg">
            <img class="logo_text" src="../assets/logo.svg">
        </div>
        <div class="profile">
            <img class="profile_img" src="../assets/user_profile_assets/basic_profile_img.svg">
        </div>
        <div class="user_info_panel">
            
            <input class="user_name" placeholder="이름" readonly>
            <input class="user_department" placeholder="학과" readonly>
            <input class="user_number" placeholder="학번" readonly>
            <input class="user_github" placeholder="github">
            <input class="user_introduce" placeholder="소개">
        </div>
    </div>

</div>
</template>
<style scoped>
    .register_panel{
        width : 80%;
        max-width: 600px;
        height:670px;
        padding : 25px;
        padding-top:55px;

        font-size: 20px;

        background-color: white;

        border-radius: 16px;

        box-shadow: 0px 0px 10px var(--gray5);

        display: inline-flex;
        flex-direction: column;
        text-align: center;
        gap: 6px;

        position: absolute;
        top : 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }
    .logo{
        display:Flex;
        justify-content: center;
    }
    .logo_symbol{
        width:70px;
    }
    .logo_text{
        width:190px;
    }
    .profile{
        background-color: #f5f6f7;
        border-radius: 50%;
        margin:0 auto;
        margin-top:25px;
        width:110px;
        height: 110px;
        display:flex;
    }
    .profile_img{
        width:70px;
        height:70px;
        margin:19px;
    }

    .user_info_panel{
        display:grid;
    }
</style>