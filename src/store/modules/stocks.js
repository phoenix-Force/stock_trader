import stocks from "../../data/stocks.js"

const state = {
  stocks: []
}
const mutations = {
  setsStock(state, stocks) {
    state.stocks = stocks
  },
  'rnd_stock'(state) {
    stocks.forEach((stock) => {
      stock.value = Math.round(stock.value * (1 + Math.random() - 0.5));
    })
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
    commit('rnd_stock')
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
