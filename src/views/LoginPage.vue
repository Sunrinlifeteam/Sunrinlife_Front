<template>
<div class="login">

    <div class="login-box">
        <img class="logo" src="./../assets/logo.svg" alt="선린 Life 로고">

        <input
            pattern="^[A-Za-z0-9._%+-]+@sunrint.hs.kr$"
            required
            :class="{'not-first-try' : notFirstTry}"
            type="email" placeholder="Email"
            v-model="inputEmail">
        <small class="erroe-msg" :class="{'none' : isEmailEmpty}">{{ emailErrorMsg }}</small>

        <input
            pattern="^[A-Za-z0-9._%+-]{6,12}$"
            required
            :class="{'not-first-try' : notFirstTry}"
            type="password" placeholder="Password"
            v-model="inputPassword">
        <small class="erroe-msg" :class="{'none' : isPwEmpty}">{{ passwordErrorMsg }}</small>

        <button @click="loginClick" class="login-btn">로그인</button>
        <span class="sign-up-goto">회원 가입</span>
    </div>

</div>
</template>
<script>
import { mapActions } from "vuex"

// import { SUNRIN_EMAIL_PATTERN } from "./../Model/pattern.js"

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
    }},
    methods : {
        ...mapActions(["login", "getToken"]),

        checkFromEmail(){
            if(this.inputEmail == ""){
                this.isEmailEmpty = true
                this.emailErrorMsg = "이메일을 입력하세요."
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
                this.isEmailEmpty = false
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
        min-width : 400px;

        padding : 32px;

        background-color: white;

        border-radius: 16px;

        box-shadow: 0px 0px 10px var(--gray5);

        display: inline-flex;
        flex-direction: column;
        text-align: center;
        gap: 5px;

        position: absolute;
        top : 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }

    .login .logo{
        width : 50%;
        margin : auto;
    }

    .login .login-box input {
        font-size: 20px;
        padding : 12px;

        border-radius: 0;
        border : 2px solid black;

        background-color: white;
    }

    .login .login-box input:valid{
        border : 2px solid var(--main-color2);
    }

    .login .login-box input.not-first-try:invalid {
        border : 2px solid red;
    }

    .login .erroe-msg {
        color : red;
        text-align: left;
        visibility: hidden;
    }

    .login .erroe-msg.none {
        visibility: visible;
    }

    .login .login-btn {
        font-size : 24px;
        padding : 20px;
        
        border-radius: 4px;
    }

    .login .sign-up-goto {
        text-align: right;
        cursor: pointer;
    }

    .login .sign-up-goto:valid{
        cursor: pointer;
    }

    @keyframes login-bg-animation {
        0% { background-color: var(--flat-red) }
        33% { background-color: var(--flat-yellow) }
        66% { background-color: var(--flat-green) }
        100% { background-color: var(--flat-blue) }
    }
</style>