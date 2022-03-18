import { createStore } from "vuex"
import axios from "axios"

import navBarList from "./assets/navBarMenu.js"
import {department_map} from "./assets/department.js"
axios.defaults.withCredentials = true;

const store = createStore({
    state(){ return {
        userData : null,
        authToken : null,

        navBarList,
        department_map
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