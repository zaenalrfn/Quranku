<template>
  <div class="main">
    <div class="bg-white">
      <div class="fixed top-0 left-0 right-0 bg-white">
        <NavQuranku />
      </div>
      <div class="flex flex-wrap px-6 mt-20">
        <div class="w-full">
          <!-- BAGIAN TABS -->
          <ul
            class="flex bg-white mb-0 list-none flex-wrap pt-3 pb-4 flex-row fixed top-[78px] left-0 right-0 mx-6"
          >
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="text-lg font-medium px-5 py-3 block leading-normal"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  ' bg-white text-[#ACBFB9]': openTab !== 1,
                  'text-text_color_bold_1 border-b-2 border-b-[#3C6255]':
                    openTab === 1,
                }"
              >
                Surah
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="text-lg font-medium px-5 py-3 block leading-normal"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  ' bg-white text-[#ACBFB9]': openTab !== 2,
                  'text-text_color_bold_1 border-b-2 border-b-[#3C6255]':
                    openTab === 2,
                }"
              >
                Juz
              </a>
            </li>
          </ul>
          <!-- BAGIAN SURAH Dan Juz -->
          <div class="flex flex-col min-w-0 break-words bg-white mt-[77px]">
            <div class="flex-auto">
              <div class="tab-content tab-space">
                <!-- Surah -->
                <div
                  v-bind:class="{
                    hidden: openTab !== 1,
                    block: openTab === 1,
                  }"
                >
                  <div
                    class="content-surah"
                    v-for="(surahquranku, index) in Surah"
                    :key="index"
                  >
                    <router-link to="/quran">
                      <div
                        class="surah flex justify-between items-center border-b-2 py-4"
                      >
                        <div class="indo-surah flex gap-4 items-center">
                          <div
                            class="no-surah text-text_color_bold_1 font-bold"
                          >
                            {{ surahquranku.number }}
                          </div>
                          <div class="nama-surah">
                            <h1
                              class="text-lg font-bold text-text_color_bold_1"
                            >
                              {{ surahquranku.name_id }}
                            </h1>
                            <div
                              class="makkiyah flex gap-3 text-xs text-[#ABBFB9]"
                            >
                              <p>{{ surahquranku.revelation_id }}</p>
                              <p>.</p>
                              <p>{{ surahquranku.number_of_verses }} Ayat</p>
                            </div>
                          </div>
                        </div>
                        <div class="arab-donwload flex gap-4">
                          <h2 class="text-xl text-text_color_bold_1 font-bold">
                            {{ surahquranku.name_short }}
                          </h2>
                          <h3 class="text-text_color_bold_1 font-bold text-xl">
                            <i class="bi bi-file-arrow-down-fill"></i>
                          </h3>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
                <!-- JUZ -->
                <div
                  v-bind:class="{
                    hidden: openTab !== 2,
                    block: openTab === 2,
                  }"
                >
                  <router-link to="/quran">
                    <div class="juz border-b-2 py-4">
                      <div class="indo-juz flex gap-4 items-center">
                        <div class="no-juz text-text_color_bold_1 font-bold">
                          1
                        </div>
                        <div class="nama-juz">
                          <h1 class="text-lg font-bold text-text_color_bold_1">
                            Juz 1
                          </h1>
                          <div
                            class="makkiyah flex gap-3 text-xs text-[#ABBFB9]"
                          >
                            <p>Al-fatihah, Al-baqarah</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </router-link>
                  <router-link to="/quran">
                    <div class="juz border-b-2 py-4">
                      <div class="indo-juz flex gap-4 items-center">
                        <div class="no-juz text-text_color_bold_1 font-bold">
                          2
                        </div>
                        <div class="nama-juz">
                          <h1 class="text-lg font-bold text-text_color_bold_1">
                            Juz 2
                          </h1>
                          <div
                            class="makkiyah flex gap-3 text-xs text-[#ABBFB9]"
                          >
                            <p>Al-baqarah</p>
                          </div>
                        </div>
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
  </div>
</template>

<script>
import axios from "axios";
import NavQuranku from "@/components/Nav.vue";
export default {
  name: "BacaQuran",
  components: {
    NavQuranku,
  },
  data() {
    return {
      openTab: 1,
      Surah: null,
    };
  },
  mounted() {
    this.getSurah();
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    async getSurah() {
      try {
        const response = await axios.get(
          "https://api.myquran.com/v2/quran/surat/semua"
        );
        this.Surah = response.data.data;
        console.log(this.Surah);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>