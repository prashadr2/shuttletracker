import Vue from 'vue';
import Router from 'vue-router';
import Public from './components/Public.vue';
import about from './components/about.vue';
import schedules from '@/components/schedules.vue';
import settings from '@/components/settings.vue';
import feedback from '@/components/feedback.vue';
import etas from '@/components/etas.vue';
import Resources from '@/resources';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: Resources.BasePath,
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
      path: '/etas',
      name: 'etas',
      component: etas,
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
      path: '/feedback',
      name: 'feedback',
      component: feedback,
    },
  ],
});
