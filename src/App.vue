<template>
  <div id="app">
    <Title msg="🇺🇸 Noah and Noemí Countdown 🇵🇾"/>
    <Countdown></Countdown>
    <div>
      <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
        <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
      </button>
    </div>
    <Picture></Picture>
  </div>
</template>

<script>
import Title from './components/Title';
import Countdown from './components/Countdown';
import Picture from './components/Picture';
import i18n from '@/plugins/i18n';

export default {
  name: 'App',
  components: {
    Title,
    Countdown,
    Picture
  },
  data() {
    return {
        languages: [
            { flag: 'us', language: 'en', title: 'English' },
            { flag: 'py', language: 'es', title: 'Español' }
        ]
    };
  },
  methods: {
    changeLocale(locale) {
        i18n.locale = locale;
    }
  }
}
</script>

<style scoped>
  #app {
    background: rgb(178,228,250);
    background: linear-gradient(0deg, rgba(178,228,250,0.7021183473389356) 0%, rgba(255,255,255,1) 44%);
  }
  button {
    border-radius: 15px;
    padding: 15px;
    border: 1px solid white;
    font-size: 18px;
    margin: 15px;
  }
  div {
    text-align: center;
  }
</style>
