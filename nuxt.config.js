const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Digital Energy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Облачный хостинг, аренда виртуального сервера ' +
      'с быстрыми дисками, VPS/VDS. Разумные цены на виртуальные серверы Linux/Windows до 48CPU/224GB RAM,' +
      ' быстрые диски, три дата-центра, резервное копирование.' }
    ],
    /*script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],*/
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery', 'bootstrap', 'slick-carousel', 'jquery-validation'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
    /*extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }*/
  },

  css: ['bootstrap/dist/css/bootstrap.css', "~static/css/slick-theme.css"],

  plugins: ['~plugins/bootstrap.js', '~plugins/slick.js', '~plugins/jquery-validation.js']
}
