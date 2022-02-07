<template>
<div class="login">
    <div class="login-box">
        <img
            @click="easterEggClickCount++"
            class="logo" src="./../assets/logo.svg" alt="선린 Life 로고">

        
        <label>
            <input
                pattern="^[A-Za-z0-9._%+-]+@sunrint.hs.kr$"
                required
                :class="{'not-first-try' : notFirstTry}"
                type="email" placeholder="Email"
                v-model="inputEmail">
            <small class="erroe-msg" :class="{'none' : notFirstTry && isEmailEmpty}">{{ emailErrorMsg }}</small>
        </label>


        <label>
            <input
                pattern="^[A-Za-z0-9._%+-~`!@]{6,12}$"
                required
                :class="{'not-first-try' : notFirstTry}"
                type="password" placeholder="Password"
                v-model="inputPassword">
            <small class="erroe-msg" :class="{'none' : notFirstTry && isPwEmpty}">{{ passwordErrorMsg }}</small>
        </label>

        <button @click="loginClick" class="login-btn">로그인</button>

        <div class="sign-up-goto-wrap">
            <span class="sign-up-goto">회원 가입</span>
        </div>
    </div>

</div>
</template>
<script>
import { mapActions } from "vuex"

import { SUNRIN_EMAIL_PATTERN } from "./../Model/pattern.js"

export default {
    name : "Login",
    data(){return{
        inputEmail : "",
        inputPassword : "",

        isEmailEmpty : false,
        isPwEmpty : false,

        emailErrorMsg : "이메일을 입력하세요.",
        passwordErrorMsg : "비밀번호를 입력하세요.",

        notFirstTry : false,

        easterEggClickCount : 0,
    }},
    methods : {
        ...mapActions(["login", "getToken"]),

        checkFromEmail(){
            if(this.inputEmail == ""){
                this.isEmailEmpty = true
                this.emailErrorMsg = "이메일을 입력하세요."
            }
            else if(!SUNRIN_EMAIL_PATTERN.test(this.inputEmail)){
                this.isEmailEmpty = true
                this.emailErrorMsg = "이메일의 형식이 맞지 않습니다."
            }
            else {
                this.isEmailEmpty = false
            }
        },

        checkFromPassword(){
            if(this.inputPassword == ""){
                this.isPwEmpty = true
                this.passwordErrorMsg = "비밀번호를 입력하세요."
            }
            else if(this.inputPassword.length < 6){
                this.isPwEmpty = true
                this.passwordErrorMsg = "입력한 비밀번호가 너무 짧습니다."
            }
            else {
                this.isPwEmpty = false
            }
        },

        loginClick(){
            this.checkFromEmail()
            this.checkFromPassword()

            if( this.isEmailEmpty || this.isPwEmpty ){
                this.notFirstTry = true
                return
            }

            this.$router.push('main')

            //this.login({ "email" : this.inputEmail, "password" : this.inputPassword})    
        }
    },
    watch : {
        inputEmail(){
            this.checkFromEmail()
        },
        inputPassword(){
            this.checkFromPassword()
        },

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