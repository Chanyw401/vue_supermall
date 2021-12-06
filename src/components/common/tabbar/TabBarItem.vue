<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if = "isActive"><slot name="item-icon"></slot></div>
        <!--//如果为true，则显示item-icon插槽-->
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name ="item-text"></slot></div>
        <!--//动态获取style-->
    </div>
</template>

<script>
  export default {
    name:"TabBarItem",
    props:{

      path:String
    },
     // data(){
     // 	return {
     // 		isActive:false,
     // 	}
     // },
    computed: {
      isActive(){           //计算当前路径，这里的思想要深刻体会
        return this.$route.path.indexOf(this.path)===-1
        //  this.$route.path是指当前活跃的路径，即点击时获取的路径，
//      		indexOf(this.path)是指四个item的路径
//      		假设当前的是 /home  -> item1(/home) ,说明匹配的上,为true
//      		           /home  -> item2(/cart)
//      		           /home  -> item3(/category)    这三个都为false,所以不会返回
//      		           /home  -> item4(/profile)
      },
      activeStyle(){
        return this.isActive?{}:{color:'deeppink'}   //请求是否处于活跃，如果活跃，返回activeColor，体现一种封装思想
      },

    },
    methods:{
      itemClick(){
        this.$router.push(this.path).catch(err=>{console.log('输出错误'),err});
//          console.log("item");
      },
    },
  };

</script>

<style>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 15px;
        /*  	color: lightcoral;*/
    }
    .tab-bar-item img{
        width:24px;
        height: 24px;
        margin-top:4px ;
    }


</style>