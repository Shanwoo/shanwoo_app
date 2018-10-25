<template>
  <div>
    <head-component></head-component>
    <div class="banner"><img :src='lastetsCoporators[0].pic'></div>
    <div class="wrap news">
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
    <equity-list :equities="partners"></equity-list>
    <div class="wrap">
      <h2>查询股权哈希</h2>
      <div>
        <!-- 输入内容是什么 -->
        <el-input class="input" type="text" v-model="equityHash" placeholder="请输入..."></el-input>
        <el-button size="small">查询</el-button>
        <p></p>
      </div>
    </div>
    <partner></partner>
    <foot-component></foot-component>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import HeadComponent from '@/components/HeadComponent'
import ProductIntro from '@/components/ProductIntro'
import EquityList from './EquityList'
import Partner from '@/components/Partner'
import FootComponent from '@/components/FootComponent'

export default {
  name: 'Enterprise',
  components: { HeadComponent, ProductIntro, EquityList, Partner, FootComponent },
  data () {
    return {
      equityHash: ''
    }
  },
  computed: {
    ...mapGetters(['lastetsCoporators']),
    ...mapState({
      partners: state => state.partners
    })
  }
}
</script>

<style scoped>
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 90%;
  vertical-align: middle;
}
.news {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c0c4cc;
}
.input {
  width: 50%;
}
</style>
