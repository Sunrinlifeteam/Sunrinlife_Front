import axios from "axios"
import store from "./store.js"

const getAPI = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL,

})

export async function getAccessToken() {
    return getAPI.get("/auth/refresh")
        .then((res) => {
            store.commit("changeAccessToken", res.data.accessToken)
            getAPI.defaults.headers.common['Authorization'] = res.data.accessToken
            return res.data.accessToken
        });
}

export async function getUserDataById(id){
    let userData = await getAPI.get(`/user/${id}/full`).then((res) => res.data).catch((e) => console.log(e))
    return userData
}

export async function getUserData(){
    let userData = await getAPI.get("/user/full").then((res) => res.data).catch((e) => console.log(e))
    return userData
}

export async function getUserDataAndCommit(){
    let userData = await getAPI.get("/user/full").then((res) => res.data).catch((e) => console.log(e))
    store.commit("setUserData", userData)
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
    let response = getAPI.put("/user", {
        "githubLink": githubLink,
        "image": image,
        "description": description,
        "clubInfo": clubInfo
    }).then((res) => res.data).catch((e) => console.log(e))
    return response
}

export async function editProfileData(data){
    let response = getAPI.put("/user", data)
        .then((res) => res.data)
        .catch((e) => console.log(e))
    return response
}


// 동아리 API

// 전체 동아리 가져오기
export async function getClubAll(){
    let clubData = await getAPI.get("/club/all")
        .then(res => 
            res.data
        )
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
    let response = await getAPI.get("https://neis.sunrin.net/meal").then((res) => res.data).catch((e) => console.log(e))
    return response
}

export async function getTodaySchedule(grade, cl){
    let res = await getAPI.get(`https://neis.sunrin.net/classSchedule/${grade}/${cl}`).then((res) => res.data).catch((e) => console.log(e))
    return res
}

//공지 API
export async function getNoticeMain(count = 3){
    let res = await getAPI.get(`/notice?count=${count}`).then((res) => res.data).catch((e) => console.log(e))
    return res
}

export async function getNotice(page){
    let res = await getAPI.get(`/notice?page=${page}&count=10`).then((res) => res.data).catch((e) => console.log(e))
    return res
}

export async function getNoticeSearch(page, search){
    let res = await getAPI.get(`/notice?page=${page}&count=10&search=${encodeURI(search)}`)
        .then((res) => res.data)
        .catch((e) => console.log(e))
    return res
}

export async function getNoticePageCountWithSearch(search){
    let res = await getAPI.get(`/notice/count?search=${encodeURI(search)}`).then((res) => res.data).catch((e) => console.log(e))
    res = Math.ceil(res / 10) || 1
    return res
}

export async function getNoticePageCount(){
    let res = await getAPI.get("/notice/count").then((res) => res.data).catch((e) => console.log(e))
    res = Math.ceil(res / 10) || 1
    return res
}

export async function getNoticeById(noticeId) {
    let res = await getAPI.get(`/notice/${noticeId}`).then(res => res.data).catch(console.log)
    return res
}

// 게시판
export async function getPublicBoardPageCount(){
    let res = await getAPI.get(`/board/named/count`)
    res = Math.ceil((res.data - 10) / 15) + 1 || 1
    return res
}

export async function getPublicHotBoardList(){
    return await getAPI.get("/board/named/top")
}

export async function getPublicBoardList(pageId = 0){
    let res = await getAPI.get(`/board/named?offset=${pageId?pageId === 1?10:10+(pageId-1)*15:0}&count=${pageId?15:10}&sort=DESC&orderType=created`)
    return res
}

export async function getPublicBoardDetail(id){
    return await getAPI.get(`/board/named/${id}`);
}

export async function writePublicBoard(title, content, attachments) {
    return await getAPI.post(`/board/named`, { title, content, attachments });
}

export async function isLikedPublicBoard(id) {
    return await getAPI.get(`/board/named/${id}/like`);
}

export async function likePublicBoard(id){
    return await getAPI.post(`/board/named/${id}/like`);
}

export async function getAnonymousBoardPageCount(){
    let res = await getAPI.get(`/board/anonymous/count`)
    res = Math.ceil((res.data - 10) / 15) + 1 || 1
    return res
}

export async function getAnonymousBoardList(pageId = 0){
    return await getAPI.get(`/board/anonymous?offset=${pageId?pageId === 1?10:10+(pageId-1)*15:0}&count=${pageId?15:10}&sort=DESC&orderType=created`)
}

export async function getAnonymousHotBoardList(){
    return await getAPI.get("/board/anonymous/top")
}

export async function getAnonymousBoardDetail(id){
    return await getAPI.get(`/board/anonymous/${id}`);
}

export async function writeAnonymousBoard(title, content, attachments){
    return await getAPI.post("/board/anonymous", {title, content, attachments})
}

export async function isLikedAnonymousBoard(id){
    return await getAPI.get(`/board/anonymous/${id}/like`)
}

export async function likeAnonymousBoard(id){
    return await getAPI.post(`/board/anonymous/${id}/like`)
}

export async function uploadSingleFile(file, mimetype){
    if (!file) throw new Error("No file");
    if (!mimetype) throw new Error("No mimetype");
    let formData = new FormData();
    formData.append("mimetype", mimetype);
    formData.append("file", file);
    return await getAPI.post("/upload", formData);
}
