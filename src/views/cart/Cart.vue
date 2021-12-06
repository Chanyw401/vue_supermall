<template>
    <div>
        <nav-bar class="nav-bar_1">
            <div slot="center">购物车({{length}})</div>
        </nav-bar>
        <cart-list class="cart-list"></cart-list>
    </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import CartList from "@/views/cart/childComps/CartList";
  import {mapGetters} from 'vuex'
  export default {
    name:"Cart",
    components: {
      NavBar,
      CartList
    },
    computed:{
      ...mapGetters({
        length:'cartLength',
        list : 'cartList'
      })
    }
  }
</script>

<style lang="stylus">
    .nav-bar_1{
        background-color var(--color-tint)
        color white
        font-size 600
    }
    .cart-list{
        margin-top 49px
    }

</style>
