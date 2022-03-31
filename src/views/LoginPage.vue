<template>

<div class="login">
    <div class="login-box">
        <div class="logo">
            <img class="logo_symbol" src="../assets/symbol.svg">
            <img class="logo_text" src="../assets/logo.svg">
        </div>
        <button @click="loginClick" class="login-btn">학교 계정으로 로그인</button>
    </div>

</div>
</template>
<script>

import { mapActions } from "vuex"
//import axios from "axios"

export default {
    name : "Login",
    setup(){
    },
    data(){return{

    }},
    methods : {
        ...mapActions(["login", "getToken"]),

        loginClick(){

            window.location.href = `${process.env.VUE_APP_API_URL}/auth/google`;

            //this.login({ "email" : this.inputEmail, "password" : this.inputPassword})    
        }
    },
    mounted(){
        if (window.location.href.includes("/login/token")){
            this.$cookies.set("Refresh", this.$route.query.refresh)
            window.location.href = "/"
        }
    },
    watch : {
    }
}
</script>
<style scoped>
    .login {
        width : 100%;
        height : 100vh;

        background-image: url("/img/loginPageBg.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        overflow: hidden;

        position: relative;
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

    .login .login-bg {
        width : 100%;
        height : 100vh;
        opacity: 0.3;
    }

    .login .login-box {
        width : 80%;
        max-width: 600px;
        height:400px;
        padding : 50px;

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

    .login .logo{
        width : 70%;
        max-width : 350px;
        margin : auto;
    }

    .login .login-box label{
        text-align: left;
    }

    .login .login-box input {
        width : 100%;

        padding : 16px;

        font-size: 0.75em;

    }

    .login .login-box input:valid{
        border : 2px solid var(--main-color2);
    }

    .login .login-box input.not-first-try:invalid {
        border : 2px solid var(--flat-red);
    }

    .login .erroe-msg {
        font-size: 0.7em;

        color : var(--flat-red);
        visibility: hidden;

        margin : 0 12px;
    }

    .login .erroe-msg.none {
        visibility: visible;
    }


    .login .login-btn {
        height:60px;
        font-size: 20px;
        
        border-radius: 4px;
        background-color: #4893ff;
    }

    .login .sign-up-goto-wrap{
        text-align: right;
    }

    .login .sign-up-goto {
        font-size : 0.9em;

        text-align: right;
        cursor: pointer;
    }

    .login .sign-up-goto{
        cursor: pointer;
    }

    @keyframes login-bg-animation {
        0% { background-color: var(--flat-red) }
        33% { background-color: var(--flat-yellow) }
        66% { background-color: var(--flat-green) }
        100% { background-color: var(--flat-blue) }
    }

    @media (min-width : 750px) {
        .login .login-box {
            font-size : 24px;
        }
    }

</style>