<template>
  <div class="main px-6">
    <div class="bg-white fixed top-0 left-0 right-0">
      <!-- bagian Nav -->
      <NavQuranku />
      <!-- Bagian banner -->
      <BannerQuran :infoSurat="infoSurat" />
    </div>
    <!-- BAGIAN SURAT -->
    <SurahQuranku :dataSurah="semuaAyat" />
  </div>
</template>

<script>
import BannerQuran from "@/components/Banner.vue";
import NavQuranku from "@/components/Nav.vue";
import SurahQuranku from "@/components/SurahQuranku.vue";
import axios from "axios";
export default {
  name: "QuranKu",
  props: ["id"],
  data() {
    return {
      semuaAyat: [],
      ayatMaksimal: 30,
      infoSurat: {},
      ayatMulai: 1,
      ayatAkhir: null,
      keySurah: "DATA-SURAH",
      keyInfoSurah: "INFO-SURAH",
    };
  },
  components: {
    BannerQuran,
    NavQuranku,
    SurahQuranku,
  },
  mounted() {
    this.getInfoSurat().then(() => {
      this.getSurah(); // Panggil getSurah() setelah getInfoSurat() selesai
    });
  },
  methods: {
    async getInfoSurat() {
      try {
        const response = await axios.get(
          `https://api.myquran.com/v2/quran/surat/${this.id}`
        );
        this.infoSurat = response.data.data;
        localStorage.setItem(this.keyInfoSurah, JSON.stringify(this.infoSurat));
        this.ayatAkhir = this.infoSurat.number_of_verses;
      } catch (error) {
        console.log(error);
      }
    },
    async getSurah() {
      let mulai = this.ayatMulai;
      const akhir = this.ayatAkhir;
      const getAyatMaksimal = async (mulai, akhir) => {
        try {
          const response = await axios.get(
            `https://api.myquran.com/v2/quran/ayat/${this.id}/${mulai}-${akhir}`
          );
          const data = response.data.data;
          return data;
        } catch (error) {
          console.error("Error fetching page:", error);
          throw error;
        }
      };
      const fetchAllPages = async () => {
        try {
          while (mulai <= akhir) {
            const currentPageEnd = Math.min(
              mulai + this.ayatMaksimal - 1,
              akhir
            );
            const currentPageData = await getAyatMaksimal(
              mulai,
              currentPageEnd
            );
            this.semuaAyat.push(...currentPageData);
            mulai += this.ayatMaksimal;
          }
          localStorage.setItem(this.keySurah, JSON.stringify(this.semuaAyat));
        } catch (error) {
          console.error("Error fetching all pages:", error);
        }
      };

      fetchAllPages();
    },
  },
};
</script>