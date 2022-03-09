const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/vuejs-pwa/' : '',
  configureWebpack: {
    plugins: [
      new GenerateSW()
    ]
  },
  pwa: {
    themeColor: '#00050f',
    workboxPluginMode: 'GenerateSW',
    msTileColor: '#b91d47',
    appleMobileWebAppCache: 'yes',
    manifestOptions: {
      background_color: '#42b983'
    },
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swDest: 'sw.js',
      // ...other Workbox options...
      clientsClaim: true,
      exclude: '_redirects'
    }
  }
}
