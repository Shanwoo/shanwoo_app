<template>
  <div class="wrap">
    <h2>合作伙伴</h2>
    <div class="content">
      <div class="partner" v-for="(item, index) in partners" :key="index">
        <img :src="item.pic"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Partner',
  props: [],
  computed: {
    ...mapState({
      partners: state => state.partners
    })
  }
}
</script>

<style scoped>
.wrap {
  background: #fff;
  /* border-top: 1px solid #c0c4cc; */
}
h2 {
  margin-bottom: 30px;
}
.content {
  display: inline-block;
  box-sizing: border-box;
}
.partner {
  width: 23%;
  float: left;
  margin: 5px;
  /* border: 1px solid #929292; */
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
