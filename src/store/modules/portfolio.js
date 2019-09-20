const state = {
  funds: 10000,
  stocks: []
}
const mutations = {
  mbuyStock(state, order) {
    const record = state.stocks.find(element => element.id == order.id);
    if (record) {
      record.quantity += order.quan
    } else {
      state.stocks.push({
        id: order.id,
        quantity: parseInt(order.quan)
      })
    }
    state.funds -= order.quan * order.price
  },
  msellStock(state, order) {
    const record = state.stocks.find(element => element.id == order.id);
    if (order.quan < record.quan) {
      record.quan -= order.quan
    } else {
      state.stocks.splice(state.stocks.indexOf(record))
    }
    state.funds += order.quan * order.price

  }
}
const actions = {
  a_sellStock({
    commit
  }, order) {
    commit('msellStock', order)
  }
}
const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        value: record.value
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
