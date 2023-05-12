import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from "./routes.js";
import {createRouter, createWebHistory} from "vue-router";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/vela-blue/theme.css";
import PrimeVue from "primevue/config";
import Button from 'primevue/button';
import InputText from "primevue/inputtext";
import Listbox from 'primevue/listbox';

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.component("Button",Button);
app.component("InputText",InputText);
app.component("Listbox",Listbox);
app.use(router);
app.use(PrimeVue);
app.mount('#app')
