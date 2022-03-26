import axios from "axios"
import store from "./store.js"

const getAPI = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000",

})

export async function getAccessToken() {
    let accessToken = await getAPI.get("/auth/refresh").then((res) => res.data.accessToken).catch((e) => console.log(e))
    store.commit("changeAccessToken", accessToken)
    getAPI.defaults.headers.common['Authorization'] = accessToken
    return accessToken
}

export async function getUserData(){
    let userData = await getAPI.get("/auth/user/club").then((res) => res.data).catch((e) => console.log(e))
    return userData
}

export async function getScheduleOfficial(){
    let schedule = await getAPI.get("/schedule/week").then((res) => res.data).catch((e) => console.log(e))
    return schedule
}

export async function getSchedulePersonal(){
    let schedule = await getAPI.get("/me/schedule").then((res) => res.data).catch((e) => console.log(e))
    return schedule
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

// 동아리 api

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