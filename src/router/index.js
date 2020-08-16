import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Animations from "../views/Animations.vue";
import ScrollPage from "../views/ScrollPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/animations",
    name: "Animations",
    component: Animations,
  },
  {
    path: "/scroll-animations",
    name: "ScrollPage",
    component: ScrollPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
