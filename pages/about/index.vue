<template>
  <div>
    <section>
      <div class="section_inner">
        <div class="content_flex">
          <div class="content_flex_left">
            <div class="headline_box">
              <h1 class="headline">
                <SVGElement name="about" />
                <span class="headline_txt">About</span>
              </h1>
              <p class="sub_headline">About Our Company</p>
            </div>
          </div>
          <div class="content_flex_right">
            <div class="content_box_wrapper">
              <h2 class="headline_2">Company Overview</h2>
              <div class="content_box">
                <table class="overview">
                  <tr>
                    <th>
                      <p></p>
                      <p>会社名</p>
                    </th>
                    <td><p>株式会社エイトノット</p></td>
                  </tr>
                  <tr>
                    <th><p>所在地</p></th>
                    <td>
                      <p>
                        堺マリーナオフィス(本社)<br />
                        〒590-0986<br />大阪市堺市堺区北波止町10 <br /><br />
                        東京オフィス #アクセス<br />
                        〒130-0003<br />
                        東京都墨田区横川1-16-3 センターオブガレージ
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th><p>設立</p></th>
                    <td><p>2021年3月8日</p></td>
                  </tr>
                  <tr>
                    <th><p>役員</p></th>
                    <td>
                      <p>
                        代表取締役 / 共同創業者　木村 裕人
                        <br />取締役 / 共同創業者　横山 智彰
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th><p>事業概要</p></th>
                    <td><p>水上モビリティの自律航行システム開発</p></td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="content_box_wrapper">
              <h2 class="headline_2">Partners</h2>
              <div class="content_box">
                <ul class="partners">
                  <li v-for="item in partnersItems" v-bind:key="item.id">
                    <a :href="item.url" target="_blank">
                      <img :src="item.logo.url" :alt="item.url" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="content_box_wrapper">
              <h2 class="headline_2">Access</h2>
              <div class="content_box">
                <h3 class="headline_3_jp">東京オフィス アクセス</h3>
                <table class="overview">
                  <tr>
                    <th>
                      <p></p>
                      <p>住所</p>
                    </th>
                    <td>
                      <p>
                        〒130-0003<br />
                        東京都墨田区横川1-16-3 センターオブガレージ
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th><p>最寄り駅</p></th>
                    <td>
                      <p>
                        本所吾妻橋駅 徒歩10分 (700m) (都営浅草線)<br />
                        押上駅　徒歩12分 (900m) (半蔵門線 / 都営浅草線 / 京成線
                        / 東武スカイツリーライン)<br />
                        とうきょうスカイツリー駅 徒歩7分 (500m)
                        (東武スカイツリーライン) <br />
                        錦糸町駅　徒歩20分 (1.4km) (JR)<br />
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th><p>ご来館にあたってのお願い</p></th>
                    <td>
                      <p>
                        ＊一般用の駐車場/駐輪場はございません。<br />
                        ＊電車・バス等の公共交通機関をご利用いただくか、近隣の時間貸駐車場をご利用ください。<br />
                        ＊隣接する博物館とは異なる施設ですので、博物館の入口や博物館の駐車場に立ち入らないでください。<br />
                        ＊特に博物館の駐車場を横切って当施設へ入館することはご遠慮ください。
                      </p>
                    </td>
                  </tr>
                </table>
                <img
                  class="access_img"
                  src="~assets/img/cog_access1023.jpg"
                  alt="東京オフィスアクセス"
                />
              </div>
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
    const partnersData = await $microcms.get({
      endpoint: "partners",
      queries: { limit: 6 },
    });
    return {
      partnersItems: partnersData.contents,
    };
  },
  components: {
    SVGElement,
  },
};
</script>
