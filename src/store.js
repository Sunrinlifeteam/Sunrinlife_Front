import { createStore } from "vuex"
import axios from "axios"

import navBarList from "./assets/navBarMenu.js"
import {department_map} from "./assets/department.js"
axios.defaults.withCredentials = true;

const store = createStore({
    state(){ return {
        authToken : null,
        // userData : null,
        userData : {
            id: "qwer1234",
            email: "email@sunrint.hs.kr",
            username: "박희찬",
            department: "소프트웨어과",
            grade: 1,
            class: 4,
            number: 13,
            accountType: 0,
            clubInfo : "EDCAN",
            githubLink : "github.com/ckstmznf",
            description : "대충 소개글 대충 소개글 대충 소개글 대충 소개글 대충 소개글 "
        },
        // 테스트로 임시로 넣어둔 유저 데이터

        navBarList,
        department_map,
        
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