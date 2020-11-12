import Vue from 'vue'
import Router from 'vue-router'
import Cinema from './views/Cinema/Cinema.vue'
import Mine from './views/Mine/Mine.vue'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      component: () => import('./views/Movie/Movie.vue'),
      children: [{
          path: 'city',
          component: () => import('./components/City/City.vue')
        },
        {
          path: 'nowPlaying',
          component: () => import('./components/NowPlaying/NowPlaying.vue')
        },
        {
          path: 'comingSoon',
          component: () => import('./components/ComingSoon/ComingSoon.vue')
        },
        {
          path: 'search',
          component: () => import('./components/Search/Search.vue')
        },
        {
          path:'/movie',    
          redirect:'/movie/nowPlaying'
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/mine',
      component: Mine
    }



    // ,
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})