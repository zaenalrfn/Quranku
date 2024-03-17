import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TerakhirBaca from "../views/TerakhirBaca.vue";
import BacaQuran from "../views/BacaQuran.vue";
import QuranKu from "../views/Quran.vue";

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
  {
    path: "/baca_quran",
    name: "baca_quran",
    component: BacaQuran,
  },
  {
    path: "/quran",
    name: "equran",
    component: QuranKu,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
