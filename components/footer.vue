<template>
  <div>
    <footer>
      <div class="footer_inner">
        <div class="footer_logo">
          <SVGElement name="EightKnot_vertical_B" />
        </div>
        <ul class="footer_nav">
          <li>
            <nuxt-link v-on:click.native="navOpen = !navOpen" to="/"
              ><SVGElement name="home" /> Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link v-on:click.native="navOpen = !navOpen" to="/news"
              ><SVGElement name="news" /> News</nuxt-link
            >
          </li>
          <li>
            <a
              href="https://note.com/8kt/"
              target="_blank"
              v-on:click.native="navOpen = !navOpen"
              to="#blog"
              ><SVGElement name="blog" /> Blog</a
            >
          </li>
          <li>
            <nuxt-link v-on:click.native="navOpen = !navOpen" to="/about"
              ><SVGElement name="about" /> About</nuxt-link
            >
          </li>
          <li>
            <nuxt-link v-on:click.native="navOpen = !navOpen" to="/contact"
              ><SVGElement name="contact" /> Contact</nuxt-link
            >
          </li>
        </ul>
        <div class="footer_info">
          <p class="footer_company_name">株式会社エイトノット</p>
          <div class="footer_company_address">
            <p>
              <span>堺マリーナオフィス(本社)</span>
              〒590-0986<br />大阪府堺市堺区北波止町10
            </p>
            <p>
              <span> 東京オフィス</span>
              〒130-0003<br />東京都墨田区横川1-16-3 センターオブガレージ
            </p>
          </div>
          <div class="footer_sns">
            <a target="_blank" href="https://www.facebook.com/8ktjp">
              <SVGElement name="facebook" />
            </a>
            <a target="_blank" href="https://twitter.com/8ktjp">
              <SVGElement name="twitter" />
            </a>
          </div>
        </div>

        <p class="copyright">
          Copyright © Eight Knot inc. All Rights Reserved.
        </p>
      </div>
    </footer>
    <transition name="page_top_btn">
      <button
        class="page_top_btn button"
        v-show="buttonActive"
        @click="returnTop"
      >
        <SVGElement name="up" />
      </button>
    </transition>
  </div>
</template>
<script>
import Vue from "vue";
import SVGElement from "@/components/svgs.vue";

export default Vue.extend({
  data() {
    return {
      buttonActive: false,
      scroll: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollWindow);
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollWindow() {
      const top = 500; // ボタンを表示させたい位置
      this.scroll = window.scrollY;
      if (top <= this.scroll) {
        this.buttonActive = true;
      } else {
        this.buttonActive = false;
      }
    },
  },
  components: {
    SVGElement,
  },
});
</script>
