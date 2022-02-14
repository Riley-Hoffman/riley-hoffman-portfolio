module.exports = {
  pwa: {
    themeColor: '#00050f',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/sw.js'
      // ...other Workbox options...
    }
  }
}
