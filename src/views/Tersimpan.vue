<template>
  <div class="main">
    <!-- bagian nav -->
    <NavQuranku />

    <!-- Bagian tersimpan surah dan ayat -->
    <div class="flex fixed top-0 left-0 right-0 flex-wrap px-6 mt-20">
      <div class="w-full">
        <!-- BAGIAN TABS -->
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="font-medium px-5 py-3 block leading-normal text-[16px]"
              v-on:click="toggleTabs(1)"
              v-bind:class="{
                ' bg-white text-text_color_bold_1': openTab !== 1,
                'text-text_color_2 bg-text_color_bold_1 rounded-lg':
                  openTab === 1,
              }"
            >
              Surah
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-[16px] font-medium px-5 py-3 block leading-normal"
              v-on:click="toggleTabs(2)"
              v-bind:class="{
                ' bg-white text-text_color_bold_1': openTab !== 2,
                'text-text_color_2 bg-text_color_bold_1 rounded-lg':
                  openTab === 2,
              }"
            >
              Ayat
            </a>
          </li>
        </ul>
        <!-- BAGIAN SURAH Dan Juz -->
        <div class="flex flex-col min-w-0 break-words bg-white">
          <div class="flex-auto">
            <div class="tab-content tab-space">
              <!-- Surah -->
              <div
                v-bind:class="{
                  hidden: openTab !== 1,
                  block: openTab === 1,
                }"
              >
                <router-link to="/quran">
                  <div
                    class="surah flex justify-between items-center border-b-2 py-4"
                  >
                    <div class="indo-surah flex gap-4 items-center">
                      <div class="no-surah text-text_color_bold_1 font-bold">
                        1
                      </div>
                      <div class="nama-surah">
                        <h1 class="text-lg font-bold text-text_color_bold_1">
                          Al-fatihah
                        </h1>
                        <div class="makkiyah flex gap-3 text-xs text-[#ABBFB9]">
                          <p>Makkiyah</p>
                          <p>.</p>
                          <p>7 Ayat</p>
                        </div>
                      </div>
                    </div>
                    <div class="arab-donwload flex gap-4">
                      <h2 class="text-xl text-text_color_bold_1 font-bold">
                        الفاتحة
                      </h2>
                      <h3 class="text-text_color_bold_1 font-bold text-xl">
                        <i class="bi bi-file-arrow-down-fill"></i>
                      </h3>
                    </div>
                  </div>
                </router-link>
                <router-link to="/quran">
                  <div
                    class="surah flex justify-between items-center border-b-2 py-4"
                  >
                    <div class="indo-surah flex gap-4 items-center">
                      <div class="no-surah text-text_color_bold_1 font-bold">
                        1
                      </div>
                      <div class="nama-surah">
                        <h1 class="text-lg font-bold text-text_color_bold_1">
                          Al-fatihah
                        </h1>
                        <div class="makkiyah flex gap-3 text-xs text-[#ABBFB9]">
                          <p>Makkiyah</p>
                          <p>.</p>
                          <p>7 Ayat</p>
                        </div>
                      </div>
                    </div>
                    <div class="arab-donwload flex gap-4">
                      <h2 class="text-xl text-text_color_bold_1 font-bold">
                        الفاتحة
                      </h2>
                      <h3 class="text-text_color_bold_1 font-bold text-xl">
                        <i class="bi bi-file-arrow-down-fill"></i>
                      </h3>
                    </div>
                  </div>
                </router-link>
              </div>
              <!-- JUZ -->
              <div
                v-bind:class="{
                  hidden: openTab !== 2,
                  block: openTab === 2,
                }"
              >
                <router-link to="/quran">
                  <div class="surah-quranku">
                    <div
                      class="surah-quranku-nav w-full h-12 py-3.5 px-3.5 rounded-lg flex justify-between items-center mt-10 bg-[rgba(18,_25,_49,_0.05)]"
                    >
                      <div
                        class="urut-surah-quranku w-5 h-5 p-3 bg-text_color_bold_1 rounded-full flex justify-center items-center"
                      >
                        <h2 class="text-white">7</h2>
                      </div>
                      <div class="surah-quranku-play-simpan flex gap-6">
                        <h2 class="text-2xl"><i class="bi bi-play"></i></h2>
                        <h2 class="text-xl"><i class="bi bi-bookmark"></i></h2>
                      </div>
                    </div>
                    <div class="surah-quranku-arab-arti">
                      <h2
                        class="mb-4 text-right mt-3 text-4xl text-text_color_bold_1"
                      >
                        صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ
                        الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ ࣖ
                      </h2>
                      <p class="text-text_color_bold_1 text-[16px] mb-4">
                        (yaitu) jalan orang-orang yang telah Engkau beri nikmat
                        kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan
                        (pula jalan) mereka yang sesat.
                      </p>
                      <hr />
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavQuranku from "../components/Nav.vue";

export default {
  name: "TersimpanQuranku",
  components: {
    NavQuranku,
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>