<template>
  <div class="main px-6">
    <div class="bg-white fixed top-0 left-0 right-0">
      <!-- bagian Nav -->
      <NavQuranku />
      <!-- Bagian banner -->
      <BannerQuran />
    </div>
    <!-- BAGIAN SURAT -->
    <SurahQuranku />
  </div>
</template>

<script>
import BannerQuran from "@/components/Banner.vue";
import NavQuranku from "@/components/Nav.vue";
import SurahQuranku from "@/components/SurahQuranku.vue";
export default {
  name: "QuranKu",
  components: {
    BannerQuran,
    NavQuranku,
    SurahQuranku,
  },
};
</script>