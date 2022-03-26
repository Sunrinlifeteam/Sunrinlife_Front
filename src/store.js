import { createStore } from "vuex"
import navBarList from "./assets/navBarMenu.js"
import {department_map} from "./assets/department.js"

const store = createStore({
    state(){ return {
        authToken : null,
        userData : null,
        scheduleOfficial:null,
        schedulePersonal:null,

        isSidebarShow : true,

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
        },
        getScheduleOfficial(state, scheduleOfficial){
            state.scheduleOfficial = scheduleOfficial
        },
        setSchedulePersonal(state, schedulePersonal){
            state.schedulePersonal = schedulePersonal
        },

        sidebarOnOff(state){
            state.isSidebarShow = !state.isSidebarShow
        },
        sidebarOn(state){
            state.isSidebarShow = true
        },
        sidebarOff(state){
            state.isSidebarShow = false
        },
    },
    actions : {
        editSchedulePersonal({commit}, schedule){
            commit("setSchedulePersonal", schedule)
        }
    },
    computed:{
        
    },
    getters:{
        getAuthToken(state){
            return state.authToken
        },
        getSchedulePersonal(state){
            return state.schedulePersonal
        }
    },
    watch:{
        
    }
})

export default store