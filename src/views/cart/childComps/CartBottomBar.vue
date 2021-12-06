<template>
    <div class="bottom-menu">
        <check-button class="select-all" @click.native="checkBtnClick"
                     :is-checked = "isSelectAll"></check-button>
        <span>全选</span>
        <span class="total-price">合计: ¥{{totalPrice}}</span>
        <span class="buy-product">去计算({{cartLength}})</span>
    </div>
</template>

<script>
  import CheckButton from './CheckButton'
  import { mapGetters } from 'vuex'

  export default {
    name: "BottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters([
        'cartList',
        'cartLength'
      ]),
      totalPrice() {
        const cartList = this.cartList;
        return cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {   //reduce方法求各项之和 0为初始值
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      isSelectAll: function (){    //判断是否全选
        if (this.cartList.length === 0)return false  //如果商品为0，直接不全选
        return !this.cartList.find(item => !item.checked)  //如果有未选中，说明此时find为正，再取反即为false
      }
    },
    methods: {
      checkBtnClick: function () {
        // 1.判断是否有未选中的按钮
        let isSelectAll_1 = this.$store.getters.cartList.find(item => !item.checked);

        // 2.有未选中的内容, 则点击一下变成全选
        if (isSelectAll_1) {
          this.$store.state.cartList.forEach(item => {
            item.checked = true;
          });
        } else {  //如果为全选中，则点击一下变成未全选
          this.$store.state.cartList.forEach(item => {
            item.checked = false;
          });
        }
      }
    }
  }
</script>

<style scoped>
    .bottom-menu {
        width: 100%;
        height: 44px;
        background-color: #eee;
        position: fixed;
        bottom: 49px;
        left: 0;
        box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
        font-size: 14px;
        color: #888;
        line-height: 44px;
        padding-left: 35px;
        box-sizing: border-box;
    }

    .bottom-menu .select-all {
        position: absolute;
        line-height: 0;
        left: 12px;
        top: 13px;
    }

    .bottom-menu .total-price {
        margin-left: 15px;
        font-size: 16px;
        color: #666;
    }

    .bottom-menu .buy-product {
        background-color: orangered;
        color: #fff;
        width: 100px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        float: right;
    }
</style>
