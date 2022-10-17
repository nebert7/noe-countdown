<template>
  <div>
    <Title msg="🇺🇸 Noah and Noemí Countdown 🇵🇾"/>
    <h1 class="display-5">
      {{ daysLeftCount }}
    </h1>
    <p>{{ $t('daysLeft') }}</p>
    <Picture></Picture>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Picture from '@/components/Picture';

export default {
  name: 'Countdown',
  components: {
    Title,
    Picture
  },
  computed: {
    daysLeftCount() {
      var meeting = new Date("07/14/2023");
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
