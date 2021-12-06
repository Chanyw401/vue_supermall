<template>
    <div class="goods-list">
<!--        前面的:goods-item是指组件GoodsListItem中的props，后面的item是指本组件GoodsList中的props中的goods-->
        <goods-list-item v-for="item in goods" :goods-item="item"
           class="item">
        </goods-list-item>
    </div>

</template>

<script>
    import GoodsListItem from "@/components/content/goods/GoodsListItem";
    export default {
    name: "GoodsList",
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        /*让弹性盒元素在必要的时候拆行*/
        padding: 10px;
        justify-content: space-around;
    }

    .goods-list .item {
        width: 48%;
    }
</style>