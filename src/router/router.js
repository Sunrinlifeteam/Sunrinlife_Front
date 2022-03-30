import { createWebHistory, createRouter } from "vue-router"

import LoginPage from "./../views/LoginPage.vue"
import Register from "./../views/RegisterPage.vue"
import MainPage from "./../views/MainPage.vue"
import ProfilePage from './../views/profilePage.vue';
import ClubPage from "./../views/ClubPage.vue"
import NoticePage from "./../views/NoticePage.vue"
import NoticeDetailPage from "./../views/NoticeDetailPage.vue"

const routes = [
    {
        path : "/login",
        name: "login",
        component : LoginPage,
    },
    {
        path: "/login/token",
        name: "token",
        component: LoginPage
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