// https://www.freecodecamp.org/news/how-to-add-internationalization-to-a-vue-application-d9cfdcabb03b/
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
      pageTitle: 'Noah and Noemí',
      countdownMessage: 'Noah and Noemí Countdown',
      daysLeft: 'days left',
      countdown: 'Countdown',
      currencyConverter: 'Currency Converter',
      language: 'Language'
    },
    'es': {
      pageTitle: 'Noah y Noemí',
      countdownMessage: 'Cuenta regresiva de Noah y Noemí',
      daysLeft: 'días restantes',
      countdown: 'Cuenta Regresiva',
      currencyConverter: 'Convertidor de Moneda',
      language: 'Idioma'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages // set locale messages
});

export default i18n;
