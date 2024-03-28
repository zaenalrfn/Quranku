<template>
  <div class="main mt-96">
    <div class="surah-quranku" v-for="(surah, index) in dataSurah" :key="index">
      <div
        class="surah-quranku-nav w-full h-12 py-3.5 px-3.5 rounded-lg flex justify-between items-center mt-10 bg-[rgba(18,_25,_49,_0.05)]"
      >
        <div
          class="urut-surah-quranku w-5 h-5 p-3 bg-text_color_bold_1 rounded-full flex justify-center items-center"
        >
          <h2 class="text-white">{{ surah.ayah }}</h2>
        </div>
        <div class="surah-quranku-play-simpan flex gap-6">
          <h2 class="text-2xl" @click="toggleAudio">
            <i class="bi bi-play"></i>
          </h2>
          <audio
            class="audioSurah"
            ref="audioSurah"
            @ended="audioEnded"
            :src="surah.audio"
          ></audio>
          <h2 class="text-xl"><i class="bi bi-bookmark"></i></h2>
        </div>
      </div>
      <div class="surah-quranku-arab-arti">
        <h2 class="mb-4 text-right mt-3 text-4xl text-text_color_bold_1">
          {{ surah.arab }}
        </h2>
        <p class="text-text_color_bold_1 text-[16px] mb-4">
          {{ surah.text }}
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SurahQuranku",
  props: {
    dataSurah: {
      type: Object,
      required: true,
    },
  },
};
</script>