<template>
    <div class="account">
        <div class="account-item">
            <div class="number">
                <span class="balance">0.00</span>元
            </div>
            <div class="account-info">我的余额</div>
        </div>
        <div class="account-item">
            <div class="number">
                <span class="balance">0</span>个
            </div>
            <div class="account-info">我的优惠</div>
        </div>
        <div class="account-item">
            <div class="number">
                <span class="balance">0</span>分
            </div>
            <div class="account-info">我的积分</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "AccountInfo"
  }
</script>

<style scoped>
    .account {
        display: flex;
        height: 90px;
        border-bottom: 10px solid rgba(238, 238, 238, 0.7);
    }

    .account-item {
        width: 100%;
        background-color: #fff;
        margin-right: 1px;
        text-align: center;
    }

    .account-item:last-of-type {
        margin-right: 0;
    }

    .account-item {
        color: #666;
        font-size: 15px;
        padding: 18px;
    }

    .account-item .balance {
        font-size: 18px;
        font-weight: 700;
        color: #ff5f3e;
    }

    .account-info {
        margin-top: 8px;
    }

</style>