import axios from 'axios'
import getWeb3 from '@/util/getWeb3'
import getContract from '@/util/getContract'

let actions = {
  getPartners ({ commit }, payload) {
    axios.get('/api/partners').then(res => {
      commit('addParters', res.data)
    })
  },
  getMarkets ({ commit }, payload) {
    axios.get('/api/markets').then(res => {
      commit('addMarkets', res.data)
    })
  },
  getExchangeRate ({ commit }, payload) {
    axios.get('/api/exchange_rate').then(res => {
      commit('addExchangeRate', res.data)
    })
  },
  getTransactions ({ commit }, payload) {
    axios.get('/api/transactions').then(res => {
      commit('addTransactions', res.data)
    })
  },
  registerWeb3 ({commit}) {
    console.log('registerWeb3 Action being executed')
    getWeb3.then(result => {
      console.log('committing result to registerWeb3Instance mutation')
      commit('registerWeb3Instance', result)
    }).catch(e => {
      console.log('error in action registerWeb3', e)
    })
  },
  pollWeb3 ({commit}, payload) {
    console.log('pollWeb3 action being executed')
    commit('pollWeb3Instance', payload)
  },
  getContractInstance ({commit}) {
    getContract.then(result => {
      commit('registerContractInstance', result)
    }).catch(e => console.log(e))
  }
}

export default actions
