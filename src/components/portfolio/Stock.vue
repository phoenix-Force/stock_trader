<template>
  <!-- <div class="row" > -->
    <div class="col-sm-3" style="folat:left;margin-top:10px; border:1 px solid black;">
      <div class = "panel panel-primary" >
        <div class = "panel-heading">
          <h3 class = "panel-title font-weight-bold	 " style="color:#0f0f2d">
            {{stock.name}}
            (<small class= "text-right font-size-8">price:({{stock.value}}|{{stock.quantity}})</small>)
          </h3>
        </div>
        <div class = "panel-body ">
          <div class="pull-left">
            <input type="number" placeholder = "quantity" class="col-sm-8" v-model = "quantity" name="" id="">
            <button class="btn btn-warning pull-right col-sm-3 pull-right" @click = "buy" :disabled="quantity<=0 ">Sell</button>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
import {mapAction} from "vuex"
export default {
  props:['stock'],
  data(){
    return{
      quantity:0
    }
  },
  methods:{
    ...mapAction([
      'a_sellStock'
    ]),
    sellStock(){
      const order={
        stockId:this.stock.id,
        stockPrice:this.stock.price,
        quantity:this.quantity
      }
      this.a_sellStock()
    }
  }

}
</script>

<style lang="scss" scoped>
  .style{
    margin-top:5px;
    border:1 px solid black;
  }
</style>

