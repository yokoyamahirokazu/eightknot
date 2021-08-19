<template>
  <div>
    <section>
      <div class="section_inner">
        <div class="content_flex">
          <div class="content_flex_left">
            <div class="headline_box">
              <h1 class="headline">
                <SVGElement name="news" />
                <span class="headline_txt">News</span>
              </h1>
              <p class="sub_headline">
                Notice from<br />
                the Our Company
              </p>
            </div>
          </div>
          <div class="content_flex_right">
            <div class="news_post">
              <h1>{{ postData.title }}</h1>
              <p class="publishedAt">{{ getTheDate(postData.publishedAt) }}</p>
              <div class="news_post_content" v-html="postData.body"></div>
              <div class="share_buttons">
                <button v-if="isNavigatorShareButton" @click="navigatorShare">
                  <SVGElement name="share" />
                </button>
                <button v-if="!isNavigatorShareButton" @click="twitterShare">
                  <SVGElement name="twitter" />
                </button>
                <button v-if="!isNavigatorShareButton" @click="facebookShare">
                  <SVGElement name="facebook" />
                </button>
              </div>
            </div>
            <h2 class="headline_2">Other Post</h2>
            <div class="content_box">
              <ul class="news_list news_page">
                <li v-for="item in newsItems" v-bind:key="item.id">
                  <a
                    v-if="item.blankLink"
                    :href="item.blankLink"
                    target="_blank"
                  >
                    <h3><SVGElement name="blank" /> {{ item.title }}</h3>
                    <p class="post_date">
                      {{ getTheDate(item.publishedAt) }}
                      <span class="category_name">
                        {{ item.category && item.category.name }}</span
                      >
                    </p>
                  </a>
                  <nuxt-link v-if="!item.blankLink" :to="`/news/${item.id}`">
                    <h3>{{ item.title }}</h3>
                    <p class="post_date">
                      {{ getTheDate(item.publishedAt) }}
                      <span class="category_name">
                        {{ item.category && item.category.name }}</span
                      >
                    </p>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SVGElement from "@/components/svgs.vue";

import axios from "axios";

export default {
  layout: "lower",

  async asyncData({ params, $microcms }) {
    const { data } = await axios.get(
      `https://8kt.microcms.io/api/v1/news/${params.id}`,
      {
        headers: { "X-API-KEY": process.env.API_KEY },
      }
    );
    const newsData = await $microcms.get({
      endpoint: "news",
      queries: { limit: 100 },
    });
    return {
      postData: data,
      newsItems: newsData.contents,
      title: data.title,
      isNavigatorShareButton: true,
      url: "",
      text: "",
    };
  },
  head() {
    return {
      title: this.title + "｜エイトノット",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.title + "の記事ページです",
        },
      ],
    };
  },
  mounted() {
    if (navigator.share === undefined) {
      this.isNavigatorShareButton = false;
    }
  },
  methods: {
    getTheDate(date) {
      return this.$moment(date).format("YYYY.MM.DD");
    },
    navigatorShare() {
      if (navigator.share) {
        navigator.share({
          title: this.title,
          text: this.title + "\n" + this.text,
          url: this.url,
        });
      }
    },
    // Twitter
    twitterShare() {
      const baseUrl = "https://twitter.com/intent/tweet?";
      const text = ["text", this.title + "\n" + this.text];
      const url = ["url", this.url];
      const parameter = new URLSearchParams([text, url]).toString();
      const shareUrl = `${baseUrl}${parameter}`;
      window.open(shareUrl, "twitter", "top=200,left=300,width=600,height=400");
    },
    // Facebook
    facebookShare() {
      const baseUrl = "https://www.facebook.com/sharer/sharer.php?";
      const url = ["u", this.url];
      const parameter = new URLSearchParams([url]).toString();
      const shareUrl = `${baseUrl}${parameter}`;
      window.open(
        shareUrl,
        "facebook",
        "top=200,left=300,width=600,height=400"
      );
    },
  },
  components: {
    SVGElement,
  },
};
</script>