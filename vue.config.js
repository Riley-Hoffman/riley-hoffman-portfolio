const { InjectManifest } = require('workbox-webpack-plugin')

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('workbox')
  },
  pwa: {
    name: 'Riley Hoffman | Web Developer',
    start_url: '/',
    icons: [
      {
        src: './public/img/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: './public/img/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    display: 'standalone',
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
