<template>

<div class="login">
    <!-- <img src="./../assets/sunrin.jpg" alt="배경" class="login-bg"> -->
    <div class="login-box">
        <button @click="loginClick" class="login-btn">학교 계정으로 로그인</button>
    </div>

</div>
</template>
<script>

import { mapActions } from "vuex"
import axios from "axios"

export default {
    name : "Login",
    data(){return{

        easterEggClickCount : 0,
    }},
    methods : {
        ...mapActions(["login", "getToken"]),

        loginClick(){

            axios.get("http://devapi.sunrint.life/auth/google/callback").then((res) => {
                console.log(res)
            }).catch((e)=>{
                console.log(e)
            })

            //this.login({ "email" : this.inputEmail, "password" : this.inputPassword})    
        }
    },
    watch : {

        easterEggClickCount(it){
            console.log(it);
            if(it == 10){
                this.$router.push('easterEgg')
            }
        }
    }
}
</script>
<style>
    .login {
        width : 100%;
        height : 100vh;

        /* animation: login-bg-animation 10s infinite reverse; */
    }

    /* .login::before {
        content: "";
        background: url(./../assets/sunrin.jpg);
        background-size: cover;
        background-position: center;
        opacity: 0.5;

        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    } */

    .login .login-bg {
        width : 100%;
        height : 100vh;
        opacity: 0.3;
    }

    .login .login-box {
        width : 80%;
        max-width: 700px;

        padding : 20px;

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

        border : 1px solid var(--gray5);

        background-color: var(--gray3);
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
        padding : 20px;

        font-size: 1em;
        
        border-radius: 4px;
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