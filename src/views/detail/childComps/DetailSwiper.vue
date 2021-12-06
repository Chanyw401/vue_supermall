<template>
    <div class="detail-swiper">
        <swiper class="swiper_1">
            <swiper-item  v-for="item in topImages">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import {Swiper,SwiperItem} from '../../../components/common/swiper'
  export default {
    name:"DetailSwiper",
    data(){
      return {

      }
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
        Swiper,
        SwiperItem
    },

  }
</script>

<style lang="stylus">
.swiper_1 {
    height 300px
    overflow hidden

}

</style>
