<style scoped>
.tb-banner {
  background-image: url("../assets/img/bg_terakhir_baca.png");
}
</style>
<template>
  <div class="main">
    <div
      class="tb-banner h-[220px] flex justify-center items-center p-10 mt-8 mx-6 text-text_color_2 bg-cover bg-center rounded-lg text-center shadow-[rgba(97,_135,_110,_0.8)_0px_15px_30px_0px] relative"
    >
      <div class="banner">
        <div class="tb-download absolute top-5 right-5">
          <h2 class="text-2xl font-bold">
            <i class="bi bi-download round"></i>
          </h2>
        </div>
        <div class="tb-banner-utama">
          <h1 class="text-[28px] font-bold">
            {{ infoSurat.name_id }}
          </h1>
          <p class="mb-2 text-xs">{{ infoSurat.translation_id }}</p>
          <hr class="border-t-1 border-[#eae7b1]" />
          <div
            class="banner-des flex justify-center gap-2 items-center mt-3 text-xs"
          >
            <p>{{ infoSurat.revelation_id }}</p>
            <p class="text-xl">.</p>
            <p>{{ infoSurat.number_of_verses }} Ayat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerQuran",
  props: {
    infoSurat: {
      type: Object,
      required: true,
    },
  },
};
</script>