<template lang="pug">
  ion-button(color='light' expand='block' v-if='info' @click='$emit("clear-info")') Clear
</template>

<script>

  export default {
    name: 'ClearWeatherInfo',
    props: ['info']
  }

</script>
