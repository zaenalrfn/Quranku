<template>
  <div class="main">
    <div class="bg-white fixed top-0 left-0 right-0">
      <NavQuranku />
      <div class="px-6">
        <div class="flex flex-wrap">
          <div class="w-full">
            <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  class="text-lg font-bold uppercase px-5 py-3 block leading-normal"
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
                  class="text-lg font-bold uppercase px-5 py-3 block leading-normal"
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
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full"
            >
              <div class="flex-auto">
                <div class="tab-content tab-space">
                  <div
                    v-bind:class="{
                      hidden: openTab !== 1,
                      block: openTab === 1,
                    }"
                  >
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
                          <div
                            class="makkiyah flex gap-3 text-xs text-[#ABBFB9]"
                          >
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
                          <div
                            class="makkiyah flex gap-3 text-xs text-[#ABBFB9]"
                          >
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
                  </div>
                  <div
                    v-bind:class="{
                      hidden: openTab !== 2,
                      block: openTab === 2,
                    }"
                  >
                    <h2>Masih proses</h2>
                  </div>
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
import NavQuranku from "@/components/Nav.vue";
export default {
  name: "BacaQuran",
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