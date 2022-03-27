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
        isMobileWindow : true, // 현재 화면이 모바일 화면인지(970px 이하)

        navBarList,
        department_map,
        
    }
    },
    mutations :{
        // Auth
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

        // Sidebar
        sidebarOnOff(state){
            state.isSidebarShow = !state.isSidebarShow
        },
        sidebarOn(state){
            state.isSidebarShow = true
        },
        sidebarOff(state){
            state.isSidebarShow = false
        },

        // Mobile UI
        setMobileUI(state){
            state.isMobileWindow = true
        },
        setDesktopUI(state){
            state.isMobileWindow = false
        },
        changeMobileDesktopUI(state){
            state.isMobileWindow = !state.isMobileWindow
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