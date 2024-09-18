import { createApp } from "vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import { createI18n } from 'vue-i18n';

import router from "@/router";

import 'leaflet/dist/leaflet.css';

// i18n ayarı
const i18n = createI18n({
    locale: 'tr',
});

const app = createApp(App);

// Element Plus eklentisini kullan
app.use(ElementPlus);

// Element Plus ikonlarını global olarak kullan
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(router);
app.use(i18n);

app.mount("#app");

export { i18n };
