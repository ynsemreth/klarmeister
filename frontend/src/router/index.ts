import { createRouter, createWebHistory } from "vue-router";

// HomePage
import homePage from "@/homePage/homePage.vue";

// Footer
import KlarImpressum from "@/components/footer/KlarImpressum.vue";
import KlarUber from "@/components/footer/KlarUber.vue";
import KlarKontakt from "@/components/footer/KlarKontakt.vue";

//Navbar
import NavLeistungen from "@/components/navbar/NavLeistungen.vue";
import NavUberUns from "@/components/navbar/NavUberUns.vue";

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
            path:'/uberuns',
            name:'UberUns',
            component:NavUberUns,
            meta: {linkText: ' NavUberUns'}
        },
        {
            path:'/leistungen',
            name:'leistungen',
            component:NavLeistungen,
            meta: {linkText: 'Leistungen'}
        },
        {
            path:'/anfrage',
            name:'JetztButton',
            component:JetztButton,
            meta: {linkText: ' JetztButton'}
        },
        {
            path: '/impressum',
            name: 'Impressum',
            component: KlarImpressum,
            meta: {linkText:'Impressum'},
        },
        {
            path:'/kontakt',
            name:'Kontakt',
            component:KlarKontakt,
            meta: {linkText: ' Kontakt'}
        },
        {
            path:'/über',
            name:'Über Klarmeister',
            component:KlarUber,
            meta: {linkText: 'Über'}
        },
    ]
});

export default router;
