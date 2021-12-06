<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="pink">
            <img slot="item-icon" src="../../../assets/img/tab-bar/home.svg" alt=""/>
            <img slot="item-icon-active" src="../../../assets/img/tab-bar/home_active.svg">
            <div slot="item-text">首页</div>
        </tab-bar-item >
        <tab-bar-item path="/category" activeColor="red">
            <img slot="item-icon" src="../../../assets/img/tab-bar/category.svg" alt=""/>
            <img slot="item-icon-active" src="../../../assets/img/tab-bar/category_active.svg">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="green">
            <img slot="item-icon" src=../../../assets/img/tab-bar/shop_cart.svg alt=""/>
            <img slot="item-icon-active" src="../../../assets/img/tab-bar/shop_cart_active.svg">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="blue">
            <img slot="item-icon" src="../../../assets/img/tab-bar/profile.svg" alt=""/>
            <img slot="item-icon-active" src="../../../assets/img/tab-bar/profile_active.svg">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from "@/components/common/tabbar/TabBar";
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'   //当前同一个目录components，前面不需要再加./跳转出来

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
  }
</script>

<style>

</style>