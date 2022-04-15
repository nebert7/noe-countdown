<template>
  <div>
  <img :src="images.sample" class="img-fluid">
  </div>
</template>


<script>
export default {
  name: 'Picture',
  data() {
    return {
        images: {
            sample: require('@/assets/photos/iguazu.jpg')
        }
    }
}
};
</script>

<style scoped>
  div {
    text-align: center;
  }
</style>
