import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

import DetailedMoviePage from '@/views/movies/DetailedMoviePage'
import MainMoviesPage from '@/views/movies/MainMoviesPage'
import MovieCategories from '@/views/movies/MovieCategories'
import MovieYear from '@/views/movies/MovieYear'

import DetailedSeriePage from '@/views/series/DetailedSeriePage'
import MainSeriesPage from '@/views/series/MainSeriesPage'
import SerieCategories from '@/views/series/SerieCategories'
import SerieYear from '@/views/series/SerieYear'

import MainDocumentariesPage from '@/views/documentaries/MainDocumentariesPage'

import MainListsPage from '@/views/lists/MainListsPage'
import DetailedListPage from '@/views/lists/DetailedListPage'

import Register from '../views/user/Register.vue'
import Login from '../views/user/Login.vue'

import UserProfile from '../views/user/UserProfile.vue'
import FormNewList from '@/components/lists/FormNewList'
import PersonalLists from '@/views/lists/PersonalLists'
import EditList from '@/components/lists/EditList'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movies',
      name: 'movies',
      component: MainMoviesPage
    },
    {
      path: '/movies/:movie',
      name: 'movie-content',
      component: DetailedMoviePage
    },
    {
      path: '/movies/category/:category',
      name: 'movie-category',
      component: MovieCategories
    },
    {
      path: '/movies/years/:year',
      name: 'movie-year',
      component: MovieYear
    },

    {
      path: '/series',
      name: 'series',
      component: MainSeriesPage
    },
    {
      path: '/series/:serie',
      name: 'serie-content',
      component: DetailedSeriePage
    },
    {
      path: '/series/category/:category',
      name: 'serie-category',
      component: SerieCategories
    },

    {
      path: '/series/years/:year',
      name: 'serie-year',
      component: SerieYear
    },

    {
      path: '/documentaries',
      name: 'documentaries',
      component: MainDocumentariesPage
    },

    {
      path: '/lists',
      name: 'lists',
      component: MainListsPage
    },

    {
      path: '/lists/new',
      name: 'lists-new',
      component: FormNewList
    },

    {
      path: '/my-lists/',
      name: 'my-lists',
      component: PersonalLists
    },

    {
      path: '/my-lists/:list/edit',
      name: 'my-lists-edit',
      component: EditList
    },

    {
      path: '/lists/:list',
      name: 'list-content',
      component: DetailedListPage
    },

    {
      path: '/profile',
      name: 'profile',
      component: UserProfile
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
    }
  ]
})

export default router
