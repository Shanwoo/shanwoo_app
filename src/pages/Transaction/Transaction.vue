<template>
  <div>
    <head-component></head-component>
    <div class="banner"><img :src='lastetsCoporators[0].pic'></div>
    <div class="wrap">
      <h2 style="margin-top: 20px">账户余额查询</h2>
      <div>
        <el-input class="input" type="text" v-model="accountAddress" placeholder="请输入账户地址"></el-input>
        <el-button size="small" @click="scanAddress">查询</el-button>
        <div v-if="showAccount">
          <p>账户余额: {{ balance }} WOO</p>
          <a :href='"https://etherscan.io/address/" + accountAddress' target="_blank">
            >>更多账户详情
          </a>
        </div>
      </div>
      <h2 style="margin-top: 20px">转账</h2>
      <div>
        <p>To: <el-input class="input" type="text" v-model="toAccount" placeholder="请输入对方账户地址"></el-input></p>
        <p>Amount: <el-input class="input" type="text" v-model="transAmount" placeholder="请输入玄武币数量"></el-input></p>
        <el-button size="small" @click="transfer">发送</el-button>
      </div>
      <h2 style="margin-top: 20px">交易查询</h2>
      <div>
        <el-input class="input" type="text" v-model="txAddress" placeholder="请输入交易地址"></el-input>
        <el-button size="small" @click="scanTx">查询交易信息</el-button>
        <div v-if="showTx"><p>{{balance}}</p></div>
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
  components: { HeadComponent, Partner, FootComponent },
  data () {
    return {
      accountAddress: '',
      showAccount: false,
      txAddress: '',
      showTx: false,
      balance: '',
      toAccount: '',
      // 转账金额
      transAmount: '',
      depositTo: '',
      depositNums: '',
      requireTokens: '',
      proofHash: '',
      proofFileUrl: '',
      exchangeId: '',
      depositInformation: ''
    }
  },
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from shanwoo-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
  mounted () {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
  },
  computed: {
    ...mapGetters(['lastetsCoporators']),
    ...mapState({
      transactions: state => state.transactions,
      contractInstance: state => state.contractInstance
    })
  },
  methods: {
    scanAddress () {
      this.showAccount = true
      console.log(this.accountAddress)
      this.$store.state.contractInstance().balanceOf(this.accountAddress, (err, balance, reject) => {
        if (err) {
          // If we can't find a networkId keep result the same and reject the promise
          reject(new Error('Unable to retrieve network ID'))
        } else {
          this.balance = balance.toNumber() / 1e+18
          console.log(balance.toNumber() / 1e+18)
        }
      })
    },
    transfer () {
      console.log('============')
      console.log(this.toAccount)
      console.log(this.transAmount)
      console.log(this.$store.state.contractInstance())
      this.$store.state.contractInstance().transfer(this.toAccount, this.transAmount,
        { from: this.$store.state.web3.coinbase }, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log('this is the result')
            console.log(result)
          }
        })
    },
    depositShare () {
      this.$store.contractInstance().depositShare(this.depositTo, this.depositNums, this.requireTokens, this.proofHash, this.proofFileUrl
        , { from: this.$store.state.web3.coinbase }, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log(result)
          }
        })
    },
    purchaseShare () {
      this.$store.contractInstance().purchaseShare(this.exchangeId,
        { from: this.$store.state.web3.coinbase },
        (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log(result)
          }
        })
    },
    depositInfo () {
      this.$store.contractInstance().depositTo(this.exchangeId,
        { from: this.$store.state.web3.coinbase },
        (err, result) => {
          if (err) {
            console.log(err)
          } else {
            this.depositInformation = result
          }
        })
    },
    scanTx () {
      this.showTx = true
    }
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
.input {
  width: 50%;
}
</style>
