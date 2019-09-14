module.exports = {

  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      runtimeCaching: [
        //Caching API calls
        {
          urlPattern: new RegExp('^https://api.openweathermap.org/data/2.5/weather?q='),
          handler: 'networkFirst',
          options: {
            networkTimeoutSeconds: 20,
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/main.sass";`
      }
    }
  }
}
