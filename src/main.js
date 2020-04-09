import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Import USWDS and global styles
import './assets/styles/app.scss';

// Remove unnecessary production tip message from console
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
