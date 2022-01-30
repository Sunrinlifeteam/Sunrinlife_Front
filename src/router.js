import { createWebHistory, createRouter } from "vue-router"

import HelloWorld from "./components/HelloWorld.vue"
const routes = [
    {
        path : "/login",
        component : HelloWorld
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router