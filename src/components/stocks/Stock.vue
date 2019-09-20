<template>
  <!-- <div class="row" > -->
    <div class="col-sm-3" style="folat:left;margin-top:10px; border:1 px solid black;">
      <div class = "panel panel-primary" >
        <div class = "panel-heading">
          <h3 class = "panel-title font-weight-bold	 " style="color:#0f0f2d">
            {{stock.name}}
            <small class= "text-right font-size-7">(price:{{stock.value}})</small>
          </h3>
        </div>
        <div class = "panel-body ">
          <div class="pull-left">
            <input type="number" placeholder = "quantity" class="col-sm-8" :class ="{danger:able}" v-model = "quantity" name="" id="">
            <button class="btn btn-warning pull-right col-sm-3 pull-right" @click = "buy" :disabled="able || quantity<=0 ">Buy</button>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
export default {
  props:['stock'],
  data(){
    return{
      quantity:0
    }
  },
  methods:{
    buy(){
      let order

         order = {
          id:this.stock.id,
          price:this.stock.value,
          quan:parseInt(this.quantity)
        }


      this.quantity = 0;
      this.$store.dispatch('buyStock',order)
      console.log(order)
    }
  },computed:{
    funds(){
      return this.$store.getters.funds
    },
    able(){
      return this.quantity * this.stock.value > this.funds
    }
  }

}
</script>

<style lang="scss" scoped>
.danger{
  border:1px solid red;
  color:red;
}
  .style{
    margin-top:5px;
    border:1 px solid black;
  }
</style>
