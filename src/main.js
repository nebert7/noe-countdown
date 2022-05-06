import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';

import Countdown from '@/components/Countdown';
import CurrencyConverter from '@/components/CurrencyConverter';

Vue.use(FlagIcon);
Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Countdown },
    { path: '/currency', component: CurrencyConverter }
  ]
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
