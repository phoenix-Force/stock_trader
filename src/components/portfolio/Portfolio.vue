<template>
<div class="container">
<app-stock :key="index" v-for="(stock,index) in dStocks" :stock="stock"></app-stock>

</div>
</template>
<script>
import stocks from "./Stock.vue"
import { mapGetters } from 'vuex'
export default {
  components:{
    appStock:stocks
  },
  computed:{
    ...mapGetters({
      dStocks:'stockPortfolio'
    })
  }

}
</script>

<style lang="scss" scoped>

</style>
