<template>
  <div>
    <EyeCatch />

    <div class="contents">
      <section class="bg_dark news_section" id="news">
        <div class="news_inner news_flex">
          <div class="news_flex_left">
            <div class="headline_box">
              <h2 class="headline white">
                <SVGElement name="news" />
                <span class="headline_txt">News</span>
              </h2>
              <p class="sub_headline">Notice from<br />the Our Company</p>
            </div>
          </div>
          <div class="news_flex_right">
            <ul class="news_list">
              <li v-for="item in newsItems" v-bind:key="item.id">
                <a v-if="item.blankLink" :href="item.blankLink" target="_blank">
                  <h3><SVGElement name="blank" /> {{ item.title }}</h3>
                  <p class="post_date">
                    {{ getTheDate(item.publishedAt) }}
                    <span class="category_name">
                      {{ item.category && item.category.name }}</span
                    >
                  </p>
                </a>
                <nuxt-link v-if="!item.blankLink" :to="`/${item.id}`">
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
            <div class="view_more_box">
              <nuxt-link class="btn btn_white" to="">View More</nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="section_inner">
          <div class="headline_box">
            <h2 class="headline">
              <SVGElement name="vision" />
              <span class="headline_txt">Vision</span>
            </h2>
            <p class="sub_headline">Introduce Our Vision</p>
          </div>
          <ul class="vision_flex">
            <li>
              <div class="vision_flex_txt">
                <h3 class="vision_title">
                  <span
                    >Robotics<br />Technology<br />use for<br />Small
                    Vessel</span
                  >
                  ロボティクスの技術を<br />小型船舶に
                </h3>
                <p>
                  ロボティクスの技術を船舶に適用させ、港と港つなぐ自律操船技術を開発し、それを利用したより快適な水上モビリティを開発します。
                </p>
              </div>
              <div class="vision_flex_img">
                <div class="img_circle vision_img">
                  <img
                    src="~assets/img/vision_1.jpg"
                    alt="ロボティクスの技術を小型船舶に"
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="vision_flex_txt">
                <h3 class="vision_title">
                  <span>Emission<br />free</span>
                  エミッションフリー
                </h3>
                <p>
                  ソーラーパネルを搭載したEV自律航行船を用いて物流・移動時の環境負荷を低減します。
                </p>
              </div>
              <div class="vision_flex_img">
                <div class="img_circle vision_img">
                  <img
                    src="~assets/img/vision_2.jpg"
                    alt="エミッションフリー"
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="vision_flex_txt">
                <h3 class="vision_title">
                  <span>On demand<br />Vessel</span>
                  好きなときに乗れる
                </h3>
                <p>
                  小型のEV自律航行船をネットワークを介して管理し、利用者が好きな時間に移動できるなどの水上移動を容易にするサービスの実現を目指します。
                </p>
              </div>
              <div class="vision_flex_img">
                <div class="img_circle vision_img">
                  <img
                    src="~assets/img/vision_3.jpg"
                    alt="好きなときに乗れる"
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="vision_flex_txt">
                <h3 class="vision_title">
                  <span>Change in<br />Lifestyle</span>
                  変わる暮らし
                </h3>
                <p class="vision_body">
                  ソーラーパネルを搭載したEV自律航行船を用いて物流・移動時の環境負荷を低減します。
                </p>
              </div>
              <div class="vision_flex_img">
                <div class="img_circle vision_img">
                  <img src="~assets/img/vision_4.jpg" alt="変わる暮らし" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="bg_logo">
        <div class="section_inner">
          <div class="headline_box">
            <h2 class="headline white">
              <SVGElement name="team" />
              <span class="headline_txt">Team</span>
            </h2>
            <p class="sub_headline">Introduce<br />Our Team Staff</p>
          </div>
          <ul class="team_list">
            <li v-for="item in staffItems" v-bind:key="item.id">
              <div class="img_circle team_list_img">
                <img :src="item.image.url" :alt="item.name" />
              </div>
              <div class="team_list_info">
                <h3 class="team_list_name">{{ item.name }}</h3>
                <p class="team_list_post">{{ item.post }}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="section_inner">
          <div class="headline_box">
            <h2 class="headline">
              <SVGElement name="blog" />
              <span class="headline_txt">Blog</span>
            </h2>
            <p class="sub_headline">list of Blog post</p>
          </div>

          <ul v-if="$store.state.jsonData[0]" class="blog">
            <li
              v-for="(post, index) in $store.state.jsonData[0].note.items"
              :key="index"
            >
              <a :href="post.link[0]" target="_blank" v-touch:tap>
                <img
                  class="blog_thumbnail"
                  v-if="post.thumb"
                  :src="post.thumb[0]"
                  :alt="post.title[0]"
                />
                <div class="blog_txt">
                  <h3 calss="blog_title">{{ post.title[0] }}</h3>
                  <p class="blog_date">{{ getTheDate(post.pubDate[0]) }}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SVGElement from "@/components/svgs.vue";
import EyeCatch from "@/components/eyeCatch.vue";

export default {
  mounted() {
    this.$adobeFonts(document);
  },
  async asyncData({ $microcms }) {
    const newsData = await $microcms.get({
      endpoint: "news",
      queries: { limit: 6 },
    });
    const staffData = await $microcms.get({
      endpoint: "staff",
    });
    return {
      newsItems: newsData.contents,
      staffItems: staffData.contents,
    };
  },

  methods: {
    getTheDate(date) {
      return this.$moment(date).format("YYYY.MM.DD");
    },
  },

  components: {
    EyeCatch,
    SVGElement,
  },
  filters: {
    omittedText20(text) {
      return text.length > 20 ? text.slice(0, 20) + "…" : text;
    },
  },
};
</script>
