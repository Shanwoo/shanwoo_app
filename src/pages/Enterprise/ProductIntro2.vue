<template>
  <div class="wrap">
    <h2>产品简介</h2>
    <div class="row justify-content-around">
      <div class="col-auto">
        <div class="advantage"><img src="static/bitcoin.png"/></div>
        <div class="discribe"><p>快速融资</p></div>
      </div>
      <div class="col-auto">
        <div class="advantage"><img src="static/bitcoin.png"/></div>
        <div class="discribe"><p>快速融资</p></div>
      </div>
      <div class="col-auto">
        <div class="advantage"><img src="static/bitcoin.png"/></div>
        <div class="discribe"><p>快速融资</p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductIntro2'
}
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
}
.col-auto {
  width: 220px;
  padding-right: 15px;
  padding-bottom: 20px;
}
.advantage {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  display: table-cell;
  vertical-align: middle;
}
.discribe {
  padding-left: 20px;
  display: table-cell;
  vertical-align: middle;
}
img {
  width: 100%;
  height: 100%;
}
p {
  margin: 0;
}
</style>
