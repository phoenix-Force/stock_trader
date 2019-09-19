<template>
<div class="container-fluid" style="background-color:#eaeaf4">
  <app-header></app-header>
  <div class="row">
    <div class="col-xl-12">
      <router-view></router-view>
    </div>
  </div>




</div>
</template>
<script>
import Header from "./components/Header.vue"
export default {
  components:{
    appHeader:Header
  },
  created(){
    this.$store.dispatch('setStocks')
  }

}
</script>

<style lang="scss" scoped>

</style>
