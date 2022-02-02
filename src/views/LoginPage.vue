<template>
<div class="login">

    <div class="login-box">
        <h1>Sunrin Life</h1>
        {{ $store.state.isLogin }}
        <input type="email" placeholder="Email" v-model="inputEmail">
        <input type="password" placeholder="Password" v-model="inputPassword">
        <button @click="loginClick" class="login-btn">로그인</button>
        <span class="sign-up-goto">회원 가입</span>
    </div>

</div>
</template>
<script>
import { mapActions } from "vuex"

export default {
    name : "Login",
    data(){return{
        inputEmail : "",
        inputPassword : "",
    }},
    methods : {
        ...mapActions(["login", "getToken"]),

        loginClick(){
            this.login({ "email" : this.inputEmail, "password" : this.inputPassword})    
        }
    }
}
</script>
<style>
    .login {
        width : 100%;
        height : 100vh;

        animation-name : login-bg-animation;
        animation-duration: 10s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
    }

    .login .login-box {
        width : 80%;
        max-width: 700px;

        padding : 32px;

        background-color: white;

        display: inline-flex;
        flex-direction: column;
        text-align: center;

        position: absolute;
        top : 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }

    .login .login-box input {
        font-size: 20px;
        padding : 12px;

        background-color: white;
    }

    .login .login-btn {
        font-size : 24px;
        padding : 20px;
        
        border-radius: 4px;
    }

    .login .sign-up-goto {
        position: absolute;

        bottom : 0px;
        right : 0px;
    }

    @keyframes login-bg-animation {
        0% { background-color: var(--flat-red) }
        33% { background-color: var(--flat-yellow) }
        66% { background-color: var(--flat-green) }
        100% { background-color: var(--flat-blue) }
    }
</style>