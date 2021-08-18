<template>
  <div>
    <div class="hamburger-menu">
      <button class="menu-btn" v-on:click="navOpen = !navOpen">
        <span></span>
      </button>
    </div>

    <nav v-bind:class="{ active: navOpen }">
      <div class="nav_logo">
        <SVGElement name="EightKnot_logo_horizontal" />
        <button class="menu-btn close" v-on:click="navOpen = !navOpen">
          <span></span>
        </button>
      </div>
      <ul>
        <li>
          <nuxt-link @click.native="navOpen = !navOpen" to="/"
            ><SVGElement name="home" /> Home</nuxt-link
          >
        </li>
        <li>
          <nuxt-link @click.native="navOpen = !navOpen" to="/news"
            ><SVGElement name="news" /> News</nuxt-link
          >
        </li>
        <li>
          <a
            href="https://note.com/8kt/"
            target="_blank"
            @click.native="navOpen = !navOpen"
            to="#blog"
            ><SVGElement name="blog" /> Blog</a
          >
        </li>
        <li>
          <nuxt-link @click.native="navOpen = !navOpen" to="/about"
            ><SVGElement name="about" /> About</nuxt-link
          >
        </li>
        <li>
          <nuxt-link @click.native="navOpen = !navOpen" to="/contact"
            ><SVGElement name="contact" /> Contact</nuxt-link
          >
        </li>
        <li class="sns_link">
          <a target="_blank" href="https://www.facebook.com/8ktjp">
            <SVGElement name="facebook" />
          </a>
          <a target="_blank" href="https://twitter.com/8ktjp">
            <SVGElement name="twitter" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import SVGElement from "@/components/svgs.vue";

export default {
  data() {
    return {
      navOpen: false,
    };
  },
  components: { SVGElement },
};
</script>
