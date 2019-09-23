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
      <div class="row" :key = "index" v-for="(x,index) in history">
        <div class="row" >
          {{x}}

        </div>
      </div>
      <button class="btn btn-danger" @click = "clear_his">Clear History</button>
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
  computed:{
    funds(){
      return this.$store.getters.funds;
    },
    cStocks(){
      return this.$store.getters.current_stock;
    },
    portf(){
      return this.$store.getters.stockPortfolio;
    },
    history(){
      return this.$store.getters.history;
    }
  },
  methods:{
    ...mapActions([
      'clear_his'
    ]),
    clear_his(){
      this.clear_his;
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
