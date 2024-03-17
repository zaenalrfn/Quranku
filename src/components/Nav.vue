<template>
  <div class="nav-terakhir-baca w-full flex justify-center mt-10 m-6 relative">
    <router-link to="/">
      <div class="tb-kembali">
        <h2 class="absolute left-0">
          <i class="bi bi-chevron-left text-text_color_bold_1 text-2xl"></i>
        </h2>
      </div>
    </router-link>
    <div class="tb-text ml-[-47px]">
      <h2 class="text-xl text-text_color_bold_1 font-bold">Terakhir Baca</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavQuranku",
};
</script>
