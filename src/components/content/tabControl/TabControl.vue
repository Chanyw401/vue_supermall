<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(item,index) in titles" :key="index"
        :class="{active: index === currentIndex}" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return{
        currentIndex : 0
      }
    },
    methods:{
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style lang="stylus">
    .tab-control{
        display flex
        text-align center
        height 40px
        line-height 40px
        font-size 16px

    }
    .tab-control-item{
        flex 1
    }
    .tab-control-item span{
        padding-bottom 5px
    }
    .active{
        color hotpink
    }
    .active span{
        border-bottom: 2px solid hotpink;
    }
</style>