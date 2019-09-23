<template>
<nav class="navbar navbar-expand-lg " style="background-color:#3939ac">
  <router-link to="/" class = "navbar-brand">Stock Trader</router-link>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/"><a>Home</a></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/portfolio"><a>Portfolio</a></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/stocks"><a>Stocks</a></router-link>
      </li>
      <li class="nav-item">
        <button class="nav-link pull-right" @click = "endDay"><a>End day</a></button>
      </li>
    </ul>
      <div class="pull-right">
        <h4>Funds:{{funds | currency}}</h4>
      </div>
        <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>




  </div>
</nav>


</template>
<script>
import {mapActions} from "vuex"
export default {
  computed:{
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods:{
    ...mapActions([
      'randomisestock'
    ]),
    endDay(){
      this.randomisestock();
    }

  }

}
</script>

<style lang="scss" scoped>
nav{
  cursor: pointer;
}
a{
  color:white;
}
a:hover{
  color:black;
}
h4{
  color:white;
}

</style>
