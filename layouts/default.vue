<template>
  <div>
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
