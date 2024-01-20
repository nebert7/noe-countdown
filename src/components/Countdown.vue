<template>
  <div>
    <Title msg="🇺🇸 Noah and Noemí Countdown 🇵🇾"/>
    <h1 class="display-5">
      {{ daysLeftCount }}
    </h1>
    <p>{{ $t('daysLeft') }}</p>
    <Pictures></Pictures>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Pictures from '@/components/Pictures';

export default {
  name: 'Countdown',
  components: {
    Title,
    Pictures
  },
  computed: {
    daysLeftCount() {
      var meeting = new Date("07/14/2024");
      var Difference_In_Time = meeting.getTime() - Date.now();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      return Math.ceil(Difference_In_Days);
    }
  }
};
</script>

<style scoped>
  div {
    text-align: center;
    margin: 20px;
  }
</style>
