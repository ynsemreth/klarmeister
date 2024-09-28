import { createApp } from "vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import { createI18n } from 'vue-i18n';

import router from "@/router";

const i18n = createI18n({
    locale: 'de',
});

const app = createApp(App);

app.use(ElementPlus);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(router);
app.use(i18n);

app.mount("#app");

export { i18n };
