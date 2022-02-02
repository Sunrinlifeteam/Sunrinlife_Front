import { createWebHistory, createRouter } from "vue-router"

import LoginPage from "./../views/LoginPage.vue"
import MainPage from "./../views/MainPage.vue"

import store from "./../store.js"

const checkLogin = (to, from, next) => {
    console.log(store.state.isLogin);

    if(store.state.isLogin){
        return next()
    }   else{
        alert("로그인후 이용해주세요.")
        return next("/")
    }
}
checkLogin
const routes = [
    {
        path : "/",
        component : LoginPage,
    },
    {
        path : "/main",
        component : MainPage,
        // beforeEnter: checkLogin
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router