<template>
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="images.iguazu" class="d-block w-100" alt="Iguazu Falls">
    </div>
    <div class="carousel-item">
      <img :src="images.waterfall2" class="d-block w-100" alt="Hayden Run">
    </div>
    <div class="carousel-item">
      <img :src="images.wedding" class="d-block w-100" alt="Our Wedding">
    </div>
    <div class="carousel-item">
      <img :src="images.invitation" class="d-block w-100" alt="Invitation">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {
  name: 'Pictures',
  data() {
    return {
        images: {
            iguazu: require('@/assets/photos/iguazu.jpg'),
            wedding: require('@/assets/photos/wedding.jpg'),
            waterfall2: require('@/assets/photos/waterfall2.jpg'),
            invitation: require('@/assets/photos/invitation.jpg')
        }
    }
}
};
</script>

<style scoped>
  div {
    text-align: center;
  }

  .carousel-inner {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
  .carousel-item {
    width:  480px;
    height: 480px;
    object-fit: cover;
    padding: 10px 10px 10px 10px;
}
</style>
