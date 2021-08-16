<template>
  <div>
    <header>
      <div class="header_logo">
        <nuxt-link to="/">
          <LogoHolizontal />
        </nuxt-link>
      </div>
      <HeaderNav />
    </header>
  </div>
</template>
<script>
import LogoHolizontal from "@/assets/img/EightKnot_logo_horizontal.svg";
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
    LogoHolizontal,
  },
};
</script>
