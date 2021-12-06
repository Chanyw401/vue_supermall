<template>
    <div id="detail" >
        <detail-nav-bar @titleClick_1="titleClick" ref="nav"/>
        <scroll class="content_1" ref="scroll" :probe-type="3" @scroll="contentScroll">
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
<!--            <ul>-->
<!--                <li v-for="item in $store.state.cartList">{{item}}</li>-->
<!--            </ul>-->
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info="detailInfo" @imageLoad="detailImageLoad"></detail-goods-info>
            <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
            <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
            <goods-list :goods="recommends" ref="recommend"></goods-list>
        </scroll>
        <detail-bottom-bar @addCarts="addToCart"></detail-bottom-bar>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
        <toast ref="toast"></toast>
    </div>
</template>

<script>
  import {getDetail, getRecommend,Goods, Shop,GoodsParam} from "@/network/detail";
  import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
  import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
  import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
  import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
  import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";
  import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
  import BackTop from "@/components/content/backTop/BackTop";
  import {mapActions} from "vuex";
  import Toast from "@/components/common/toast/Toast";
  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      BackTop,
      Toast

    },
    data() {
      return {
        iid: null,
        topImages:[],
        goods: {},
        shop: {},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:null,
        offsetTop:0,
        currentIndex_1:0,
        isShowBackTop:false,

        // scroll:null
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid //这里的iid是 path:'/detail/:iid',
      //2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        console.log(res)
        const data = res.result //这里是将数据放在一个常量data，result是接口中的数据
        this.topImages = data.itemInfo.topImages
        //3.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        //4.获取商家信息
        this.shop = new Shop(data.shopInfo)
        //5.保存商品的详情数据
        this.detailInfo = data.detailInfo
        //6.保存商品的参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //7.商品的评论信息
        if(data.rate.list){
          this.commentInfo = data.rate.list[0]
        }
      })
      //3.请求推荐数据
      getRecommend().then(res =>{
        // console.log(res)
        this.recommends = res.data.list
      })
    },
    methods:{
      // ...mapActions(['addCart']),
      detailImageLoad(){  //这里是为了获取每个组件的offsetTop值
        // console.log(this.themeTopYs)
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTopYs)
      },
      titleClick(index){
        this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index])
      },
      backClick(){   //点击回到顶部
        // this.$refs.scroll.scroll.scrollTo(0,0)
        //这里的$refs.scroll_1是为了得到组件scroll_1,即上面的ref="scroll_1",后面的.scroll是组件里的data数值,再后来的scrollTo是better-scroll的一个方法
        this.$refs.scroll.scroll.scrollTo(0,0,500)
        //这里的$refs.scroll_1是为了得到组件scroll_1,即上面的ref="scroll_1",后面的.scrollTo_1是自己的Scroll.vue
        // 里封装的一个方法，体现了封装思想
      },
      contentScroll(position) {
        const positionY = -position.y
        let len = this.themeTopYs.length
        for(let i = 0; i < len; i++){
          if(this.currentIndex_1 !== i && ((i < len - 1 && positionY >= this.themeTopYs[i]
            && positionY < this.themeTopYs[i+1])||(i === len-1 && positionY >= this.themeTopYs[i]))){
            this.currentIndex_1 = i
            this.$refs.nav.currentIndex = this.currentIndex_1
          }
        }
        //是否显示回到顶部
        this.isShowBackTop = positionY > 1000
      },
      //添加到购物车
      addToCart() {
        //获取商品购物车信息
        const cartInfo = {}
        cartInfo.image = this.topImages[0]
        cartInfo.title = this.goods.title
        cartInfo.desc = this.goods.desc
        cartInfo.price = this.goods.realPrice
        cartInfo.iid = this.iid
        //将商品添加到购物车里
        console.log('-----');
        this.$store.dispatch('addCart',cartInfo).then(res =>{
          console.log(res)
          this.$toast.show(res,1500)
        })
      }
    }
  }
</script>

<style lang="stylus">
    #detail {
        position: relative
        z-index: 99
        background-color #fff
        /*height 100vh*/
    }
    .content_1{
        background-color #f6f6f6
        /*height 600px*/


    }



</style>
