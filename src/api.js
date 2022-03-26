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

export async function getMeal(){
    let response = getAPI.get("/meal").then((res) => res.data).catch((e) => console.log(e))
    return response
}

export async function getNotice(){
    let res = getAPI.get("/notice/intranet/list?page=1").then((res) => res.data).catch((e) => console.log(e))
    return res
}