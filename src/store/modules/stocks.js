import stocks from "../../data/stocks.js"

const state = {
  stocks: []
}
const mutations = {
  setsStock(state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS'(satate) {

  }
}
const actions = {
  buyStock({
    commit
  }, order) {
    commit('mbuyStock', order)

  },
  setStocks({
    commit
  }) {
    commit('setsStock', stocks)
  },
  randomisestock({
    commit
  }) {
    commit('RND_STOCKS')
  }
}
const getters = {
  stocks: (state) => {
    return state.stocks;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
