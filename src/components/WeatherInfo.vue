<template lang="pug">
  ion-card(v-if='info && info.cod != 404')

    ion-card-header
      ion-card-title {{ info.name }}
      ion-card-subtitle {{ getDate() }}

    ion-card-content
      ion-row
        ion-col(size='5')
          h1.ion-text-center {{ info.weather[0].main }}
          img.card-img(:src='getWeatherIconPath()' :alt='getWeatherIconPath()' title='info.weather[0].description')

        ion-col(size='7')
          ion-item(lines='none')
            .weather__info
              h1 {{ roundNumber(info.main.temp) }}°
              h2.ion-text-capitalize {{ info.weather[0].description }}
              p {{ roundNumber(info.main.temp_max) }}° / {{ roundNumber(info.main.temp_min) }}°
              hr
              p
                small Visibility &nbsp;
                | {{ getVisibililityKM(info.visibility) }} KM

              p
                small Humidity &nbsp;
                | {{ roundNumber(info.main.humidity) }}%

              p
                small Pressure &nbsp;
                | {{ roundNumber(info.main.pressure) }}MB

              p
                small Wind &nbsp;
                | {{ info.wind.speed }} KM/H {{ getWindDirection(info.wind.deg) }}
</template>

<script>

  export default {
    name: 'WeatherInfo',
    props: ['info'],
    methods: {

      getWeatherIconPath() {
        return require('../assets/images/weathericons/' + this.info.weather[0].icon + '.png');
      },

      getDate() {
        let date = new Date();
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`
      },

      roundNumber(number) {
        return Math.round(number);
      },

      getVisibililityKM(number) {
        return Math.round(number / 1000);
      },

      getWindDirection(deg) {
        let compassSector = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
        return (deg) ? compassSector[(deg / 22.5).toFixed(0) - 1] : '';
      }
    },
  }

</script>
