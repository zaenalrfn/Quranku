<style scoped>
.circle {
  position: absolute;
  border-radius: 50%;
}
</style>
<template>
  <div class="main">
    <!-- Bagian Nav -->
    <NavQuranku />
    <!-- Bagian search surah  -->
    <div class="search px-6">
      <div class="relative mt-2 rounded-md shadow-sm">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <span class="text-[#ABBFB9] sm:text-sm"
            ><i class="bi bi-search"></i
          ></span>
        </div>
        <input
          type="text"
          name="SEARCH"
          class="block w-full rounded-xl border-0 py-1.5 pl-10 pr-20 bg-[#F3F4F5] text-[#ABBFB9] placeholder:text-[#ABBFB9] focus:ring-[#ABBFB9] sm:text-sm sm:leading-6"
          placeholder="Ketik nama surah"
        />
      </div>
      <!-- bagian surah -->
      <div
        class="container relative w-full p-4 mt-6 rounded-lg bg-gradient-to-r from-[#61876E] to-[#28433A] shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px]"
      >
        <div
          class="content-pencarian flex justify-between items-center text-text_color_2"
        >
          <div class="title-pencarian text-center font-semibold">
            <h2 class="text-xl">AL-Fatihah</h2>
            <p class="arti-pencarian text-xs">Pembuka</p>
          </div>
          <div class="des-pencarian flex text-xs gap-2">
            <p>Makkiyah</p>
            <p>.</p>
            <p>7 ayat</p>
          </div>
        </div>
      </div>
      <div
        class="container relative w-full p-4 mt-6 rounded-lg bg-gradient-to-r from-[#61876E] to-[#28433A] shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px]"
      >
        <div
          class="content-pencarian flex justify-between items-center text-text_color_2"
        >
          <div class="title-pencarian text-center font-semibold">
            <h2 class="text-xl">AL-Fatihah</h2>
            <p class="arti-pencarian text-xs">Pembuka</p>
          </div>
          <div class="des-pencarian flex text-xs gap-2">
            <p>Makkiyah</p>
            <p>.</p>
            <p>7 ayat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavQuranku from "@/components/Nav.vue";
import { createCircles } from "@/views/fungsi/app.js";

export default {
  name: "PencarianQuranku",
  components: {
    NavQuranku,
  },
  mounted() {
    createCircles(50);
  },
};
</script> 




@/views/fungsi/app.js