// https://www.freecodecamp.org/news/how-to-add-internationalization-to-a-vue-application-d9cfdcabb03b/
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
      welcomeMsg: 'Noah and Noemí Countdown',
      daysLeft: 'days left'
    },
    'es': {
      welcomeMsg: 'Cuenta regresiva de Noah y Noemí',
      daysLeft: 'días restantes'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages // set locale messages
});

export default i18n;
