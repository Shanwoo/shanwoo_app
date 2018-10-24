<template>
  <div>
    <head-component></head-component>
    <div class="container"><img :src='lastetsCoporators[0].pic'></div>
    <div class="wrap">
      <h2>账户查询</h2>
      <div>
        <input type="text" v-model="accountAddress"/>
        <button @click="scanAddress">查询账户余额</button>
        <p>{{balance}}</p>
      </div>
      <a :href='"https://etherscan.io/address/" + accountAddress' target="_blank">
        >>更多账户详情
      </a>
      <h2>交易查询</h2>
      <div>
        <input type="text" v-model="txAddress"/>
        <button @click="scanTx">查询交易信息</button>
        <p>{{balance}}</p>
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
      balance: '',
      txAddress: '',
      // 转账金额
      transAmount:'',
      depositTo:'',
      depositNums:'',
      requireTokens:'',
      proofHash:'',
      proofFileUrl:'',
      exchangeId:'',
      depositInformation:''
    }
  },
  components: { HeadComponent, Partner, FootComponent },
  computed: {
    ...mapGetters(['lastetsCoporators']),
    ...mapState({
      transactions: state => state.transactions,
      contractInstance: state => state.contractInstance
    })
  },
  methods: {
    scanAddress(){ 
      console.log(this.accountAddress)
      this.$store.state.contractInstance().balanceOf(this.accountAddress,(err, balance) => {
        if (err) {
          // If we can't find a networkId keep result the same and reject the promise
          reject(new Error('Unable to retrieve network ID'))
        } else {
          this.balance = balance.toNumber()/1e+18
          console.log(balance.toNumber()/1e+18)
        }
      })
    },
    transfer(){
      this.$store.state.contractInstance().transfer(this.transAmount, {
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          console.log(result)
        }
      })
    },
    depositShare(){
      this.$store.contractInstance().depositShare(this.depositTo,this.depositNums,this.requireTokens,this.proofHash,this.proofFileUrl
      ,{from:this.$store.state.web3.coinbase},(err, result) => {
        if (err) {
          console.log(err)
        } else {
          console.log(result)
        }
      })
    },
    purchaseShare(){
      this.$store.contractInstance().purchaseShare(this.exchangeId,
      {from: this.$store.state.web3.coinbase},
      (err, result) => {
        if (err) {
          console.log(err)
        } else {
          console.log(result)
        }
      })
    },
    depositInfo(){
      this.$store.contractInstance().depositTo(this.exchangeId,
      {from: this.$store.state.web3.coinbase},
      (err, result) => {
        if (err) {
          console.log(err)
        } else {
          this.depositInformation = result
        }
      })
    },
    scanTx () { },
  },
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from casino-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
  mounted () {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
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
