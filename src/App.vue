<template>
    <router-view></router-view>
</template>

<script>
//import { mapActions } from 'vuex'

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

export default {
    name: "App",
    setup() {},
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
    },
    computed: {
        getAuthToken() {
            return this.$store.getters.getAuthToken;
        },
    },
    watch: {
        getAuthToken() {
            getUserData().then((data) => {
                store.commit("setUserData", data);
            }),
                getNoticePageCount().then((data) => {
                    store.commit("setNoticePageCount", data);
                }),
                getMeal().then((res) => {
                    store.commit("getMeal", res);
                }),
                getScheduleOfficial().then((data) => {
                    store.commit("getScheduleOfficial", data);
                }),
                getSchedulePersonal().then((data) => {
                    store.commit("setSchedulePersonal", data);
                }),
                getNoticeMain().then((data) => {
                    store.commit("getNoticeMain", data);
                }),
                getClubMajor(0).then((data) => {
					store.commit("setClubData", { id: "security", data });
                }),
                getClubMajor(1).then((data) => {
					store.commit("setClubData", { id: "software", data });
                }),
                getClubMajor(2).then((data) => {
					store.commit("setClubData", { id: "ceo", data });
                }),
                getClubMajor(3).then((data) => {
					store.commit("setClubData", { id: "design", data });
                }),
                getClubGeneral().then((data) => {
					store.commit("setClubData", { id: "general", data });
                }),
                getClubAutonomous().then((data) => {
					store.commit("setClubData", { id: "autonomous", data });
                })
        },
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
            if (window.innerWidth <= 970 && !this.store.state.isMobileWindow) {
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
