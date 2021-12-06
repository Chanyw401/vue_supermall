<template>
    <div id="detail">
        <nav-bar class="nav_bar">
            <div slot="left" class="back" @click="backClick">
                <img src="../../../assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" class="title_item"
                     @click="clickTitle(index)" :class="{active:index === currentIndex}">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  export default {
    name:"DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },

    methods:{
      clickTitle(index){
        this.currentIndex = index
        this.$emit('titleClick_1',index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
    .nav_bar{
        background-color :#ffffff
    }
    .title{
        display: flex
    }
    .title_item{
        flex : 1;
        color:black
    }
    .active{
        color: hotpink
    }
    .back{
        margin-top :8px

    }

</style>