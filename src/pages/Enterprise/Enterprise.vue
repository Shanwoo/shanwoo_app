<template>
  <div>
    <head-component></head-component>
    <div class="banner"><img :src='lastetsCoporators[0].pic'></div>
    <div class="wrap news">
      <div class="row">
        <div class="col-auto">
          <span>上链公司展播</span>
        </div>
        <div class="col-auto">
          <span>TDJ7384</span>
        </div>
        <div class="col-auto">
          <span>{{lastetsCoporators[0].name}}</span>
        </div>
        <div class="col-auto">
          <span>哈希: {{lastetsCoporators[0].hash}}</span>
        </div>
        <div class="col-auto">
          <span>上链区块: {{lastetsCoporators[0].block}}</span>
        </div>
      </div>
    </div>
    <product-intro-2></product-intro-2>
    <equity-list :equities="partners"></equity-list>
    <div class="wrap">
      <h2>查询股权哈希</h2>
      <form class="needs-validation">
        <div class="form-group row">
          <div class="col-sm-6">
            <input type="text" class="form-control" id="purchaseShare" v-model="equityHash" placeholder="请输入exchangeId">
            <div class="invalid-feedback">
              Please provide a valid account address.
            </div>
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-primary">查询</button>
          </div>
        </div>
      </form>
    </div>
    <partner></partner>
    <foot-component></foot-component>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import HeadComponent from '@/components/HeadComponent'
import ProductIntro2 from './ProductIntro2'
import EquityList from './EquityList'
import Partner from '@/components/Partner'
import FootComponent from '@/components/FootComponent'

export default {
  name: 'Enterprise',
  components: { HeadComponent, ProductIntro2, EquityList, Partner, FootComponent },
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
.col-auto {
  width: auto;
  padding-bottom: 10px;
}
.input {
  width: 50%;
}
</style>
