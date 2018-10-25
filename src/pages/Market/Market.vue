<template>
  <div>
    <head-component></head-component>
    <div class="banner"><img :src='lastetsCoporators[0].pic'></div>
    <market-list :markets="markets"></market-list>
    <partner></partner>
    <foot-component></foot-component>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import HeadComponent from '@/components/HeadComponent'
import MarketList from './MarketList'
import Partner from '@/components/Partner'
import FootComponent from '@/components/FootComponent'

export default {
  name: 'Market',
  components: { HeadComponent, MarketList, Partner, FootComponent },
  computed: {
    ...mapGetters(['lastetsCoporators']),
    ...mapState({
      markets: state => state.markets
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
</style>
