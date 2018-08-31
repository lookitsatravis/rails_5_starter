import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Home from '../containers/Home';
import PageNotFound from '../containers/PageNotFound';

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      name: '404',
      component: PageNotFound,
    },
  ],
});

export default router;
