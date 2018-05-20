<template>
<div class="homePage">
  <b-navbar toggleable="md" variant="dark" class="headerNvg">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link to="home">首页</router-link>
    <router-link to="shop">商城</router-link>
   </b-navbar>
  <ShopList></ShopList>
  <FooterSec></FooterSec>
</div>
</template>

<script>
import CarouselCmp from './CarouselCmp.vue'
import CardList from './CardListCmp'
import FooterSec from './FooterCardCmp'
import SetpSec from './StepSecCmp'
import ShopList from './ShopList'

export default {
  name: 'homePage',
  data () {
    return {
      msg: '欢迎来到心探联盟',
      titleStr: '首页',
    }
  },
  components: {
    'CarouselCmp': CarouselCmp,
    'CardList': CardList,
    'FooterSec': FooterSec,
    'SetpSec': SetpSec
    // 'b-nav': b-nav,
    // 'b-nav-item': b-nav-item
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.headerNvg {
  width: 100%;
  /* background: #fff; */
  height: 70px;
  color: white;
}

h1 {
   margin: 0px;
  padding: 55px 0px 50px 0px;
  font-size: 34px;
  color: #21a1a8;
  text-align: center;
}

h4 {
  margin-top: 50px;
}

h4 a {
   color: #21a1a8;
}
</style>
