import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/Contact'
import comment from '@/components/comment'
import notfound from '@/components/nofound'
import goods from '@/components/goods'
import header from '@/components/header'
import footer from '@/components/footer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/goods',
      name: 'home',
      component: goods
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,

    },
    {
      path: '/header',
      name: 'header',
      component: header,
    },
    {
      path: '*',
      name: 'notfound',
      // 显示404页面
      component: notfound,
      //页面重定向,跳转到首页
      // redirect: '/home'
    }
  ]
})
