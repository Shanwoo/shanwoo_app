<template>
  <div>
    <head-component></head-component>
    <div class="container">
      <img :src='lastetsCoporators[0].pic'>
    </div>
    <div class="wrap">
      <el-row :gutter="20">
        <el-col :span="5">
          <span>上链公司展播</span>
        </el-col>
        <el-col :span="4">
          <span>TDJ7384</span>
        </el-col>
        <el-col :span="5">
          <span>{{lastetsCoporators[0].name}}</span>
        </el-col>
        <el-col :span="5">
          <span>哈希: {{lastetsCoporators[0].hash}}</span>
      </el-col>
        <el-col :span="5">
          <span>上链区块: {{lastetsCoporators[0].block}}</span>
        </el-col>
      </el-row>
    </div>
    <product-intro></product-intro>
    <partner></partner>
    <foot-component></foot-component>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import HeadComponent from '@/components/HeadComponent'
import ProductIntro from '@/components/ProductIntro'
import Partner from '@/components/Partner'
import FootComponent from '@/components/FootComponent'

export default {
  name: 'Enterprise',
  components: { HeadComponent, ProductIntro, Partner, FootComponent },
  computed: {
    ...mapGetters(['lastetsCoporators']),
    ...mapState({
      partners: state => state.partners
    })
  }
}
</script>

<style scoped>
.container {
  height: 200px;
  line-height: 200px;
  background: #1a160d;
  text-align: center;
}
.wrap {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c0c4cc;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 90%;
  vertical-align: middle;
}
</style>
