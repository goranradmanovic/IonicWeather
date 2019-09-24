<template lang="pug">
  //- Every page needs to be wrapped with ion-page div and class
  .ion-page
    //- Page header (toolbar)
    ion-header(translucent)
      ion-toolbar(color='light')
        ion-title Current Weather

    //- Place for main content
    ion-content(fullscreen padding)

      //- Including/using components
      WeatherSearch(v-on:get-city='getCityWeatherInfo')

      WeatherInfo(v-bind:info='info')

      ClearWeatherInfo(v-bind:info='info' v-on:clear-info='clearWeatherInfoData')
</template>

<script>
  import WeatherSearch from '@/components/WeatherSearch';
  import WeatherInfo from '@/components/WeatherInfo';
  import ClearWeatherInfo from '@/components/ClearWeatherInfo';

  export default {
    name: 'home',
    components: {
      WeatherSearch,
      WeatherInfo,
      ClearWeatherInfo,
    },
    data() {
      return {
        appKey: 'ba666094c8f30c6ef4694bdc565e2e14',
        info: null,
      }
    },

    methods: {

      // Getting city weather info data from API
      async getCityWeatherInfo(city) {
        //API response
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.appKey}`);

        //Check if response is 404, then show error message in modal (popup)
        if (response.status == 404) {
          this.showAlert(response.statusText);
        }

        //Get JSON data
        this.info = await response.json(); //Return an promise
      },

      // Clear weather info data from UI
      clearWeatherInfoData() {
        this.info = null;
      },

      //Show popup if there is some errors, like empty string for city
      showAlert(message) {
        return this.$ionic.alertController.create({
                                            header: 'Not Valid City Name',
                                            message: `Please enter a valid city name.
                                                      City ${message}!`,
                                            buttons: ['Ok']
                                          }).then(a => a.present() /*present method set off alert*/);
      }
    }
  }
</script>
