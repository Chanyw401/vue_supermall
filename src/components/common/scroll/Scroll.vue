<template>
    <div class="wrapper" ref="wrapper" >
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        scroll: null, //数据名为scroll
        message: '哈哈哈'
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        observeDOM: true,
        observeImage:this.observeImage,
        click: true,
        probeType: this.probeType,
        pullUpLoad: {
          threshold: -20
        }
      })
      //2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      //3.监听上拉加载更多事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pulling')
      })
    },
    methods: {
      scrollTo_1(x, y, time = 300) {  //这里的scrollTo是自己封装的一个方法
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp_1() {
        this.scroll.finishPullUp()
      },
      // loadImage(){
      //   this.$bus.$emit('itemImageLoad')
      // }
    }
  }
</script>

<style scoped>

</style>