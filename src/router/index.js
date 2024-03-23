import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TerakhirBaca from "../views/TerakhirBaca.vue";
import BacaQuran from "../views/BacaQuran.vue";
import QuranKu from "../views/Quran.vue";
import PencarianQuranku from "../views/Pencarian.vue";
import JadwalSholat from "../views/JadwalSholat.vue";
import TersimpanQuranku from "@/views/Tersimpan.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/Terakhir_baca",
    name: "terakhir_baca",
    component: TerakhirBaca,
    meta: {
      title: "Terakhir Baca",
    },
  },
  {
    path: "/baca_quran",
    name: "baca_quran",
    component: BacaQuran,
    meta: {
      title: "Baca Quran",
    },
  },
  {
    path: "/quran",
    name: "equran",
    component: QuranKu,
    meta: {
      title: "Quranku",
    },
  },
  {
    path: "/pencarian",
    name: "pencarian",
    component: PencarianQuranku,
    meta: {
      title: "Pencarian",
    },
  },
  {
    path: "/jadwal_sholat",
    name: "jadwal_sholat",
    component: JadwalSholat,
    meta: {
      title: "Jadwal Sholat",
    },
  },
  {
    path: "/tersimpan",
    name: "tersimpan",
    component: TersimpanQuranku,
    meta: {
      title: "Tersimpan",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
