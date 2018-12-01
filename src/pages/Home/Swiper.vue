<template>
<div>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="(item, index) in images" :key="index"
        data-target="#carouselExampleIndicators"
        :data-slide-to="index" :class="[index === 0 ? 'active' : '']"></li>
    </ol>
    <div class="carousel-inner">
      <div v-for="(item, index) in images" :key="index"
        :class="[index === 0 ? 'carousel-item active' : 'carousel-item']">
        <img :src="item">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Swiper',
  data () {
    return {
      images: ['static/bitcoins.jpg', 'static/test.jpg', 'static/bitcoins.jpg', 'static/blockchain.jpg']
    }
  },
  created () {
    $('.carousel').carousel({
      interval: 5000
    })
  }
}
</script>

<style>
.carousel {
  height: 500px;
  line-height: 500px;
  background: #1a160d;
  text-align: center;
}
.carousel-item img {
  width: 500px;
  height: auto;
  max-height: 100%;
}
</style>
