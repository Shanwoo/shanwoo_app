<template>
  <div>
    <head-component></head-component>
    <div class="container"><img :src='lastetsCoporators[0].pic'></div>
    <div class="wrap">
        <div>
          <input type="text" v-model="accountAddress"/>
          <button @click="scanAddress">scan ETH Address</button>
          <p></p>
        </div>
        <div>
          <input type="text" v-model="txAddress"/>
          <button @click="scanTx">scan Transaction</button>
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
import Partner from '@/components/Partner'
import FootComponent from '@/components/FootComponent'

export default {
  name: 'Transaction',
  data () {
    return {
      accountAddress: '',
      txAddress: ''
    }
  },
  components: { HeadComponent, Partner, FootComponent },
  computed: {
    ...mapGetters(['lastetsCoporators']),
    ...mapState({
      transactions: state => state.transactions
    })
  },
  methods: {
    scanAddress () { },
    scanTx () { }
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
