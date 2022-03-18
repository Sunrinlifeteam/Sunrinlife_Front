import { createWebHistory, createRouter } from "vue-router"

import LoginPage from "./../views/LoginPage.vue"
import Register from "./../views/RegisterPage.vue"
import MainPage from "./../views/MainPage.vue"
import ProfilePage from './../views/profilePage.vue';
import ClubPage from "./../views/ClubPage.vue"
import NoticePage from "./../views/NoticePage.vue"
import NoticeDetailPage from "./../views/NoticeDetailPage.vue"

import easterEgg from "./../views/EasterEgg.vue"

import store from "./../store.js"

const checkLogin = (to, from, next) => {
    console.log(store.state.isLogin);

    if(store.state.isLogin){
        return next()
    }   else{
        alert("로그인후 이용해주세요.")
        return next("/login")
    }
}
checkLogin
const routes = [
    {
        path : "/login",
        name: "login",
        component : LoginPage,
    },
    {
        path : "/register",
        name: "register",
        component : Register,
    },
    {
        path : "/",
        name: "main",
        component : MainPage,
        // beforeEnter: checkLogin
    },
    {
        path : "/easterEgg",
        component : easterEgg
    },
    {
        path : "/notice",
        name: "notice",
        component : NoticePage,
    },
    {
        path : "/notice/:noticeId",
        name: "noticeId",
        component : NoticeDetailPage,
    },
    {
        path : "/profile",
        name: "profile",
        component : ProfilePage,
    },
    {
        path : "/club",
        name: "club",
        component : ClubPage,
        props: true
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router