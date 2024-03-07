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
      <div
        class="terakhir-dibaca w bg-gradient-to-l from-[#3C6255] to-[#61876E] mt-8 h-[178px] rounded-lg text-text_color_2"
      >
        <h3 class="pt-[31px] mb-2 ml-3">Terakhir baca</h3>
        <h1 class="text-[1.75rem] mb-2 ml-3 font-bold text-text_color_2">
          Al-Fatihah
        </h1>
        <div class="ayat-juz mb-2 ml-3 flex gap-2">
          <p class="text-text_color_2">Ayat 1</p>
          <p class="text-text_color_2">Juz 1</p>
        </div>
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

