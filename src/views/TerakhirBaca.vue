<template>
  <div class="main px-6">
    <div class="bg-white fixed top-0 left-0 right-0">
      <!-- BAGIAN NAV TERAKHIR BACA -->
      <NavQuranku />
      <!-- BAGIAN BANNER TERAKHIR BACA -->
      <BannerQuran :infoSurat="infoSurah" />
    </div>

    <!-- BAGIAN SURAT -->
    <SurahQuranku :dataSurah="surahTerakhirBaca" />
  </div>
</template>

<script>
import SurahQuranku from "@/components/SurahQuranku.vue";
import NavQuranku from "@/components/Nav.vue";
import BannerQuran from "@/components/Banner.vue";

export default {
  name: "TerakhirBaca",
  components: {
    SurahQuranku,
    NavQuranku,
    BannerQuran,
  },
  data() {
    return {
      surahTerakhirBaca: [],
      infoSurah: [],
    };
  },
  mounted() {
    this.surahTerakhirBaca = JSON.parse(localStorage.getItem("DATA-SURAH"));
    this.infoSurah = JSON.parse(localStorage.getItem("INFO-SURAH"));
  },
};
</script>