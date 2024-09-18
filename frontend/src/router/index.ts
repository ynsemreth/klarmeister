import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/homePage/homePage.vue";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: homePage,
        },
    ]
});

export default router;
