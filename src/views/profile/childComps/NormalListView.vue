<template>
    <div class="listView">
        <div class="view-item">
            <div class="icon">
                <img src="../../../assets/img/profile/message.svg" alt="">
                <div class="info">我的信息</div>
            </div>
        </div>
        <div class="view-item">
            <div class="icon">
                <img src="../../../assets/img/profile/pointer.svg" alt="">
                <div class="info">积分商城</div>
            </div>
        </div>
        <div class="view-item">
            <div class="icon">
                <img src="../../../assets/img/profile/vip.svg" alt="">
                <div class="info">会员卡</div>
            </div>
        </div>
        <div class="view-item">
            <div class="icon">
                <img src="../../../assets/img/profile/cart.svg" alt="">
                <div class="info">我的购物车</div>
            </div>
        </div>
        <div class="view-item">
            <div class="icon">
                <img src="../../../assets/img/profile/shopping.svg" alt="">
                <div class="info">下载购物APP</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "AccountInfo"
  }
</script>

<style scoped>
    .listView{
        height: 500px;

    }
    .view-item .icon{
        height: 50px;
        position: relative;
        line-height: 50px;
        border-bottom:3px solid rgba(238,238,238,0.7)
    }
    .icon img{
        position: absolute;
        height: 25px;
        width: 25px;
        margin-top: 13px;
        left: 16px;
    }
    .icon .info{
        margin-left: 48px;
    }














    /*.account {*/
    /*    display: flex;*/
    /*    height: 90px;*/
    /*    border-bottom: 10px solid rgba(238, 238, 238, 0.2);*/
    /*}*/

    /*.account-item {*/
    /*    width: 100%;*/
    /*    background-color: #fff;*/
    /*    margin-right: 1px;*/
    /*    text-align: center;*/
    /*}*/

    /*.account-item:last-of-type {*/
    /*    margin-right: 0;*/
    /*}*/

    /*.account-item {*/
    /*    color: #666;*/
    /*    font-size: 15px;*/
    /*    padding: 18px;*/
    /*}*/

    /*.account-item .balance {*/
    /*    font-size: 18px;*/
    /*    font-weight: 700;*/
    /*    color: #ff5f3e;*/
    /*}*/

    /*.account-info {*/
    /*    margin-top: 8px;*/
    /*}*/

</style>

<!--<style scoped>-->
<!--    .normal-list {-->
<!--        background-color: #fff;-->
<!--        font-size: 15px;-->
<!--        color: #333;-->
<!--        margin-top: 15px;-->
<!--    }-->

<!--    .normal-list .item {-->
<!--        height: 44px;-->
<!--        line-height: 44px;-->
<!--        position: relative;-->
<!--    }-->

<!--    .icon img {-->
<!--        width: 20px;-->
<!--        height: 20px;-->
<!--    }-->

<!--    .item .icon {-->
<!--        margin-top: 10px;-->
<!--        position: absolute;-->
<!--        left: 16px;-->
<!--        top: -7px;-->
<!--    }-->

<!--    .item .info {-->
<!--        margin-left: 40px;-->
<!--        border-bottom: 1px solid rgba(100, 100, 100, 0.1);-->
<!--        padding-left: 5px;-->
<!--    }-->

<!--    .item:last-of-type .info {-->
<!--        border-bottom: none;-->
<!--    }-->
<!--</style>-->