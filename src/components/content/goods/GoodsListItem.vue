<template>
    <div class="goods-item" @click="goodsClick">
        <img v-lazy="showImage" alt="">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.img
          // || this.goodsItem.show.img
      }
    },
    methods:{
      goodsClick(){
        // console.log('详情页跳转');
        this.$router.push('/detail/'+ this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
    .goods-item {
        padding-bottom: 40px;
        position: relative;
    }

    .goods-item img {
        width: 98%;
        border-radius: 5px;
    }
    .goods-info {
        font-size: 12px;
        position: absolute;
        /*bottom:5px;*/
        left:3px;
        right: 0;
        /*overflow: hidden;*/
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        /*显示省略符号来代表被修剪的文本*/
        text-overflow: ellipsis;
        /*//文本不会换行,直到遇到/br为止,加上oveflow属性可以处理文本过长*/
        white-space: nowrap;
        margin-bottom: 5px;
    }

    .goods-info .price {
        color: pink;
        margin-right: 20px;
    }

    .goods-info .collect {
        position: relative;
    }

    .goods-info .collect::before {
        /*//这里用伪元素 ::before在collect元素之前添加样式，必须配合content使用*/
        content: '';
        position: absolute;
        left: -16px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: pink url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>