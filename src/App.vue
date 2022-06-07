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
    getTodaySchedule
} from "./api.js";
import store from "./store.js";

import { EXCEPT_SIDEBAR } from './store.js';

export default {
    name: "App",
    setup() {},
    data() {
        return {
            showGlobalComponent: true,
            userData:null
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
            .catch(() => {
                if (
                    window.location.pathname.trim() != "/login"
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
                getTodaySchedule(data.grade, data.class).then((data) => {
                    this.$store.commit("getTodaySchedule", data)
                })
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
            if (window.innerWidth <= 970) {
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

#app {
    display: grid;
    grid-template-rows: auto 1fr;
}
</style>
