<template>
<div>
  <div class="nvgSec">
    <b-navbar toggleable="md" variant="dark" class="headerNvg">
      <router-link to="home">首页</router-link>
      <router-link to="shop">商城</router-link>
      <router-link to="shoppage">商城New</router-link>
    </b-navbar>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'nvgSec',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App jjj',
      titleStr: '首页',
    }
  }
}
</script>

<style scoped>
.headerNvg {
  width: 100%;
  /* background: #fff; */
  height: 70px;
  color: white;
}
</style>


