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
      <div class="js-banner w-full h-[168px] bg-center bg-cover p-3.5">
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
      </div>
      <div class="js-tanggal flex justify-between">
        <p>26 Rajab 1444h</p>
        <p>17 Februari 2023</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavQuranku from "@/components/Nav.vue";
export default {
  name: "JadwalSholat",
  components: {
    NavQuranku,
  },
};
</script>