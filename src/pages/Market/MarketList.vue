<template>
  <div class="wrap">
    <div class="title">
      <h2>合作股权交易所</h2>
    </div>
    <el-row :gutter="10" v-for="(item, index) in markets" :key="index">
      <el-col :span="6">
        <span><img :src="item.pic"></span>
      </el-col>
      <el-col :span="6" style="padding-left: 30px">
        <p>{{ item.name }}</p>
        <p>{{ item.board }}</p>
        <p>{{ item.intro }}</p>
      </el-col>
      <el-col :span="4">
        <p>注册资本</p>
        <p>挂牌标准</p>
        <p>挂牌周期</p>
      </el-col>
      <el-col :span="5">
        <p>{{ item.capital }}</p>
        <p>{{ item.isting_standard }}</p>
        <p>{{ item.listing_period }}</p>
     </el-col>
      <el-col :span="3">
        <el-button size="small"><a :href="item.domain" target="_blank">去查看</a></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'EquityList',
  props: ['markets'],
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
  border-bottom: 1px solid #aaa;
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
  border-bottom: 1px solid #aaa;
  padding: 10px 0;
}
.el-col img {
  width: 100%;
}
</style>
