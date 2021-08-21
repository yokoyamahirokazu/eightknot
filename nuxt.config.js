require('dotenv').config();
const { API_KEY, SERVICE_ID} = process.env;
import axios from "axios";

export default {

  publicRuntimeConfig: {
    apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
    serviceId: process.env.NODE_ENV !== 'production' ? SERVICE_ID : undefined,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eight Knot inc. | あらゆる水上モビリティをロボティクスとAIで自律化する',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Eight Knot inc. - 株式会社エイトノット | あらゆる水上モビリティをロボティクスとAIで自律化する' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { hid: "favicon", rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { hid: "favicon", rel: 'icon alternate', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
      { name: 'msapplication-square70x70logo', content: '/site-tile-70x70.png' },
      { name: 'msapplication-square150x150logo', content: '/site-tile-150x150.png' },
      { name: 'msapplication-wide310x150logo', content: '/site-tile-310x150.png' },
      { name: 'msapplication-square310x310logo', content: '/site-tile-310x310.png' },
      { name: 'msapplication-TileColor', content: '#00629B' },
      { property: 'og:title', content: 'Eight Knot inc. - 株式会社エイトノット' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://8kt.jp/' },
      { property: 'og:image', content: '/og_image.png' },
      { property: 'og:site_name', content: 'Eight Knot inc. 株式会社エイトノット' },
      {
        property: 'og:description'
        , content: 'Eight Knot inc. - 株式会社エイトノット | あらゆる水上モビリティをロボティクスとAIで自律化する'
      },
      { property: 'og:locale', content: 'ja_JP' },
      {
        name: 'twitter:card', content: 'summary_large_image'
      },
      ]
  },

  css: [
    '~/assets/css/normalize',
    '~/assets/css/style',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/adobeFont' },
    { src: '~/plugins/veeValidate' },
    { src: '~/plugins/vue-scrollto' },
    { src: '~/plugins/myFilter' },
  ],
   build: {
    transpile: ['vee-validate'], // 追加
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-microcms-module',
    ['@nuxtjs/moment', ['ja']],
    '~/modules/api-build-json',
    'nuxt-svg-loader',
    '@nuxtjs/pwa',
  ],


  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },


  generate: {
    async routes() {
      const pages = await axios
        .get('https://8kt.microcms.io/api/v1/news/', {
          headers: { 'X-API-KEY': process.env.API_KEY }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/news/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  },

}
