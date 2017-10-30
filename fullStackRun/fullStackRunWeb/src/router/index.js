import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: r => require.ensure([], () => r(require('../pages/account/login/')), 'group-account'),
      // children: []
    },
    {
      path: '/login',
      name: 'login',
      component: r => require.ensure([], () => r(require('../pages/account/login/')), 'group-account'),
      // children: []
    },
    {
      path: '/register',
      name: 'register',
      component: r => require.ensure([], () => r(require('../pages/account/register/')), 'group-account'),
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: r => require.ensure([], () => r(require('../pages/tabs/')), 'group-tabs'),
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition);
  },
  beforeEach(to, from, next) {
    console.log(333);
  }
})
