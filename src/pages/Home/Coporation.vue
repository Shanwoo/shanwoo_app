<template>
  <div class="wrap">
    <h2>最新合作企业</h2>
    <div class="row justify-content-around">
      <div class="col-auto" v-for="(item, index) in coporators" :key="index">
        <div class="card">
          <img class="card-img-top" :src="item.pic" :alt="item.name">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Corporation',
  props: ['coporators']
}
</script>

<style scoped>
.wrap {
  background: #f7fcff;
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
</style>
