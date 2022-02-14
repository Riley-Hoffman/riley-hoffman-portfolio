module.exports = {
  pwa: {
    themeColor: '#17a2aa',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/sw.js'
      // ...other Workbox options...
    }
  }
}
