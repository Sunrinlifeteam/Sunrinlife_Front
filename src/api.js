import axios from "axios"
import store from "./store.js"

const getAPI = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000",

})

export async function getAccessToken() {
    let accessToken = await getAPI.get("/auth/refresh").then((res) => res.data.accessToken).catch((e) => console.log(e))
    store.commit("changeAccessToken", accessToken)
    console.log(store.getters.getAuthToken)
    return accessToken
}

export async function getUserData(){
    let userData = await getAPI.get("/auth/user", {
        headers:{
            Authorization:store.getters.getAuthToken
        }
    }).then((res) => res.data).catch((e) => console.log(e))
    return userData
}