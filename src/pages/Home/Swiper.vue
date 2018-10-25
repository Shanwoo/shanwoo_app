<template>
  <el-carousel :interval="5000" :autoplay="false">
    <el-carousel-item v-for="(item, index) in images" :key="index">
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Swiper',
  data () {
    return {
      images: ['static/bitcoins.jpg', 'static/test.jpg', 'static/bitcoins.jpg', 'static/blockchain.jpg']
    }
  }
}
</script>

<style>
.el-carousel__container {
  height: 500px;
  line-height: 500px;
  /* background: #202d40; */
  background: #1a160d;
  text-align: center;
}
.el-carousel__indicator {
  padding: 12px 10px;
}
.el-carousel__button {
  width: 12px;
  height: 12px;
  border-radius: 12px;
}
.el-carousel__arrow {
  font-size: 45px;
  height: 50px;
  width: 50px;
  top: 0;
}
.el-carousel__item img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
</style>
