<template>
  <!-- <div class="row" > -->
    <div class="col-sm-3" style="folat:left;margin-top:10px; border:1 px solid black;">
      <div class = "panel panel-primary" >
        <div class = "panel-heading">
          <h3 class = "panel-title font-weight-bold	 " style="color:#0f0f2d">
            {{stock.name}}
            <small class= "text-right font-size-7">(P:{{stock.value}}|<small class="font-size-6">Q:{{stock.quantity}})</small></small>
          </h3>
        </div>
        <div class = "panel-body ">
          <div class="pull-left">
            <input type="number" placeholder = "quantity" :class ="{danger:able}" class="col-sm-8" v-model = "quantity" name="" id="">
            <button class="btn btn-warning pull-right col-sm-3 pull-right" @click = "sellStock" :disabled="able||quantity<=0 ">Sell</button>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
import {mapActions} from "vuex"
export default {
  props:['stock'],
  data(){
    return{
      quantity:0
    }
  },
  methods:{
    ...mapActions([
      'a_sellStock'
    ]),
    sellStock(){
      const order={
        id:this.stock.id,
        name:this.stock.name,
        price:this.stock.value,
        quan:parseInt(this.quantity)
      }
      console.log(order)
      this.a_sellStock(order)
    }
  },
  computed:{
    able(){
      return this.stock.quantity < this.quantity
    }
  }

}
</script>

<style lang="scss" scoped>
.danger{
  border:1px solid red;
}

  .style{
    margin-top:5px;
    border:1 px solid black;
  }
</style>

