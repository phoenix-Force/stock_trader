<template>
<div class="container-fluid">
 <div class="container-fluid pull-left">
   <h1 class="text-center text-danger">Your Dashboard</h1>
 </div>
 <div class="row">
   <div class="col-sm-6 pull-left">
    <div class="container-fluid text-center">
      <h3 class="text-info">Your Data</h3>
      <div class="row">
        <div class="col-sm-6">
          <h1 class="text-center">Total-Funds</h1>
        </div>
        <div class="col-sm-6">
          <h1 class="text-center">{{funds | currency}}</h1>
        </div>
      </div>
      <hr>
      <div class="row bg-dark text-center" style="text-align:center;">
        <h1 class = "text-warning">Transaction History</h1>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-3">
          <h2 class="text-center">Action</h2>
        </div>
        <div class="col-sm-3">
          <h2 class="text-center">Name</h2>
        </div>
        <div class="col-sm-3">
          <h2 class="text-center">Quantity</h2>
        </div>
        <div class="col-sm-3">
          <h2 class="text-center">Total</h2>
        </div>
      </div>

        <div class="row border border-bottom-1 bg-success" :class = "{'background-color':cls}" style= "border-bottom:1 px solid black;" :key = "index" v-for="(x,index) in history">
          <div class="col-sm-3 text-dark">
            <h1 class="text-center">{{Object.keys(x)[0]}}</h1>
          </div>
          <div class="col-sm-3 text-dark">
            <h1 class="text-center">{{x[Object.keys(x)[0]].name}}</h1>
          </div>
          <div class="col-sm-3 text-dark">
            <h1 class="text-center">{{x[Object.keys(x)[0]].quan }}</h1>
          </div>
          <div class="col-sm-3 text-dark">
            <h1 class="text-center">{{x[Object.keys(x)[0]].total}}</h1>
          </div>
        </div>
        <!-- <div class="row border border-bottom-1 bg-danger" :class = "{'background-color':cls}" style= "border-bottom:1 px solid black;" :key = "index" v-for="(x,index) in history" v-else>
          <div class="col-sm-4 text-dark">
            <h1 class="text-center">{{x.Sell.name}}</h1>
          </div>
          <div class="col-sm-4 text-dark">
            <h1 class="text-center">+{{x.Sell.quan }}</h1>
          </div>
          <div class="col-sm-4 text-dark">
            <h1 class="text-center">-{{x.Sell.total}}</h1>
          </div>
        </div> -->


      <button class="btn btn-danger" @click = "clr_hs">Clear History</button>
    </div>
 </div>
  <div class="col-sm-5 bg-dark" style="float:right">
    <div class="container-fluid text-center">
      <h3 class="text-primary">Your Current Stocks</h3>
      <hr style="color:white;">
      <div class="container-fluid">
        <div :key= "index" v-for= "(x,index) in portf" class="row">
          <div class="col-sm-5 pull-left">
            <h2 class="text-info">{{x.name}}</h2>
          </div>
          <div class="col-sm-6 pull-right">
            <h2 class="text-warning">{{x.quantity}}</h2>
          </div>
        </div>
      </div>
    </div>
 </div>
 </div>
















  <!-- <h2 class = "text-primary">Stock Trader</h2>
<dib class="row">

  <h1 class="text-dark">Your current funds is :{{funds}}</h1>
  <h1>Your Current Stocks are</h1>
  <div class="col-sm-6 pull-left" :key = "index" v-for="(stock,index) in cstocks">
    <div class="col-sm6"><h2 class="text-danger">{{stock.name}}</h2></div>
    <div class="col-sm6"><h3 class="text-info">{{stock.quan}}</h3></div>
  </div>

</dib> -->

</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return{
      cls:false
    }
  },
  computed:{
        history(){
      return this.$store.getters.history;
    },
    funds(){
      return this.$store.getters.funds;
    },
    cStocks(){
      return this.$store.getters.current_stock;
    },
    portf(){
      return this.$store.getters.stockPortfolio;
    }

  },
  methods:{
    ...mapActions([
      'clear_his'
    ]),
    clr_hs(){
      this.clear_his();
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
