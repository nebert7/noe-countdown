<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader
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
