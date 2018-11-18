<template>
  <div>
    <head-component></head-component>
    <div class="banner"><img :src='lastetsCoporators[0].pic'></div>
    <div class="wrap">
      <!-- 账户余额查询功能 -->
      <h2 class="title" style="margin-bottom: 15px">账户余额查询</h2>
      <form class="needs-validation">
        <div class="form-group row">
          <div class="col-sm-6">
            <input type="text" class="form-control" id="balanceQuery" v-model="accountAddress" placeholder="请输入账户地址">
            <div class="invalid-feedback">
              Please provide a valid account address.
            </div>
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-primary" @click="scanAddress">查询</button>
          </div>
        </div>
      </form>
      <div v-if="showAccount">
        <p style="margin-bottom: 10px">账户余额: {{ balance }} WOO ≈ {{ balance * ratio }} RMB</p>
        <a :href='"https://etherscan.io/address/" + accountAddress' target="_blank" style="color: #a9a9a9;">
          >>点击查看更多账户详情
        </a>
      </div>
      <!-- 转账功能 -->
      <h2 style="margin-top: 60px">转账</h2>
      <form class="needs-validation">
        <div class="form-group row">
          <label for="inputAddress" class="col-sm-2 col-form-label">To:</label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id="inputAddress" v-model="toAccount" placeholder="请输入对方账户地址">
            <div class="invalid-feedback">
              Please provide a valid account address.
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputAmount" class="col-sm-2 col-form-label">Amount:</label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id="inputAmount" v-model="transAmount" placeholder="请输入玄武币数量">
            <div class="invalid-feedback">
              Please provide a valid amount to transfer.
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="button" class="btn btn-primary" @click="transfer">发送</button>
          </div>
        </div>
      </form>
      <div v-if="showTransfer">
        <p style="margin-bottom: 10px">已成功向 {{toAccount}} 账户转账 {{transAmount}} WOO</p>
        <!-- https://kovan.etherscan.io/tx/0x7cad5cde612bba8272a5f5512dcd777031d08e67ecc1e5973f51fb80f994065b -->
        <a :href='"https://etherscan.io/tx/" + genrateTxHash' target="_blank" style="color: #a9a9a9;">
          >>点击查看更多交易详情
        </a>
      </div>
      <!-- 股权上链功能 -->
      <h2 style="margin-top: 60px">股权上链</h2>
      <form class="needs-validation">
        <div class="form-group row">
          <label for="depositTo" class="col-sm-2 col-form-label">depositTo:</label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id="depositTo" v-model="depositTo" placeholder="请输入股权委托方账户地址">
            <div class="invalid-feedback">
              Please provide a valid account address.
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="depositNums" class="col-sm-2 col-form-label">depositNums:</label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id="depositNums" v-model="depositNums" placeholder="请输入股权委托数量">
            <div class="invalid-feedback">
              Please provide a valid amount to transfer.
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="requireTokens" class="col-sm-2 col-form-label">requireTokens:</label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id="requireTokens" v-model="requireTokens" placeholder="请输入股权置换的玄武币数量">
            <div class="invalid-feedback">
              Please provide a valid amount to transfer.
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="proofHash" class="col-sm-2 col-form-label">proofHash:</label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id="proofHash" v-model="proofHash" placeholder="请输入协议地址哈希">
            <div class="invalid-feedback">
              Please provide a valid amount to transfer.
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="proofFileUrl" class="col-sm-2 col-form-label">proofFileUrl:</label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id="proofFileUrl" v-model="proofFileUrl" placeholder="请输入协议文件网址">
            <div class="invalid-feedback">
              Please provide a valid amount to transfer.
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="button" class="btn btn-primary" @click="depositShare">发送</button>
          </div>
        </div>
      </form>
      <div v-if="showDepositShare">
        <p style="margin-bottom: 10px">股权上链成功，交易地址为{{ depositShareResult }}</p>
        <a :href='"https://etherscan.io/tx/" + depositShareResult' target="_blank" style="color: #a9a9a9;">
          >>点击查看更多交易详情
        </a>
      </div>
      <!-- 交易信息查询功能 -->
      <h2 style="margin-top: 60px">交易信息查询</h2>
      <p>交易确认之后可以通过交易hash查询exchangeId</p>
      <form class="needs-validation">
        <div class="form-group row">
          <div class="col-sm-6">
            <input type="text" class="form-control" id="txQuery" v-model="txAddress" placeholder="请输入交易地址">
            <div class="invalid-feedback">
              Please provide a valid account address.
            </div>
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-primary" @click="scanTx">查询</button>
          </div>
        </div>
      </form>
      <div v-if="showTx">
        <p style="margin-bottom: 10px">交易Hash: {{ txInfo }}</p>
        <p style="margin-bottom: 10px">exchangeId: {{ exchangeId }}</p>
        <a v-if="showDetail" :href='"https://etherscan.io/tx/" + txAddress' target="_blank" style="color: #a9a9a9;">
          >>点击查看更多账户详情
        </a>
      </div>
      <!-- 股权购买功能 -->
      <h2 style="margin-top: 60px">股权购买</h2>
      <form class="needs-validation">
        <div class="form-group row">
          <div class="col-sm-6">
            <input type="text" class="form-control" id="purchaseShare" v-model="exchangeId1" placeholder="请输入exchangeId">
            <div class="invalid-feedback">
              Please provide a valid account address.
            </div>
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-primary" @click="purchaseShare">查询</button>
          </div>
        </div>
      </form>
      <div v-if="showPurchaseShare">
        <p style="margin-bottom: 10px">股权交易成功, 交易Hash: {{purchaseShareResult}}</p>
        <a :href='"https://etherscan.io/tx/" + purchaseShareResult' target="_blank" style="color: #a9a9a9;">
          >>点击查看更多交易详情
        </a>
      </div>
      <!-- 股权上链信息查询功能 -->
      <h2 style="margin-top: 60px">股权上链信息查询</h2>
      <form class="needs-validation">
        <div class="form-group row">
          <div class="col-sm-6">
             <!-- -->
            <input type="text" class="form-control" id="depositInfo" v-model="exchangeId2" placeholder="请输入exchangeId">
            <div class="invalid-feedback">
              Please provide a valid account address.
            </div>
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-primary" @click="depositInfo">查询</button>
          </div>
        </div>
      </form>
      <div v-if="showDepositInfo">
        <p style="margin-bottom: 10px">股权上链信息: {{depositInformation}}</p>
        <a :href='"https://etherscan.io/tx/" + depositInformation' target="_blank" style="color: #a9a9a9;">
          >>点击查看更多股权上链信息
        </a>
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
      balance: '',
      // 法币/WOO = ratio
      ratio: 1,
      toAccount: '',
      // 转账金额
      transAmount: '',
      showTransfer: false,
      genrateTxHash: '',
      depositTo: '',
      depositNums: '',
      requireTokens: '',
      proofHash: '',
      proofFileUrl: '',
      depositShareResult: '',
      showDepositShare: '',
      purchaseShareResult: '',
      showPurchaseShare: false,
      depositInformation: '',
      showDepositInfo: false,
      txAddress: '',
      txInfo: '',
      showTx: false,
      showDetail: false,
      exchangeId: '',
      exchangeId1: '',
      exchangeId2: ''
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
      this.$store.state.contractInstance().balanceOf(this.accountAddress, (err, balance, reject) => {
        if (err) {
          // If we can't find a networkId keep result the same and reject the promise
          reject(new Error('Unable to retrieve network ID'))
        } else {
          this.balance = balance.toNumber() / 1e+18
          this.showAccount = true
          // this.accountAddress = ''
        }
      })
    },
    transfer () {
      this.$store.state.contractInstance().transfer(this.toAccount, this.transAmount,
        { from: this.$store.state.web3.coinbase }, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log(result)
            // this.toAccount = ''
            // this.transAmount = ''
            alert('转账成功')
            this.genrateTxHash = result
            this.showTransfer = true
          }
        })
    },
    depositShare () {
      this.$store.state.contractInstance().depositShare(
        this.depositTo, this.depositNums, this.requireTokens, this.proofHash, this.proofFileUrl
        , { from: this.$store.state.web3.coinbase }, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            alert('股权上链成功')
            this.depositShareResult = result
            this.showDepositShare = true
            console.log('股权上链返回结果')
            console.log(result)
          }
        }
      )
    },
    purchaseShare () {
      this.$store.state.contractInstance().purchaseShare(this.exchangeId1,
        { from: this.$store.state.web3.coinbase },
        (err, result) => {
          if (err) {
            console.log(err)
          } else {
            alert('股权购买成功')
            this.purchaseShareResult = result
            this.showPurchaseShare = true
            console.log(result)
            console.log(this.exchangeId1)
          }
        })
    },
    depositInfo () {
      this.$store.state.contractInstance().depositInfo(this.exchangeId2,
        { from: this.$store.state.web3.coinbase },
        (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log(this.exchangeId2)
            console.log(result)
            this.depositInformation = result
          }
        })
    },
    scanTx () {
      console.log('交易信息')
      this.$store.state.web3.web3Instance().eth.getTransaction(this.txAddress, (err, result, reject) => {
        if (err) {
          // If we can't find a networkId keep result the same and reject the promise
          console.log(err)
          reject(new Error('Unable to retrieve network ID'))
        } else {
          this.showTx = true
          if (result) {
            this.txInfo = result.hash
            this.showDetail = true
          } else {
            this.txInfo = '交易还未确认，请稍后查询'
          }
        }
      })
      // 从 DepositEvent 事件中获取 exchangeId { 'transactionHash': this.txAddress }, { fromBlock: 0, toBlock: 'latest' },
      let flag = false
      this.$store.state.contractInstance().DepositShare({ 'transactionHash': this.txAddress }, { fromBlock: 0, toBlock: 'latest' },
        (err, result) => {
          if (err) {
            console.log(err)
          } else {
            if (result.transactionHash === this.txAddress) {
              console.log('DepositShare 事件')
              console.log(result)
              this.exchangeId = result.args.exchangeId
              console.log('exchangeId 测试结果')
              console.log(this.exchangeId)
              flag = true
            } else {
              if (flag === false) {
                this.exchangeId = '交易还未确认，请稍后查询'
              }
            }
          }
        }
      )
    }
  }
}
</script>

<style scoped>
.wrap {
  margin-top: 15px;
  margin-bottom: 15px;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 90%;
  vertical-align: middle;
}
form {
  margin-bottom: 20px;
}
.form-control {
  /* min-width: 420px; */
  margin-right: 15px;
}
p {
  word-break: break-word;
}
.btn {
  margin-bottom: 1rem;
}
@media (min-width: 576px) {
  .btn {
    margin-bottom: 0;
  }
  .form-inline {
    margin-bottom: 1rem;
  }
}
</style>
