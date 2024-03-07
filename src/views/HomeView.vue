<template>
  <div class="home">
    <PageUtama />
  </div>
</template>

<script>
// @ is an alias to /src
import PageUtama from "@/components/PageUtama.vue";

export default {
  name: "HomeView",
  components: {
    PageUtama,
  },
};
</script>
