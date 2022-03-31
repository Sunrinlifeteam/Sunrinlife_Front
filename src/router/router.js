import { createWebHistory, createRouter } from "vue-router"
import { getUserData } from "./../api.js"

import LoginPage from "./../views/LoginPage.vue"
import Register from "./../views/RegisterPage.vue"
import MainPage from "./../views/MainPage.vue"
import ProfilePage from './../views/profilePage.vue';
import ClubPage from "./../views/ClubPage.vue"
import NoticePage from "./../views/NoticePage.vue"
import NoticeDetailPage from "./../views/NoticeDetailPage.vue"

import EasterEggPage from "./../views/EasterEggPage.vue"

const requireAuth = () => (from, to, next) => {
    if (getUserData() == null){
        return next('/login')
    }
    return next()
}

const routes = [
    {
        path : "/login",
        name: "login",
        component : LoginPage,
    },
    {
        path: "/login/token",
        name: "token",
        component: LoginPage,
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
        beforeEnter: requireAuth(),
    },
    {
        path : "/notice",
        name: "notice",
        component : NoticePage,
        beforeEnter: requireAuth(),
    },
    {
        path : "/notice/:noticeId",
        name: "noticeId",
        component : NoticeDetailPage,
        beforeEnter: requireAuth(),
    },
    {
        path : "/profile",
        name: "profile",
        component : ProfilePage,
        beforeEnter: requireAuth(),
    },
    {
        path : "/club",
        name: "club",
        component : ClubPage,
        beforeEnter: requireAuth(),
        props: true
    },

    {
        path : "/i_love_sunrin",
        name : "easterEgg",
        component : EasterEggPage,
        beforeEnter: requireAuth(),
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router