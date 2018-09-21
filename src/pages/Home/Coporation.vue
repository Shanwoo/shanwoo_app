<template>
  <div class="wrap">
    <h2>最新合作企业</h2>
    <el-row :gutter="20">
      <el-col :span="8" v-for="(item, index) in coporators" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.pic">
          <div class="name">
            <span>{{item.name}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.name {
  padding: 14px;
  text-align: center;
}
</style>
