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
            <div class="input_panel">
                <p>이름</p>
                <input class="user_name" placeholder="이름">
            </div>
            <div class="input_panel">
                <p>학과</p>
                <input class="user_department" placeholder="학과">
            </div>
            <div class="input_panel">
                <p>학번</p>
                <input class="user_number" placeholder="학번">
            </div>
            <div class="input_panel">
                <p>Github</p>
                <input class="user_github" placeholder="Github">
            </div>
            <div class="input_panel introduce">
                <p>소개</p>
                <textarea class="user_introduce" placeholder="소개"></textarea>
            </div>
        </div>
    </div>

</div>
</template>
<style scoped>
    input, textarea{
        background-color:#f5f6f7;
        border:none;
        width:100%;
        height:40px;
        border-radius: 8px;
        color:#3d3d3d;
        font-size:16px;
        padding:8px 16px;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 500;
        margin-top:8px;
    }
    textarea{
        height:160px;
        resize:none;
    }
    textarea:focus{
        outline: none;
    }

    ::placeholder{
        color:#b9b9b9;
    }
    p{
        font-size: 16px;
        color:#3d3d3d;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 500;
    }

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
        grid-template-columns: repeat(2, 1fr);
        row-gap:12px;
        column-gap: 24px;
    }

    .input_panel{
        text-align: left;
        display: inline-block;
        
    }
    
    .introduce{
        grid-column:1/3;
    }

</style>