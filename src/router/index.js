import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Forum from '../views/main-pages/Forum.vue'
import News from '../views/main-pages/News.vue'
import Movies from '../views/watchContent/Movies.vue'
import Series from '../views/watchContent/Series.vue'
import Documentaries from '../views/watchContent/Documentaries.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/forum',
    name: 'forum',
    component: Forum
  },
  {
    path: '/news',
    name: 'news',
    component: News
  }, {
    path: '/movies',
    name: 'movies',
    component: Movies
  }, {
    path: '/series',
    name: 'series',
    component: Series
  },{
    path: '/documentaries',
    name: 'documentaries',
    component: Documentaries
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
