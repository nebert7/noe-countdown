<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">{{ $t('pageTitle') }}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/valentines" class="nav-link">Valentine's Day</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">{{ $t('countdown') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/currency" class="nav-link">{{ $t('currencyConverter') }}</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <flag :iso="flag" v-bind:squared=false /> {{ $t('language') }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="flag-button" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language, entry.flag)">
                <flag :iso="entry.flag" v-bind:squared=false /> {{ entry.title }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: 'AppHeader',
  data() {
    return {
        languages: [
            { flag: 'us', language: 'en', title: 'English' },
            { flag: 'py', language: 'es', title: 'Español' }
        ],
        flag: 'us'
    };
  },
  methods: {
    changeLocale(locale, flag) {
        i18n.locale = locale;
        this.flag = flag;
    }
  }
};
</script>

<style scoped>
.flag-button {
  text-indent: 6px;
  font-size: 16px;
}
.flag-button:hover {
  background-color: LightGray;
}
</style>
