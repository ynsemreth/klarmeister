import { createRouter, createWebHistory } from "vue-router";

// HomePage
import homePage from "@/homePage/homePage.vue";

// Footer
import KlarImpressum from "@/components/footer/KlarImpressum.vue";
import KlarUber from "@/components/footer/KlarUber.vue";
import KlarKontakt from "@/components/footer/KlarKontakt.vue";

//Navbar
import UnserPortfolio from "@/components/navbar/UnserPortfolio.vue";
import SoArbeiten from "@/components/navbar/SoArbeiten.vue";
import KundensTimmen from "@/components/navbar/KundensTimmen.vue";
import TeamKarriere from "@/components/navbar/TeamKarriere.vue";
import KlarMeister from "@/components/navbar/KlarMeister.vue";

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
            path: '/impressum',
            name: 'Impressum',
            component: KlarImpressum,
            meta: {linkText:'Impressum'},
        },
        {
            path:'/über',
            name:'Über Klarmeister',
            component:KlarUber,
            meta: {linkText: 'Über'}
        },
        {
            path:'/kontakt',
            name:'Kontakt',
            component:KlarKontakt,
            meta: {linkText: ' Kontakt'}
        },
        {
            path:'/portfolio',
            name:'Portfolio',
            component:UnserPortfolio,
            meta: {linkText: ' Unser Portfolio'}
        },
        {
            path:'/arbeiten',
            name:'Arbeiten',
            component:SoArbeiten,
            meta: {linkText: ' SoArbeiten'}
        },
        {
            path:'/kundenstimmen',
            name:'KundensTimmen',
            component:KundensTimmen,
            meta: {linkText: ' KundensTimmen'}
        },
        {
            path:'/team',
            name:'TeamKarriere',
            component:TeamKarriere,
            meta: {linkText: ' TeamKarriere'}
        },
        {
            path:'/klarmeister',
            name:'KlarmeIster',
            component:KlarMeister,
            meta: {linkText: ' KlarMeister'}
        }
    ]
});

export default router;
