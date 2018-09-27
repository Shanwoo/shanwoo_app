import axios from 'axios'

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
  }
}

export default actions
