<template>
<div class="row" id="rw">
  <stock-panel :key="index" v-for="(stock,index) in stocks" :stock="stock"></stock-panel>



</div>
</template>
<script>
import stockPanel from "./Stock.vue"
export default {

  components:{
    stockPanel:stockPanel
  },
  computed:{
    stocks(){
      return this.$store.getters.stocks
    }
  }

}
</script>

<style lang="scss" scoped>
#rw{
  padding-top: 10px;
}

</style>
