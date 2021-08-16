<template>
  <div>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          <h3>{{ content.title }}</h3>
          <p class="">
            {{ getTheDate(content.publishedAt) }}
          </p>
        </nuxt-link>
      </li>
    </ul>
    <ul v-if="$store.state.jsonData[0]">
      <li
        v-for="(post, index) in $store.state.jsonData[0].note.items"
        :key="index"
      >
        <a :href="post.link[0]" target="_blank" v-touch:tap>
          <img v-if="post.thumb" :src="post.thumb[0]" :alt="post.title[0]" />
          <h3>note:{{ post.title[0] }}</h3>
          <p>{{ getTheDate(post.pubDate[0]) }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: "news",
      queries: { limit: 5 },
    });
    return data;
  },
  methods: {
    getTheDate(date) {
      return this.$moment(date).format("YYYY.M.D");
    },
  },
};
</script>
