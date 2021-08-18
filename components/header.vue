<template>
  <div>
    <header>
      <div class="header_logo">
        <nuxt-link to="/">
          <SVGElement name="EightKnot_logo_horizontal" />
        </nuxt-link>
      </div>
      <HeaderNav />
    </header>
  </div>
</template>
<script>
import SVGElement from "@/components/svgs.vue";

import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
    SVGElement,
  },
};
</script>
