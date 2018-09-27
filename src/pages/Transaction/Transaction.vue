<template>
  <div>
    <head-component></head-component>
    <div class="container"><img :src='lastetsCoporators[0].pic'></div>
    <partner></partner>
    <foot-component></foot-component>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import HeadComponent from '@/components/HeadComponent'
import Partner from '@/components/Partner'
import FootComponent from '@/components/FootComponent'

export default {
  name: 'Transaction',
  components: { HeadComponent, Partner, FootComponent },
  computed: {
    ...mapGetters(['lastetsCoporators']),
    ...mapState({
      transactions: state => state.transactions
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
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 90%;
  vertical-align: middle;
}
</style>
