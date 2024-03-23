<style scoped>
.js-banner {
  background-image: url("../assets/img/bg_jadwal_sholat.png");
}
</style>
<template>
  <div class="main">
    <!-- Bagian nav -->
    <NavQuranku />
    <!-- Bagian Jadwal -->
    <div class="jadwal-sholat px-6">
      <div class="js-info py-6">
        <h5 class="text-xs text-text_color_normal_1">
          Assalamu'alaikum, Zaenal
        </h5>
        <h2 class="text-xl text-text_color_bold_1 font-bold">
          Waktunya Sholat Isya
        </h2>
      </div>
      <div
        class="js-banner w-full h-[168px] bg-center bg-cover p-3.5 shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px] rounded-lg"
      >
        <div class="js-kota-qiblat flex justify-between">
          <div
            class="js-kota flex items-center bg-[#A6BB8D] rounded-md px-1.5 text-text_color_bold_1 font-medium gap-1 py-[2px]"
          >
            <i class="bi bi-geo-alt-fill text-xs"></i>
            <h5 class="text-xs">Jepara</h5>
          </div>
          <div
            class="js-qiblat flex items-center bg-[#A6BB8D] rounded-md px-1.5 text-text_color_bold_1 font-medium gap-1 py-[2px]"
          >
            <i class="bi bi-compass-fill text-xs"></i>
            <h5 class="text-xs">Qiblat</h5>
            <i class="bi bi-chevron-right text-xs"></i>
          </div>
        </div>
        <div class="js-waktu text-center text-text_color_2">
          <h1 class="text-4xl font-bold">19.15</h1>
          <h3 class="text-xl pb-1">isya</h3>
          <hr class="border-t-1 border-[#eae7b1] py-1" />
          <h4 class="text-base">Terlewat 5 Menit</h4>
        </div>
        <div class="js-tanggal flex justify-between text-xs text-text_color_2">
          <p>26 Rajab 1444h</p>
          <p>17 Februari 2023</p>
        </div>
      </div>
      <!-- bagian jadwal sholat lima waktu -->
      <div
        class="js-sholat grid sm:grid-cols-1 mt-9 md:grid-cols-2 gap-4 pb-14"
      >
        <div
          class="container relative w-full p-4 rounded-lg bg-gradient-to-r from-[#61876E] to-[#28433A] shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px]"
        >
          <div
            class="content-pencarian flex justify-between items-center text-text_color_2"
          >
            <div class="title-pencarian text-center font-semibold">
              <h2 class="text-xl">Subuh</h2>
            </div>
            <div class="des-pencarian flex item-center gap-2">
              <h2 class="text-xl">18.00</h2>
              <h2 class="text-xl"><i class="bi bi-clock"></i></h2>
            </div>
          </div>
        </div>
        <div
          class="container relative w-full p-4 rounded-lg bg-gradient-to-r from-[#61876E] to-[#28433A] shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px]"
        >
          <div
            class="content-pencarian flex justify-between items-center text-text_color_2"
          >
            <div class="title-pencarian text-center font-semibold">
              <h2 class="text-xl">Dzhuhur</h2>
            </div>
            <div class="des-pencarian flex item-center gap-2">
              <h2 class="text-xl">18.00</h2>
              <h2 class="text-xl"><i class="bi bi-clock"></i></h2>
            </div>
          </div>
        </div>
        <div
          class="container relative w-full p-4 rounded-lg bg-gradient-to-r from-[#61876E] to-[#28433A] shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px]"
        >
          <div
            class="content-pencarian flex justify-between items-center text-text_color_2"
          >
            <div class="title-pencarian text-center font-semibold">
              <h2 class="text-xl">Ashar</h2>
            </div>
            <div class="des-pencarian flex item-center gap-2">
              <h2 class="text-xl">18.00</h2>
              <h2 class="text-xl"><i class="bi bi-clock"></i></h2>
            </div>
          </div>
        </div>
        <div
          class="container relative w-full p-4 rounded-lg bg-gradient-to-r from-[#61876E] to-[#28433A] shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px]"
        >
          <div
            class="content-pencarian flex justify-between items-center text-text_color_2"
          >
            <div class="title-pencarian text-center font-semibold">
              <h2 class="text-xl">Maghrib</h2>
            </div>
            <div class="des-pencarian flex item-center gap-2">
              <h2 class="text-xl">18.00</h2>
              <h2 class="text-xl"><i class="bi bi-clock"></i></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createCircles } from "@/views/fungsi/app.js";
import NavQuranku from "@/components/Nav.vue";
export default {
  name: "JadwalSholat",
  components: {
    NavQuranku,
  },
  mounted() {
    createCircles(50);
  },
};
</script>