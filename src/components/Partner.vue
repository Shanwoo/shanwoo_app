<template>
  <div class="wrap">
    <h2>合作伙伴</h2>
    <div class="row justify-content-around">
      <div class="col-auto" v-for="(item, index) in partners" :key="index">
        <div class="card">
          <img class="card-img-top" :src="item.pic" :alt="item.name">
          <!-- <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div> -->
        </div>
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
}
h2 {
  margin-bottom: 30px;
}
.col-auto {
  width: auto;
  padding-bottom: 20px;
}
.card {
  width: 200px;
}
@media (min-width: 768px) {
  .col-md {
    flex-grow: 0;
  }
}
</style>
