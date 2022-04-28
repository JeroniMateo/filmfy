import { createRouter, createWebHistory } from 'vue-router'
import WelcomeHome from '@/views/WelcomeHome'
import Forum from '../views/main-pages/Forum.vue'
import News from '../views/main-pages/News.vue'
import Movies from '../views/watchContent/Movies.vue'
import Series from '../views/watchContent/Series.vue'
import Documentaries from '../views/watchContent/Documentaries.vue'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'
import UserProfile from '../views/user/UserProfile.vue'
import UserSettings from '../views/user/UserSettings.vue'
import Playlists from '../views/mis-listas/Playlists.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: WelcomeHome
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
    name: 'Forum',
    component: Forum
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/series',
    name: 'series',
    component: Series
  },
  {
    path: '/documentaries',
    name: 'documentaries',
    component: Documentaries
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile
  },  {
    path: '/settings',
    name: 'settings',
    component: UserSettings
  }, {
    path: '/playlists',
    name: 'playlists',
    component: Playlists
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
