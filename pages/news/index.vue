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
            <div class="content_box_wrapper">
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

export default {
  layout: "lower",
  async asyncData({ $microcms }) {
    const newsData = await $microcms.get({
      endpoint: "news",
      queries: { limit: 100 },
    });
    return {
      newsItems: newsData.contents,
    };
  },
  methods: {
    getTheDate(date) {
      return this.$moment(date).format("YYYY.MM.DD");
    },
  },
  components: {
    SVGElement,
  },
};
</script>
