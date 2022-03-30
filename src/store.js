import { createStore } from "vuex"
import navBarList from "./assets/navBarMenu.js"
export const department_map = {
    "security" : "정보보호과",
    "software" : "소프트웨어과",
    "buisness" : "ceo",
    "design" : "콘텐츠디자인과"
}

const store = createStore({
    state(){ return {
        authToken : null,
        userData : null,
        scheduleOfficial:null,
        schedulePersonal:null,
        noticeMain:null,
        notice:{},
        noticePageCount:null,
        meal:null,
        todaySchedule:null,

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
        getNoticeMain(state, notice){
            state.noticeMain = notice
        },
        getNotice(state, notice){
            state.notice[`${notice.id}`] = notice.data
        },
        setNoticePageCount(state, count){
            state.noticePageCount = count
        },
        getMeal(state, meal){
            state.meal = meal
        },
        getTodaySchedule(state, todaySchedule){
            state.todaySchedule = todaySchedule
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
        },
        getNoticePageCount(state){
            return state.noticePageCount
        },
        getUserData(state){
            return state.userData
        }
    },
    watch:{
        
    }
})

export default store