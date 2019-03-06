import Vue from 'vue';
import Router from 'vue-router';
import Public from './components/Public.vue';
import about from './components/about.vue';
import schedules from '@/components/schedules.vue';
import settings from '@/components/settings.vue';
import tvpanel from '@/components/tvpanel.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'map',
      component: Public,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/schedules',
      name: 'schedules',
      component: schedules,
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings,
    },
    {
      path: '/tvpanel',
      name: 'tvpanel',
      component: tvpanel,
    },
  ],
});
