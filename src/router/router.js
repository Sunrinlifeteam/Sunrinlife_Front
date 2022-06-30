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
import CommunityPostCreatePage from "@/views/CommunityPostCreatePage";
import CommunityPostDetailPage from "@/views/CommunityPostDetailPage";

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
        path:"/profile/:profileId",
        name: "otherProfile",
        component: ProfilePage
    },
    {
        path : "/club",
        name: "club",
        component : ClubPage,
        props: true
    },
    {
        path : "/community/public",
        component: { render: () => h(RouterView) },
        children: [
            { 
              path: '',
              name: 'publicCommunity',
              component : CommunityPage,
            },
            { 
              path: ':postId',
              name: 'publicCommunityPostDetail',
              component : CommunityPostDetailPage,
            },
            {
                path : "write",
                name: "publicCommunityWrite",
                component : CommunityPostCreatePage,
            },
        ],
    },
    {
        path : "/community/anonymous",
        component: { render: () => h(RouterView) },
        children: [
            { 
              path: '',
              name: 'anonymousCommunity',
              component : CommunityPage,
            },
            { 
              path: ':postId',
              name: 'anonymousCommunityPostDetail',
              component : CommunityPostDetailPage,
            },
            {
                path : "write",
                name: "anonymousCommunityWrite",
                component : CommunityPostCreatePage,
            },
            
        ],
    },
    {
        path : "/i_love_sunrin",
        name : "easterEgg",
        component : EasterEggPage,
    }
]

const router = createRouter({
    history : createWebHistory(process.env.PUBLIC_PATH),
    routes,
});

export default router