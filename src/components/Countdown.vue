<template>
  <div>
    <h1 class="display-5">
      {{ daysLeft }}
    </h1>
    <p>{{ $t('daysLeft') }}</p>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  computed: {
    daysLeft() {
      var meeting = new Date("07/11/2022");
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
