<template>
  <div>
    <div class="main px-6 py-5">
      <!-- BAGIAN HEADER QURANKU -->
      <div class="header-page-utama flex justify-between">
        <div class="name-user">
          <p class="text-text_color_normal_1 font-medium text-xs">
            ٱلسَّلَامُ عَلَيْكُمْ
          </p>
          <h2 class="text-xl text-text_color_bold_1 font-bold">
            Zaenal Arifin
          </h2>
        </div>
        <div class="img-user">
          <img class="w-10 rounded-full" src="../assets/img/user.png" alt="" />
        </div>
      </div>

      <!-- BAGIAN COMPONENT TERAKHIR DIBACA -->
      <router-link to="/Terakhir_baca">
        <div
          class="terakhir-dibaca py-8 px-3 mt-8 w-full bg-cover bg-center rounded-lg text-text_color_2 shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px]"
        >
          <h3 class="text-base font-medium">Terakhir baca</h3>
          <h1 class="text-2xl font-bold text-text_color_2 pt-2 pb-4">
            Al-Fatihah
          </h1>
          <div class="ayat-juz flex gap-2">
            <p class="text-text_color_2 text-xs opacity-75">Ayat 1</p>
            <p class="text-text_color_2 text-xs opacity-75">Juz 1</p>
          </div>
        </div>
      </router-link>

      <!-- BAGIAN COMPONENT GRID CONTENT -->
      <div class="grid grid-cols-2 gap-4 mt-[22px]">
        <router-link to="/baca_quran">
          <div
            class="p-3 rounded-lg bg-gradient-to-b from-[#61876E] to-[#28433A] h-[227px] flex flex-col justify-between shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px]"
          >
            <div class="img-baca-guran mt-6">
              <img
                src="../assets/img/icon_baca_quran.png"
                class="w-28"
                alt=""
              />
            </div>
            <div class="text-baca-quran flex justify-between items-center">
              <h2 class="font-bold text-xl text-text_color_2">
                <span class="font-medium text-base opacity-95">Baca</span
                ><br />Quran
              </h2>
              <i class="bi bi-chevron-right text-text_color_2"></i>
            </div>
          </div>
        </router-link>
        <router-link to="/pencarian">
          <div
            class="p-3 bg-gradient-to-b from-[#61876E] to-[#28433A] rounded-lg h-[190px] flex flex-col justify-between shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px]"
          >
            <div class="img-baca-guran mt-6">
              <img src="../assets/img/icon_pencarian.png" class="w-20" alt="" />
            </div>
            <div class="text-baca-quran flex justify-between items-center">
              <h2 class="font-bold text-xl text-text_color_2">Pencarian</h2>
              <i class="bi bi-chevron-right text-text_color_2"></i>
            </div>
          </div>
        </router-link>
        <router-link to="/jadwal_sholat">
          <div
            class="p-3 rounded-lg bg-gradient-to-b from-[#61876E] to-[#28433A] h-[190px] flex flex-col justify-between shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px]"
          >
            <div class="img-baca-guran">
              <img src="../assets/img/icon_sholat.png" class="w-24" alt="" />
            </div>
            <div class="text-baca-quran flex justify-between items-center">
              <h2 class="font-bold text-xl text-text_color_2">
                <span class="font-medium text-base opacity-95">Jadwal</span
                ><br />sholat
              </h2>
              <i class="bi bi-chevron-right text-text_color_2"></i>
            </div>
          </div>
        </router-link>
        <router-link to="/tersimpan">
          <div
            class="p-3 rounded-lg bg-gradient-to-b from-[#61876E] to-[#28433A] h-[227px] mt-[-35px] flex flex-col justify-between shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px]"
          >
            <div class="img-baca-guran mt-6">
              <img src="../assets/img/icon_simpan.png" class="w-20" alt="" />
            </div>
            <div class="text-baca-quran flex justify-between items-center">
              <h2 class="font-bold text-xl text-text_color_2">Tersimpan</h2>
              <i class="bi bi-chevron-right text-text_color_2"></i>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageUtama",
  props: {
    msg: String,
  },
};
</script>

<style>
.terakhir-dibaca {
  background-image: url("../assets/img/bg_terakhir_baca_utama.png");
}
</style>

