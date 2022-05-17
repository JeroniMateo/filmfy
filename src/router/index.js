import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

import Movies from '../views/Movies.vue'
import MovieContent from '../views/watchContent/MovieContent.vue'

import BillBoard from '../views/BillBoard.vue'

import Outstandings from '../views/Outstandings.vue'

import Playlists from '../views/my-lists/Playlists.vue'
import ListContent from '../views/my-lists/ListContent.vue'


import VerMasCateogries from '../views/watchContent/VerMasCategories.vue'
import UserProfile from '../views/user/UserProfile.vue'
import UserSettings from '../views/user/UserSettings.vue'

import Register from '../views/user/Register.vue'
import Login from '../views/user/Login.vue'

import Search from '../views/SearchResults.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/movies/:id',
    name: 'movie-content',
    component: MovieContent
  },
  {
    path:'/movies/:category/:id',
    name: 'movie-content-category',
    component: VerMasCateogries
  },
  {
    path: '/billboard',
    name: 'billboard',
    component: BillBoard
  },

  {
    path: '/outstandings',
    name: 'outstandings',
    component: Outstandings
  },

  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists
  },
  {
    path: '/listContent/:id',
    name: 'ListContent',
    component: ListContent
  },

  {
    path: '/profile',
    name: 'profile',
    component: UserProfile
  },
  {
    path: '/settings',
    name: 'settings',
    component: UserSettings
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
    path: '/search/:query',
    name: 'search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
