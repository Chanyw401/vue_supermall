<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
  export default{
    name:'NavBar',

  }
</script>

<style>
    .nav-bar{
        display: flex;
        line-height: 49px;
        height: 49px;
        width:100%;
        text-align: center;
        position: fixed;top:0;left:0;right:0;
        z-index: 8;
        background-color: #ff8e97;
        color:white;

    }
    .left{
        width:66px;

    }
    .center{
        flex:1;
    }
    .right{
        width:66px;

    }
</style>