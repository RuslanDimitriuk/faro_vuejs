import axios from 'axios'
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'faromebel_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'FaroMebel' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    './plugins/vuemask.client.js',
    "~/plugins/vee-validate.js",
    { src: '~~/plugins/vue-js-modal.js', mode: 'client' }],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // axios: ['./configs/axios.js'],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/api/': { target: 'http://localhost:8081', pathRewrite: {'^/api/': ''} }
  },
  build: {
    transpile: ["vee-validate/dist/rules"],
    // vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

