<template lang="pug">
    ion-button(color='danger' expand='block' v-if='info && info.cod != 404' @click='$emit("clear-info")') Clear
      ion-icon(name='close-circle-outline' slot='end')
</template>

<script>

  export default {
    name: 'ClearWeatherInfo',
    props: ['info']
  }

</script>
