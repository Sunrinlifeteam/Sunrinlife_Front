import { createWebHistory, createRouter } from "vue-router"

import LoginPage from "./../views/LoginPage.vue"
import MainPage from "./../views/MainPage.vue"
import IntroducePage from "./../views/IntroducePage.vue"
import ProfilePage from './../views/profilePage.vue';

import easterEgg from "./../views/EasterEgg.vue"

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
    {
        path : "/easterEgg",
        component : easterEgg
    },
    {
        path : "/introduce",
        component : IntroducePage
    },
    {
        path : "/profile",
        component : ProfilePage,
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router