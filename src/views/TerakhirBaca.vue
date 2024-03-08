<style scoped>
.tb-banner {
  background-image: url("../assets/img/bg_terakhir_baca.png");
}
</style>
<template>
  <div class="main px-6">
    <div class="nav-terakhir-baca w-full flex justify-center relative mt-10">
      <!-- BAGIAN NAV TERAKHIR BACA -->
      <router-link to="/">
        <div class="tb-kembali">
          <h2 class="absolute left-0">
            <i class="bi bi-chevron-left text-text_color_bold_1 text-2xl"></i>
          </h2>
        </div>
      </router-link>
      <div class="tb-text">
        <h2 class="text-xl text-text_color_bold_1 font-bold">Terakhir Baca</h2>
      </div>
    </div>

    <!-- BAGIAN BANNER TERAKHIR BACA -->
    <div
      class="tb-banner w-full h-[220px] flex justify-center items-center p-10 mt-11 text-text_color_2 bg-cover bg-center rounded-lg text-center relative shadow-[rgba(97,_135,_110,_0.8)_0px_20px_45px_0px]"
    >
      <div class="banner">
        <div class="tb-download absolute top-5 right-5">
          <h2 class="text-2xl font-bold">
            <i class="bi bi-download round"></i>
          </h2>
        </div>
        <div class="tb-banner-utama">
          <h1 class="text-[28px] font-bold">Al-FATIHAH</h1>
          <p class="mb-2 text-xs">Pembuka</p>
          <hr class="border-t-1 border-[#eae7b1]" />
          <div
            class="banner-des flex justify-center gap-2 items-center mt-3 text-xs"
          >
            <p>Makkiyah</p>
            <p class="text-xl">.</p>
            <p>7 Ayat</p>
          </div>
        </div>
      </div>
    </div>

    <!-- BAGIAN SURAT -->
    <SuratAlquran />
  </div>
</template>

<script>
import SuratAlquran from "@/components/SuratAlquran.vue";
export default {
  name: "TerakhirBaca",
  components: {
    SuratAlquran,
  },
};
</script>