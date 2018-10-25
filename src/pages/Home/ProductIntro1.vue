<template>
  <div class="wrap">
    <h2>产品简介</h2>
    <el-row :gutter="20">
       <!-- :span="8" -->
      <el-col :xs="12" :span="8">
        <div class="advantage"><img src="static/bitcoin.png"/></div>
        <div class="discribe"><p>快速融资</p></div>
      </el-col>
      <el-col :xs="12" :span="8">
        <div class="advantage"><img src="static/bitcoin.png"/></div>
        <div class="discribe"><p>快速融资</p></div>
      </el-col>
      <el-col :xs="12" :span="8">
        <div class="advantage"><img src="static/bitcoin.png"/></div>
        <div class="discribe"><p>快速融资</p></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ProductIntro1'
}
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
}
.el-row {
  padding-left: 20px;
  display: table;
  width: 100%;
  height: 100%;
}
.el-col {
  display: table-cell;
  vertical-align: middle;
  height: 100%;
}
.advantage {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  display: table-cell;
  vertical-align: middle;
}
.discribe {
  width: calc(100% - 120px);
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
