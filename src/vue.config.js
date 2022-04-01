const { InjectManifest } = require('workbox-webpack-plugin')

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('workbox')
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vuejs-pwa/' : '',
  pwa: {
    name: 'Riley Hoffman | Web Developer',
    themeColor: '#00050f',
    workboxPluginMode: 'InjectManifest',
    msTileColor: '#b91d47',
    appleMobileWebAppCache: 'yes',
    manifestOptions: {
      background_color: '#42b983'
    }
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          // add workbox to webpack config.
          new InjectManifest({
            swSrc: './src/service-worker.js',
            swDest: 'service-worker.js'
            // other workbox options..
          })
        ]
      }
    }
  }
}
