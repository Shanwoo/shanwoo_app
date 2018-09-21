<template>
  <div>
    <head-component></head-component>
    <div class="container">
      <swiper></swiper>
      <product-intro-1></product-intro-1>
      <coporation :coporators="lastetsCoporators"></coporation>
      <transaction :exchangeRate="exchangeRate" :transactions="transactions"></transaction>
      <partner></partner>
      <!-- <h1>{{ $t('home') }}</h1> -->
    </div>
    <foot-component></foot-component>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import HeadComponent from '@/components/HeadComponent'
import Swiper from './Swiper'
import ProductIntro1 from './ProductIntro1'
import Coporation from './Coporation'
import Transaction from './Transaction'
import Partner from '@/components/Partner'
import FootComponent from '@/components/FootComponent'

export default {
  name: 'Home',
  components: { HeadComponent, Swiper, ProductIntro1, Coporation, Transaction, Partner, FootComponent },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['lastetsCoporators']),
    ...mapState({
      exchangeRate: state => state.exchangeRate,
      transactions: state => state.transactions
    })
  }
}
</script>

<style scoped>
</style>
