import axios from "axios"
import store from "./store.js"

const getAPI = axios.create({
    withCredentials: true,
    baseURL: process.env.VUE_APP_API_URL,

})

export async function getAccessToken() {
    let accessToken = await getAPI.get("/auth/refresh").then((res) => res.data.accessToken).catch((e) => console.log(e))
    store.commit("changeAccessToken", accessToken)
    getAPI.defaults.headers.common['Authorization'] = accessToken
    return accessToken
}

export async function getUserData(){
    let userData = await getAPI.get("/auth/user/club").then((res) => res.data).catch((e) => console.log(e))
    console.log(userData)
    return userData
}

export async function logout(){
    store.commit("changeAccessToken", null)
    store.commit("setUserData", null)

    return await getAPI.delete("/auth").then(res => res.data).catch(console.log)
}

export async function getScheduleOfficial(){
    let schedule = await getAPI.get("/schedule/week").then((res) => res.data).catch((e) => console.log(e))
    return schedule
}

export async function getSchedulePersonal(){
    let schedule = await getAPI.get("/me/schedule").then((res) => res.data).catch((e) => console.log(e))
    return schedule
}

export async function addSchedulePersonal(value){
    let schedule = await getAPI.post("/me/schedule/write", value).then((res) => res.data).catch((e) => console.log(e))
    return schedule
}

export async function delSchedulePersonal(id){
    let res = await getAPI.delete(`/me/schedule/${id}`).then((res) => res.data).catch((e) => console.log(e))
    return res
}

export async function editSchedulePersonal(id, data){
    let res = await getAPI.put(`/me/schedule/${id}`, data).then((res) => res.data).catch((e) => console.log(e))
    return res
}

export async function editProfile(githubLink, image, description, clubInfo){
    let response = getAPI.put("/auth/user", {
        "githubLink":githubLink,
        "image": image,
        "description": description,
        "clubInfo":clubInfo
    }).then((res) => res.data).catch((e) => console.log(e))
    return response
}


// 동아리 API

// 전체 동아리 가져오기
export async function getClubAll(){
    let clubData = await getAPI.get("/club/all")
        .then((res) => {
            res.data
        })
        .catch(e => console.log(e))

    return clubData
}

// 학과별 전공동아리 가져오기
// 인자를 받아서 해당 학과의 전공 동아리를 가져옵니다.
export async function getClubMajor(dep){
    let clubData = await getAPI.get(`/club/department/${dep}/type/0`)
        .then(res => res.data)
        .catch(console.log)
        
    return clubData
    }
    
// 일반동아리 가져오기
export async function getClubGeneral() {
    let clubData = await getAPI.get(`/club/type/1`)
        .then(res => res.data)
        .catch(console.log)

    return clubData
}
    
// 자율동아리 가져오기
export async function getClubAutonomous() {
    let clubData = await getAPI.get(`/club/type/2`)
        .then(res => res.data)
        .catch(console.log)

    return clubData
}

//급식 API
export async function getMeal(){
    let response = await getAPI.get("http://neis-api.sunrin.in/meal").then((res) => res.data).catch((e) => console.log(e))
    return response
}

export async function getTodaySchedule(grade, cl){
    let res = await getAPI.get(`http://neis-api.sunrin.in/classSchedule/${grade}/${cl}`).then((res) => res.data).catch((e) => console.log(e))
    return res
}

//공지 API
export async function getNoticeMain(){
    let res = await getAPI.get("/notice").then((res) => res.data).catch((e) => console.log(e))
    return res
}

export async function getNotice(page){
    let res = await getAPI.get(`/notice?page=${page}&count=10`).then((res) => res.data).catch((e) => console.log(e))
    return res
}

export async function getNoticePageCount(){
    let res = await getAPI.get("/notice/count").then((res) => res.data).catch((e) => console.log(e))
    res = Math.ceil(res / 10)
    return res
}

export async function getNoticeById(noticeId) {
    let res = await getAPI.get(`/notice/${noticeId}`).then(res => res.data).catch(console.log)
    return res
}