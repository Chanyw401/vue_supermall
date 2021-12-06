<template>
    <div>
        <div class="toast" v-show="isShow">{{message}}</div>
    </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message,duration){
        this.isShow = true;
        this.message = message
        setTimeout(() =>{
            this.message = ''
            this.isShow = false
        },duration)
      }
    }
  }
</script>

<style scoped>
    .toast {
        position: fixed;
        left: 50%;
        top: 50%;
        background-color: rgba(0,0,0,.5);
        padding: 10px;
        border-radius: 5px;
        transform: translate(-50%,-50%);
        color:#fff;
        z-index: 200;
    }


</style>