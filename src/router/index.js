import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome'
import Home from '@/views/Home'
import Movies from '../views/watchContent/Movies.vue'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'
import UserProfile from '../views/user/UserProfile.vue'
import UserSettings from '../views/user/UserSettings.vue'
import Playlists from '../views/my-lists/Playlists.vue'
import BillBoard from '../views/movies-sections/BillBoard.vue'
import Outstandings from '../views/movies-sections/Outstandings.vue'
import Trailers from '../views/movies-sections/Trailers.vue'



const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  }, {
    path: '/',
    name: 'home',
    component: Home
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
    path: '/movies',
    name: 'movies',
    component: Movies
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
  }, {
    path: '/billboard',
    name: 'billboard',
    component: BillBoard
  }, {
    path: '/trailers',
    name: 'trailers',
    component: Trailers
  },{
    path: '/outstandings',
    name: 'outstandings',
    component: Outstandings
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
