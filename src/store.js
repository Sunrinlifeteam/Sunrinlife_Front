import { createStore } from "vuex"
import axios from "axios"

import navBarList from "./assets/navBarMenu.js"
axios.defaults.withCredentials = true;

const store = createStore({
    state(){ return {
        isLogin : false,
        userData : {},
        authToken : null,

        navBarList,
    }
    },
    mutations :{
        changeAccessToken(state, accessToken){
            state.authToken = accessToken
        },
        setUserData(state, userData){
            state.userData = userData
        }
    },
    actions : {
        getAccessToken_store(){
            
        }
    },
    computed:{
        
    },
    getters:{
        getAuthToken(state){
            return state.authToken
        }
    },
    watch:{
        
    }
})

export default store