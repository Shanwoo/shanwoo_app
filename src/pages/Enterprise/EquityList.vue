<template>
  <div class="wrap">
    <div class="title">
      <h2>最新股权公示</h2>
      <span>已有{{amount}}人购买<el-button size="small">去购买</el-button></span>
    </div>
    <el-row :gutter="10" v-for="(item, index) in equities" :key="index">
      <el-col :span="6">
        <span><img :src="item.pic"></span>
      </el-col>
      <el-col :span="6">
        <p>{{ item.name }}</p>
        <p>{{ item.slogan }}</p>
        <p>{{ item.intro }}</p>
      </el-col>
      <el-col :span="3">
        <p>注册资本</p>
        <p>出让股份</p>
        <p>占股</p>
      </el-col>
      <el-col :span="4">
        <p>{{ item.capital }}</p>
        <p>{{ item.shares }}</p>
        <p>{{ item.ratio }}</p>
     </el-col>
      <el-col :span="5">
        <p>哈希: {{ item.hash }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'EquityList',
  props: ['equities'],
  data () {
    return {
      amount: 20000
    }
  }
}
</script>

<style scoped>
.wrap {
  background: #f7fcff;
}
.title {
  width: 100%;
  display: table;
  display: table;
  padding: 20px 5px;
  border-bottom: 1px solid #929292;
}
.title h2 {
  display: table-cell;
}
.title span {
  display: table-cell;
  vertical-align: middle;
  text-align: right;
}
.el-button {
  margin-left: 20px;
}
.el-row {
  border-bottom: 1px solid #929292;
  padding: 10px 0;
}
.el-col img {
  width: 100%;
}
</style>
