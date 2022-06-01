import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

import DetailedMoviePage from '@/views/movies/DetailedMoviePage'
import MainMoviesPage from '@/views/movies/MainMoviesPage'
import MovieCategories from '@/views/movies/MovieCategories'
import MovieYear from '@/views/movies/MovieYear'
import AddMovieToList from '@/components/lists/AddMovieToList'
import CreateList from '@/components/lists/CreateList'

import MainListsPage from '@/views/lists/MainListsPage'
import DetailedListPage from '@/views/lists/DetailedListPage'

import Register from '../views/user/Register.vue'
import Login from '../views/user/Login.vue'

import UserProfile from '../views/user/UserProfile.vue'
import ListCreationPage from "@/views/lists/ListCreationPage";

const routes = [
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
    path: '/movieAddToList/:movieId',
    name: 'movie-add-to-list',
    component: AddMovieToList
  },
  {
    path: '/createList',
    name: 'create-list',
    component: CreateList
  },

  {
    path: '/lists',
    name: 'lists',
    component: MainListsPage
  },

  {
    path: '/lists/new',
    name: 'lists-new',
    component: ListCreationPage
  },

  {
    path: '/lists/:list',
    name: 'list-content',
    component: DetailedListPage
  },

  {
    path: '/userProfile',
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
