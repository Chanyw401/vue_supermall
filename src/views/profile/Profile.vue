<template>
    <div id="profile">
        <nav-bar class="nav-bar"><div slot="center">个人信息</div></nav-bar>
        <user-info/>
        <account-info/>
        <normal-list-view/>
<!--        <normal-list-view/>-->
    </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import UserInfo from './childComps/UserInfo'
  import AccountInfo from './childComps/AccountInfo'
  import NormalListView from './childComps/NormalListView'

  export default {
    name: "Profile",
    components: {
      NavBar,
      UserInfo,
      AccountInfo,
      NormalListView
    }
  }
</script>

<style scoped>
    #profile {
        /*background-color: #eeeeee;*/
    }

    .nav-bar {
        background-color: var(--color-tint);
        color: #fff;
    }
</style>
