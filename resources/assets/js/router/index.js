import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/HomePage'
import Shop from '../components/Shop'
import NvgPage from '../pages/NavigatePage'
import ShopPage from '../pages/ShopPage'

Vue.use(Router)

/*
  约定：
    url中，page命名 全小些
    page命名，以 功能名词 + page
    组件命名，以 【开发者前缀】+ 名词 + Cmp
*/


export default new Router({
  routes: [
    {
      path: '/',
      name: '导航栏',
      component: NvgPage,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
      // {
      //   path: '/shop',
      //   name: 'Shop',
      //   component: Shop
      // },
        {
         path: '/shoppage',   
         name: 'shoppage',
         component: ShopPage
        }
      ]
    }
  ]
})
