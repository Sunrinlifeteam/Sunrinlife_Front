<template>
<div class="login">
    <h1>Sunrin Life</h1>
    <form action="">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button class="login-btn">로그인</button>
    </form>
    <div class="sign-up-wrap">
        <span class="sign-up-goto">회원 가입</span>
    </div>

</div>
</template>
<script>
export default {
    name : "Login"
}
</script>
<style>
    .login {
        width : 100%; height : 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        animation-name: login-bg-animation;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    .login form{
        width : 70%;

        margin-top : 12px;

        display: flex;
        flex-direction: column;
    }

    .login input{
        margin : 4px 0;
        padding: 12px;
    }

    .login .login-btn {
        font-size: 1.25em;

        margin: 8px 0;
        padding : 12px;
    }

    .login .sign-up-wrap {
        width : 70%;
        display: flex;
        justify-content: right;
    }

    @media (max-width : 900px) {
        .login form, .login .sign-up-wrap{
            width : 90%;
        }
    }

    @keyframes login-bg-animation {
        0% { background-color: rgb(255, 216, 174); }
        33% { background-color: rgb(255, 252, 174); }
        66% { background-color: rgb(231, 255, 174); }
        100% { background-color: rgb(174, 223, 255); }
    }
</style>