<template>
    <Header v-if="showGlobalComponent" />
    <Sidebar v-if="showGlobalComponent" />
    <router-view></router-view>
</template>

<script>
//import { mapActions } from 'vuex'

import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";

import {
    getAccessToken,
    getUserData,
    getMeal,
    getScheduleOfficial,
    getSchedulePersonal,
    getNoticeMain,
    getNoticePageCount,
    getClubMajor,
    getClubGeneral,
    getClubAutonomous,
} from "./api.js";
import store from "./store.js";

import { EXCEPT_SIDEBAR } from './store.js';

export default {
    name: "App",
    setup() {},
    data() {
        return {
            showGlobalComponent: true,
        };
    },
    components: {
        Header,
        Sidebar,
    },
    beforeCreate() {
        getAccessToken()
            .then(() => {
                setInterval(getAccessToken, 3600000);
            })
            .catch((e) => {
                if (
                    window.location.pathname.trim() != "/login" &&
                    e.response.status == 401
                )
                    this.$router.replace("/login");
            });
    },
    methods: {
        checkLogin() {
            getAccessToken().then((status) => {
                if (status === 401) this.$router.replace("/login");
                else setInterval(getAccessToken, 3600000);
            });
        },
        checkSidebar() {
            this.showGlobalComponent = true;
            if (EXCEPT_SIDEBAR.includes(this.$route.name)) {
                this.showGlobalComponent = false;
            }
        }
    },
    computed: {
        getAuthToken() {
            return this.$store.getters.getAuthToken;
        },
    },
    watch: {
        '$route'(){
            this.checkSidebar();
        },
        getAuthToken() {
            getUserData().then((data) => {
                store.commit("setUserData", data);
            });
            getNoticePageCount().then((data) => {
                store.commit("setNoticePageCount", data);
            });
            getMeal().then((res) => {
                store.commit("getMeal", res);
            });
            getScheduleOfficial().then((data) => {
                store.commit("getScheduleOfficial", data);
            });
            getSchedulePersonal().then((data) => {
                store.commit("setSchedulePersonal", data);
            });
            getNoticeMain().then((data) => {
                store.commit("getNoticeMain", data);
            });
            getClubMajor(0).then((data) => {
                store.commit("setClubData", { id: "security", data });
            });
            getClubMajor(1).then((data) => {
                store.commit("setClubData", { id: "software", data });
            });
            getClubMajor(2).then((data) => {
                store.commit("setClubData", { id: "buisness", data });
            });
            getClubMajor(3).then((data) => {
                store.commit("setClubData", { id: "design", data });
            });
            getClubGeneral().then((data) => {
                store.commit("setClubData", { id: "general", data });
            });
            getClubAutonomous().then((data) => {
                store.commit("setClubData", { id: "autonomous", data });
            });
        },
    },
    created() {
        this.checkSidebar();
    },
    mounted() {
        if (window.innerWidth <= 970) {
            this.$store.commit("setMobileUI");
            this.$store.commit("sidebarOff");
        } else {
            this.$store.commit("setDesktopUI");
            this.$store.commit("sidebarOn");
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth <= 970 && !this.$store.getters.isMobileWindow) {
                this.$store.commit("setMobileUI");
                this.$store.commit("sidebarOff");
            } else {
                this.$store.commit("setDesktopUI");
                this.$store.commit("sidebarOn");
            }
        });
    },
};
</script>

<style>
@import "./assets/style/style.css";
</style>
