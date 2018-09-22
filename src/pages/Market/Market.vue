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
  name: 'Market',
  components: { HeadComponent, Partner, FootComponent },
  computed: {
    ...mapGetters(['lastetsCoporators']),
    ...mapState({
      markets: state => state.markets
    })
  }
}
</script>

<style scoped>
</style>
