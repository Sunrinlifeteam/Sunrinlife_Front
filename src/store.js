import { createStore } from "vuex"
import navBarList from "./assets/navBarMenu.js"
export const department_map = {
    "security" : "정보보호과",
    "software" : "소프트웨어과",
    "buisness" : "ceo",
    "design" : "콘텐츠디자인과"
}

const store = createStore({
    state(){
        return {
            authToken: null,
            userData: null,

            todaySchedule: null,
            scheduleOfficial: null,
            schedulePersonal: null,

            noticeMain: null,
            notice: {},
            noticePage: {},
            noticePageCount: null,

            meal: null,

            clubData: [],

            isSidebarShow: true,
            isMobileWindow: true, // 현재 화면이 모바일 화면인지(970px 이하)

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
        getNoticeMain(state, notice){
            state.noticeMain = notice
        },
        getNotice(state, notice){
            state.notice[notice.id] = notice
        },
        getNoticePage(state, { page, ids }){
            state.noticePage[page] = ids
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

        // ClubPage
        setClubData(state, { id, data }) {
            state.clubData[id] = data;
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
        },
        getNoticePage(state){
            return state.noticePage
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