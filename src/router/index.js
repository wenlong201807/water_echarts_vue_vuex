import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/pages/mainPage.vue';
import CountPage from '@/components/Count.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/count',
      name: 'CountPage',
      component: CountPage
    }
  ]
});
