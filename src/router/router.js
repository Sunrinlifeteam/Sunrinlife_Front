import { createWebHistory, createRouter, RouterView } from "vue-router"
import { h } from 'vue'

import LoginPage from "@/views/LoginPage.vue"
import Register from "@/views/RegisterPage.vue"
import MainPage from "@/views/MainPage_v2.vue"
import ProfilePage from '@/views/ProfilePage.vue';
import ClubPage from "@/views/ClubPage.vue"
import NoticePage from "@/views/NoticePage.vue"
import NoticeDetailPage from "@/views/NoticeDetailPage.vue"
import CommunityPage from "@/views/CommunityPage.vue"

import EasterEggPage from "@/views/EasterEggPage.vue"
import PostCreatePage from "@/views/PostCreatePage";
import PostDetailPage from "@/views/PostDetailPage";

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
    },
    {
        path : "/notice",
        component: { render: () => h(RouterView) },
        children: [
            { 
              path: '',
              name: 'notice',
              component : NoticePage,
            },
            { 
              path: ':noticeId',
              name: 'noticeId',
              component : NoticeDetailPage,
            }
        ],
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
    {
        path : "/community/public",
        name: "publicCommunity",
        component : CommunityPage,
        props: true
    },
    {
        path : "/community/anonymous",
        name: "anonymousCommunity",
        component : CommunityPage,
        props: true
    },
    {
        path : "/postCreate",
        name: "postCreate",
        component : PostCreatePage,
        props: true
    },
    {
        path : "/community/public/:postId",
        name: "publicPostDetail",
        component : PostDetailPage,
        props: true
    },
    {
        path : "/community/anonymous/:postId",
        name: "publicPostDetail",
        component : PostDetailPage,
        props: true
    },
    {
        path : "/i_love_sunrin",
        name : "easterEgg",
        component : EasterEggPage,
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router