import Home from "./components/Home.vue"
import Portfolio from "./components/portfolio/Portfolio.vue"
import Stocks from "./components//stocks/Stocks.vue"
import Header from "./components/Header.vue"




export const routes = [{
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: "/portfolio",
    component: Portfolio,
    name: 'portfolio'
  },
  {
    path: "/stocks",
    component: Stocks,
    name: 'stocks'
  },
  {
    path: "/header",
    component: Header,
    name: 'header'
  }
]
