let mutations = {
  addParters (state, payload) {
    state.partners = payload
  },
  addMarkets (state, payload) {
    state.markets = payload
  },
  addExchangeRate (state, payload) {
    state.exchangeRate = payload
  },
  addTransactions (state, payload) {
    state.transactions = payload
  }
}

export default mutations
