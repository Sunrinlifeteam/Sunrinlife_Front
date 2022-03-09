import { createWebHistory, createRouter } from "vue-router"

import LoginPage from "./../views/LoginPage.vue"
import MainPage from "./../views/MainPage.vue"
import ProfilePage from './../views/profilePage.vue';
import ClubPage from "./../views/ClubPage.vue"
import NoticePage from "./../views/NoticePage.vue"

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
        component : LoginPage,
    },
    {
        path : "/",
        component : MainPage,
        // beforeEnter: checkLogin
    },
    {
        path : "/easterEgg",
        component : easterEgg
    },
    {
        path : "/notice",
        component : NoticePage
    },
    {
        path : "/profile",
        component : ProfilePage,
    },
    {
        path : "/club",
        component : ClubPage
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router