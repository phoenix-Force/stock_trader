const state = {
  funds: 100000,
  stocks: [],
  able: false,
  history: []
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
    state.funds -= order.quan * order.price;
    state.history.push({
      'Buy': {
        'name': order.name,
        'quan': order.quan,
        'total': order.quan * order.price
      }
    });
  },
  msellStock(state, order) {
    const record = state.stocks.find(element => element.id == order.id);
    if (order.quan < record.quantity) {
      record.quantity -= order.quan
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += order.quan * order.price;
    state.history.push({
      'Sell': {
        'name': order.name,
        'quan': order.quan,
        'total': order.quan * order.price
      }
    })

  },
  his_clear(state) {
    this.state.history = []
  }
}
const actions = {
  a_sellStock({
    commit
  }, order) {
    commit('msellStock', order)
  },
  clear_his({
    commit
  }) {
    commit('his_clear');
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
  },
  current_stock(state) {
    return state.stocks;
  },
  history(state) {
    return state.history;
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
