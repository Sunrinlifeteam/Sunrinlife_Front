<template>
<router-view></router-view>
</template>

<script>
//import { mapActions } from 'vuex'

import {getAccessToken} from "./api.js"
import { useCookies } from "vue3-cookies";
import { getUserData } from "./api.js";
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
            })
        }
    }
}
</script>

<style>
@import "./assets/style/style.css";
</style>
