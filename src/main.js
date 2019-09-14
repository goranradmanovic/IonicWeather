import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

//Importing Ionic framework
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

//Register Ionic for using
Vue.use(Ionic);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
