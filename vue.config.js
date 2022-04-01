const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vuejs-pwa/' : '',
  configureWebpack: {
    plugins: [
      new GenerateSW()
    ]
  },
  pwa: {
    name: 'Riley Hoffman | Web Developer',
    themeColor: '#00050f',
    workboxPluginMode: 'InjectManifest',
    msTileColor: '#b91d47',
    appleMobileWebAppCache: 'yes',
    manifestOptions: {
      background_color: '#42b983'
    },
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './src/service-worker.js'
    }
  }
}
