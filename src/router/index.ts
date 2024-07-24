// index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/Home.vue";
import AboutPage from "../views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
