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
        <router-link class="nav-link pull-right" to=""><a>End day</a></router-link>
      </li>
    </ul>
      <div class="pull-right">
        <h4>Funds:$$ {{funds}}</h4>
      </div>
        <div class="dropdown pull-right">
           <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">p
            <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">Save</a></li>
            <li><a href="#">Load</a></li>
          </ul>
        </div>



  </div>
</nav>


</template>
<script>

export default {
  computed:{
    funds(){
      return this.$store.getters.funds;
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
