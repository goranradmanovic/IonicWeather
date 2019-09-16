<template lang="pug">
  ion-grid
    form(@submit.prevent='onSubmit()')
      ion-col
        h3 City Name
        ion-searchbar(animated name='city' :value='city' @input='setCurrentCity($event.target.value)' placeholder='Enter city name' cancel-button-icon required)

      //-ion-col
        ion-item
          ion-label(position='stacked') City Name
          ion-input(name='city' :value='city' @input='setCurrentCity($event.target.value)' placeholder='Enter city name' clear-input required)

      ion-col
        ion-button(type='submit' color='secondary' expand='block' class='search-btn') Search
          ion-icon(slot='end' name='search')
          ion-ripple-effect
</template>

<script>

  export default {
    name: 'WeatherSearch',
    data() {
      return {
        city: '',
      }
    },

    methods: {
      //Set current city from user input
      setCurrentCity(cityName) {
        this.city = cityName.trim(); //Clear white space from left/right
      },

      //On submiting the form
      onSubmit() {
        //Check if string is not empty
        if (this.city != '') {
          //If everything is ok we are emiting an event with value of name of the city
          this.$emit('get-city', this.city);

          //Clear form input
          this.city = '';
        } else {
          //User is entered empty string or value
          this.showAlert();

          //Clear form input
          this.city = '';
        }
      },

      //Show popup if there is some errors, like empty string for city
      showAlert() {
        return this.$ionic.alertController.create({
                                            header: 'Enter City Name',
                                            message: 'Please enter a valid city name',
                                            buttons: ['Ok']
                                          }).then(a => a.present() /*present method set off alert*/);
      }
    }
  }

</script>
