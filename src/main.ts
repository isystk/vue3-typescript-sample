import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import routes from 'pages-generated'
import './styles/app.scss'
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);
const vuetify = createVuetify({ components, directives });
app.use(router);
app.use(vuetify);
app.mount("#app");
