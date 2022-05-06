<template>
  <div class="display-4">
    {{ $t('countdownMessage') }}
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    msg: String
  }
};
</script>

<style scoped>
  div {
    text-align: center;
  }
</style>
