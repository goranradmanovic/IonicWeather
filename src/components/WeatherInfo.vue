<template lang="pug">
  ion-card(v-if='info')
    ion-header
      ion-card-title {{ info.name }}
      ion-card-subtitle {{ info.timezone }}

    ion-card-content
      ion-list
        ion-item
          ion-label
            strong Temparature: &nbsp;
            | {{ info.main.temp }} C

      ion-item
        ion-label
          strong Laditiude: &nbsp;
          | {{ info.coord.lat }}

      ion-item
        ion-label
          strong Longitude: &nbsp;
          | {{ info.coord.lon }}
</template>

<script>

  export default {
    name: 'WeatherInfo',
    props: ['info'],
  }

</script>
