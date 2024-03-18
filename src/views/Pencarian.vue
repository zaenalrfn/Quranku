<style scoped>
.circle {
  position: absolute;
  border-radius: 50%;
}
</style>
<template>
  <div class="main">
    <!-- Bagian Nav -->
    <NavQuranku />
    <!-- Bagian search surah  -->
    <div class="search px-6">
      <div class="relative mt-2 rounded-md shadow-sm">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <span class="text-[#ABBFB9] sm:text-sm"
            ><i class="bi bi-search"></i
          ></span>
        </div>
        <input
          type="text"
          name="SEARCH"
          class="block w-full rounded-xl border-0 py-1.5 pl-10 pr-20 bg-[#F3F4F5] text-[#ABBFB9] placeholder:text-[#ABBFB9] focus:ring-[#ABBFB9] sm:text-sm sm:leading-6"
          placeholder="Ketik nama surah"
        />
      </div>
      <!-- bagian surah -->
      <div
        ref="container"
        class="container relative w-full h-20 mt-6 rounded-lg bg-gradient-to-r from-[#61876E] to-[#28433A]"
      ></div>
    </div>
  </div>
</template>
<script>
import NavQuranku from "@/components/Nav.vue";

export default {
  name: "PencarianQuranku",
  components: {
    NavQuranku,
  },
  mounted() {
    this.createCircles(50);
  },
  methods: {
    createCircles(count) {
      const container = this.$refs.container;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      for (let i = 0; i < count; i++) {
        const circle = document.createElement("div");
        const size = Math.floor(Math.random() * 2) + 1; // Ukuran acak antara 10 dan 50 piksel
        const top = Math.random() * (containerHeight - size);
        const left = Math.random() * (containerWidth - size);
        const color = "#A6BB8D";

        circle.style.position = "absolute";
        circle.style.top = `${top}px`;
        circle.style.left = `${left}px`;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.backgroundColor = color;
        circle.style.borderRadius = "50%";

        container.appendChild(circle);
      }
    },
  },
};
</script>




