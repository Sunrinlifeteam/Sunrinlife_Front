<template>
<router-view></router-view>
</template>

<script>
//import { mapActions } from 'vuex'

import {getAccessToken, getUserData, getScheduleOfficial, getSchedulePersonal} from "./api.js"
import { useCookies } from "vue3-cookies";
import store from "./store.js"

export default {
    
  name: 'App',
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    beforeCreate(){
        if(this.cookies.get("Refresh") !== null){
            getAccessToken()
            setInterval(getAccessToken, 3600000)
        }
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
            getScheduleOfficial().then((data)=>{
                store.commit("getScheduleOfficial", data)
            }),
            getSchedulePersonal().then((data) =>{
                store.commit("setSchedulePersonal", data)
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
