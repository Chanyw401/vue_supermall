<template>
    <div id="tab-bar">
        <slot>
        </slot>
    </div>
</template>

<script>
  //import TabBarItem from './TabBarItem.vue'
  export default {
    name: 'TabBar',
    components:{

    }
  }
</script>

<style>
    #tab-bar{
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        left:0;right: 0;bottom: 0px;
        box-shadow: 0 -2px 2px rgba(100,100,100,0.25) ;

    }

</style>