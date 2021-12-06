<template>
    <div id="home">
        <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
        <tab-control class="tab-control_1" :titles="['流行','新款','精选']"
                     @tabClick="tabClick" ref="tabControl_1"
                     v-show="isTabFixed">
        </tab-control>
        <scroll
                class="content_1"
                ref="scroll_1"
                :probe-type="3"
                @scroll="contentScroll"
                :pull-up-load = "true" @pulling="loadMore">
<!--            前面的banners是指home-swiper组件里的props，后面的banners是指Home.vue里的data里的banners-->
            <home-swiper :banners="banners" @swiperLoaded="swiperImageLoad"></home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control  :titles="['流行','新款','精选']"
                         @tabClick="tabClick" ref="tabControl_2">
            </tab-control>
            <goods-list :goods="goods[currentType].lists"></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
    import NavBar from "@/components/common/navbar/NavBar";
    import HomeSwiper from "@/views/home/childComps/HomeSwiper";
    import RecommendView from "@/views/home/childComps/RecommendView";
    import FeatureView from "@/views/home/childComps/FeatureView";
    import TabControl from "@/components/content/tabControl/TabControl";
    import {getMultiData,getHomeGoods} from "@/network/home";
    import GoodsList from "@/components/content/goods/GoodsList";
    import Scroll from "@/components/common/scroll/Scroll";
    import BackTop from "@/components/content/backTop/BackTop";
    export default {
      name:"Home",
      components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
      },
      data(){
        return {
          banners: [],
          recommends:[],
          goods:{
            pop:{page:0,lists:[]},
            new:{page:0,lists:[]},
            sell:{page:0,lists:[]}
          },
          currentType:'pop',
          isShowBackTop:false,
          tabOffSetTop:0,
          isTabFixed:false,
          offsetTop: 0,
          saveY: 0
        }
      },
      created(){
        //1.请求多个数据
        this._getMultiData()
        //2.请求商品数据
        this._getHomeGoods('pop')
        this._getHomeGoods('new')
        this._getHomeGoods('sell')
        //3.监听item中图片加载完成
        // this.$bus.$on('itemImageLoad',()=>{
        //   this.$refs.scroll_1.scroll.refresh()
        // })
      },
      methods: {
        // 事件监听的方法
        tabClick(index){
            switch (index) {
                case 0:
                  this.currentType = 'pop'
                break
                case 1:
                  this.currentType = 'new'
                break
                case 2:
                  this.currentType = 'sell'
                break
            }
            this.$refs.tabControl_1.currentIndex = index
            this.$refs.tabControl_2.currentIndex = index
        },
        // 请求网络数据的方法
        _getMultiData() {
          getMultiData().then(res => {
            this.banners = res.data.banner.list;  //这个方法用来将数据传递到banners
            this.recommends = res.data.recommend.list;//同上
          })
        },
        _getHomeGoods(type) {
          const page = this.goods[type].page +1
          getHomeGoods(type,page).then(res =>{
            console.log(res)
            const newList = res.data.list
            this.goods[type].lists.push(...newList)
            this.goods[type].page +=1
            this.$refs.scroll_1.finishPullUp_1()
          })
        },
        backClick(){
          // this.$refs.scroll.scroll.scrollTo(0,0)
          //这里的$refs.scroll_1是为了得到组件scroll_1,即上面的ref="scroll_1",后面的.scroll是组件里的data数值,再后来的scrollTo是better-scroll的一个方法
          this.$refs.scroll_1.scrollTo_1(0,0,500)
          //这里的$refs.scroll_1是为了得到组件scroll_1,即上面的ref="scroll_1",后面的.scrollTo_1是自己的Scroll.vue
          // 里封装的一个方法，体现了封装思想
        },
        contentScroll(position){
          this.isShowBackTop = -position.y > 1000
          this.isTabFixed = (-position.y-49) > this.tabOffSetTop
        },
        loadMore(){
          this._getHomeGoods(this.currentType)
        },
        swiperImageLoad(){
          this.tabOffSetTop = this.$refs.tabControl_2.$el.offsetTop
          // console.log(this.$refs.tabControl.$el.offsetTop);
        }
      },
      computed:{
        activate(){
          this.$refs.scroll_1.scroll.refresh()
          this.$refs.scroll_1.scrollTo_1(0,this.saveY,1)
        },
        deactivated(){
          this.saveY = this.$refs.scroll_1.scroll.y
        }
      }
    }
</script>

<style lang="stylus">
    #home{
        position: relative;
    }
    .home-bar{
        color #ffffff
        /*position fixed*/
        /*left 0*/
        /*right 0*/
        /*top 0*/
        /*z-index 6*/
    }
    .content_1{
        height 620px
        overflow hidden
        /*margin-top 49px*/
        /*position absolute*/
        /*top 44px*/
        /*bottom 49px*/
        /*left 0*/
        /*right 0*/

    }
    .tab-control_1{
        position: relative;
        margin-top:49px
        z-index:9
    }
</style>