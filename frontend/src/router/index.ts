import { createRouter, createWebHistory } from "vue-router";

// HomePage
import homePage from "@/homePage/homePage.vue";

//Navbar
import FooterLeistungen from "@/components/footer/FooterLeistungen.vue";
import FooterUberUns from "@/components/footer/FooterUberUns.vue";

// Button
import JetztButton from "@/components/JetztButton.vue";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: homePage,
            meta: {linkText:'Anasayfa'}
        },
        {
            path:'/impressum',
            name:'UberUns',
            component:FooterUberUns,
            meta: {linkText: ' NavUberUns'}
        },
        {
            path:'/datenschutz',
            name:'leistungen',
            component:FooterLeistungen,
            meta: {linkText: 'Leistungen'}
        },
        {
            path:'/anfrage',
            name:'JetztButton',
            component:JetztButton,
            meta: {linkText: ' JetztButton'}
        },
    ]
});

export default router;
