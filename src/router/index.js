import Vue from 'vue';
import Router from 'vue-router';
// import Hello from 'components/Hello'
// 直接使用 components路径

import Index from '../components/index/Index.vue';
import Home from '../components/home/Home.vue';
import Member from '../components/member/Member.vue';
import Classify from '../components/classify/Classify.vue';
import ShoppingCar from '../components/shoppingcar/ShoppingCar.vue';
import My from '../components/my/My.vue';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
  let data = JSON.parse(window.localStorage.getItem(to.name));
  if (savedPosition) {
    return savedPosition;
  } else {
    let y = 0;
    if (data) {
      y = data.y;
    }
    return {
      x: 0,
      y: y
    };
  }
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            saved: true
          }
        },
        {
          path: 'member',
          name: 'member',
          component: Member,
          meta: {
            saved: true
          }
        },
        {
          path: 'classify',
          name: 'classify',
          component: Classify,
          meta: {
            saved: true
          }
        },
        {
          path: 'shoppingcar',
          name: 'shoppingcar',
          component: ShoppingCar,
          meta: {
            saved: true
          }
        },
        {
          path: 'my',
          name: 'my',
          component: My,
          meta: {
            saved: true
          }
        }
      ]
    }
  ],
  scrollBehavior
});
