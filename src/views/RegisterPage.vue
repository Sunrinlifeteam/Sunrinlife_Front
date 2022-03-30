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
                <input class="user_name" placeholder="이름" :value="userData?.username" readonly>
            </div>
            <div class="input_panel">
                <p>학과</p>
                <input class="user_department" placeholder="학과" :value="department_map[userData?.department]" readonly>
            </div>
            <div class="input_panel">
                <p>학번</p>
                <input class="user_number" placeholder="학번" :value="userData?.class" readonly>
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

        <button class="register">선린 라이프 시작하기</button>
    </div>

</div>
</template>
<script>
import { mapState } from 'vuex'
export const department_map = {
    "security" : "정보보호과",
    "software" : "소프트웨어과",
    "buisness" : "ceo",
    "design" : "콘텐츠디자인과"
}
export default {
    name:"register",
    data(){return{
        department_map
    }},
    setup() {
        
    },
    mounted(){
        if(this.$route.query.refresh !== undefined){
            this.$cookies.set("Refresh", this.$route.query.refresh)
            window.location.href = "/register"
            //this.$router.go()
        }
    },
    computed:{
        ...mapState(["userData"])
    },
    methods:{
        fillZero(width, str){
            return str.length >= width ? str:new Array(width-str.length+1).join('0')+str;//남는 길이만큼 0으로 채움
        }
    }
}
</script>

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
        height: min-content;
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

    button.register {
        width: 90%;

        color: #fff;
        
        border-radius: 8px;
        box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #4893ff;

        font-size: 20px;
        font-weight: 500;
        text-align: center;

        padding: 7px;
        margin: 28px auto;
    }


    @media (max-width : 700px) {
        .register_panel {
            margin : 100px 0;
        }

        .user_info_panel {
            grid-template-columns: 1fr;
        }

        .introduce{
            grid-column:1/2;
        }
    }
</style>