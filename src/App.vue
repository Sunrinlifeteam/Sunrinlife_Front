<template>
<router-view></router-view>
</template>

<script>
//import { mapActions } from 'vuex'

import {getAccessToken, getUserData, getNoticePageCount, getNoticeMain, getMeal, getScheduleOfficial, getSchedulePersonal, getNotice} from "./api.js"
import store from "./store.js"

export default {
    
  name: 'App',
    setup() {
        
    },
    beforeCreate(){
        if(this.$cookies.get("Refresh") !== null){
            getAccessToken()
            setInterval(getAccessToken, 3600000)
        }//else if(!window.location.href.includes("/login/token")){
        //     this.$router.replace("/login")
        // }
    },
    methods:{
        
    },
    computed:{
        getAuthToken(){
            return this.$store.getters.getAuthToken
        }
    },
    watch:{
        getAuthToken(){
            getUserData().then((data) => {
                store.commit("setUserData", data)
            }),
            getNoticePageCount().then((data) => {
                store.commit("setNoticePageCount", data)
            }),
            getNoticeMain().then((data) => {
                store.commit("getNoticeMain", data)
            }),
            getMeal().then((res)=>{store.commit("getMeal", res)}),
            getScheduleOfficial().then((data)=>{
                store.commit("getScheduleOfficial", data)
            }),
            getSchedulePersonal().then((data) =>{
                store.commit("setSchedulePersonal", data)
            }),
            getNotice(1).then((data) =>{
                store.commit("getNotice", {id:1, data:data})
            })
        }
    },
    mounted() {
        if(window.innerWidth <= 970){
            this.$store.commit("setMobileUI")
        }
        else {
            this.$store.commit("setDesktopUI")
        }

        window.addEventListener("resize", ()=>{
            if(window.innerWidth <= 970){
                this.$store.commit("setMobileUI")
            }
            else {
                this.$store.commit("setDesktopUI")
            }
        })
    },
}
</script>

<style>
@import "./assets/style/style.css";
</style>
