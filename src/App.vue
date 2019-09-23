<template>
<div class="container-fluid" style="background-color:#eaeaf4">
  <app-header></app-header>
  <div class="row">
    <div class="col-xl-12">
      <transition name= "slide" mode="out-in">
        <router-view></router-view>
      </transition>
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
  .slide-enter-active{
    animation: slide-in 100ms ease-out forwards;
  }
  .slide-leave-active{
    animation: slide-out 100ms ease-out forwards;
  }
  @keyframes slide-in {
    from{
      transform: translateY(-50px);
      opacity: 0;
    }
    to{
      transform: translateY(0 px);
      opacity: 1;
    };
  }
   @keyframes slide-out {
    from{
      transform: translateY(0 px);
      opacity: 1;
    }
    to{
      transform: translateY(-50 px);
      opacity: 0;
    }
   }
</style>
