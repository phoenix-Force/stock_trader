<template>
<div class="container row">
  <h2 class = "text-primary">Stock Trader</h2>
<dib class="row">

  <h1 class="text-dark">Your current funds is :{{funds}}</h1>
  <h1>Your Current Stocks are</h1>
  <div class="col-sm-6 pull-left" :key = "index" v-for="(stock,index) in cstocks">
    <div class="col-sm6"><h2 class="text-danger">{{stock.name}}</h2></div>
    <div class="col-sm6"><h3 class="text-info">{{stock.quan}}</h3></div>
  </div>

</dib>

</div>
</template>
<script>
export default {
  computed:{
    funds(){
      return this.$store.getters.funds;
    },
    cStocks(){
      return this.$store.getters.current_stock;
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
