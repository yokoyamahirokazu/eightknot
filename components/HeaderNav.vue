<template>
  <div>
    <div class="hamburger-menu">
      <button class="menu-btn" v-on:click="navOpen = !navOpen">
        <span></span>
      </button>
    </div>

    <nav v-bind:class="{ active: navOpen }">
      <div class="nav_logo">
        <LogoHolizontal />
        <button class="menu-btn close" v-on:click="navOpen = !navOpen">
          <span></span>
        </button>
      </div>
      <ul>
        <li>
          <nuxt-link @click.native="navOpen = !navOpen" to="/"
            ><HomeSvg /> Home</nuxt-link
          >
        </li>
        <li>
          <nuxt-link @click.native="navOpen = !navOpen" to="#news"
            ><NewsSvg /> News</nuxt-link
          >
        </li>
        <li>
          <nuxt-link @click.native="navOpen = !navOpen" to="#vision"
            ><VisionSvg /> Vision</nuxt-link
          >
        </li>
        <li>
          <nuxt-link @click.native="navOpen = !navOpen" to="#team"
            ><TeamSvg /> Team</nuxt-link
          >
        </li>
        <li>
          <nuxt-link @click.native="navOpen = !navOpen" to="#blog"
            ><BlogSvg /> Blog</nuxt-link
          >
        </li>
        <li>
          <nuxt-link @click.native="navOpen = !navOpen" to="/about"
            ><AboutSvg /> About</nuxt-link
          >
        </li>
        <li>
          <nuxt-link @click.native="navOpen = !navOpen" to="/contact"
            ><ContactSvg /> Contact</nuxt-link
          >
        </li>
        <li class="sns_link">
          <a href=""> <TwitterSvg /> </a>
          <a href=""> <FacebookSvg /> </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import LogoHolizontal from "@/assets/img/EightKnot_logo_horizontal.svg";
import AboutSvg from "@/assets/icon/about.svg";
import BlogSvg from "@/assets/icon/blog.svg";
import ContactSvg from "@/assets/icon/contact.svg";
import FacebookSvg from "@/assets/icon/facebook.svg";
import HomeSvg from "@/assets/icon/home.svg";
import NewsSvg from "@/assets/icon/news.svg";
import TeamSvg from "@/assets/icon/team.svg";
import TwitterSvg from "@/assets/icon/twitter.svg";
import VisionSvg from "@/assets/icon/vision.svg";

export default {
  data() {
    return {
      navOpen: false,
    };
  },
  components: {
    LogoHolizontal,
    AboutSvg,
    BlogSvg,
    ContactSvg,
    AboutSvg,
    FacebookSvg,
    HomeSvg,
    NewsSvg,
    TeamSvg,
    TwitterSvg,
    VisionSvg,
  },
};
</script>
