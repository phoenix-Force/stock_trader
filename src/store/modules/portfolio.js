const state = {
  funds: 10000,
  stocks: []
}
const mutations = {
  mbuyStock(state, {
    stockId,
    quantity,
    stockPrice
  }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= quantity * stockPrice
  },
  msellStock(state, {
    stockId,
    quantity,
    stockPrice
  }) {
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record))
    }
    state.funds += quantity * stockPrice

  }
}
const actions = {
  a_sellStock({
    commit
  }, order) {
    commit('msellStock')
  }
}
const getters = {
  stockportfolio(state, getters) {
    return state.stock.map((stock) => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    });
  },
  funds(state) {
    return state.funds;
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
