<template>
    <div class="cart-list">
        <!--        <scroll class="content_1">-->
        <cart-list-item v-for="(item,index) in list" :key="index"
                        :product="item"
        ></cart-list-item>
        <cart-bottom-bar></cart-bottom-bar>
        <!--        </scroll>-->

    </div>
</template>


<script>
  import Scroll from "@/components/common/scroll/Scroll";
  import CartListItem from "@/views/cart/childComps/CartListItem";
  import {mapGetters} from 'vuex';
  import CartBottomBar from "@/views/cart/childComps/CartBottomBar";
  export default {
    name:"CartList",
    components:{
      Scroll,
      CartListItem,
      CartBottomBar
    },
    computed:{
      ...mapGetters({
        list:'cartList'
      })
    }
  }
</script>

<style scoped>
    .cart-list{
        height:100%;
        margin-top: 49px
    }
    /*.content_1{*/
    /*    height :calc(100% - 49px);*/
    /*    overflow :hidden;*/
    /*}*/
</style>