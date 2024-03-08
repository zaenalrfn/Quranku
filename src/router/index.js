import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TerakhirBaca from "../views/TerakhirBaca.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Terakhir_baca",
    name: "terakhir_baca",
    component: TerakhirBaca,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
