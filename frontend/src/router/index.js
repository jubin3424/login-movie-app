import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Signin_main from '@/components/Signin_main'
import Signup_main from '@/components/Signup_main'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Home from '@/components/Home'
import MovieList from '@/components/MovieList'
import Show from '@/components/ShowPage'
import Post from '@/components/Post'
import PostDetail from '@/components/PostDetail'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import NotFound from '@/components/NotFound'
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/signin_main',
      name: 'Signin_main',
      component: Signin_main
    },
    {
      path: '/signup_main',
      name: 'Signup_main',
      component: Signup_main
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
    },
    {
      path: '/post/:id',
      name: 'PostDetail',
      component: PostDetail
    },
    {
      path: '/post/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/post/edit/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/movie',
      name: 'MovieList',
      component: MovieList,
      meta: { requiresAuth: true }
    },
    {
      path: '/:id',
      name: 'show',
      component: Show,
      meta: { requiresAuth: true }
    },
    // {
    //   path: '*',
    //   name: 'NotFound',
    //   component: NotFound
    // }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    // alert(to.fullPath)
    next({
      path: '/signin_main',
      query: { redirect: to.fullPath }})
  } else {
    next()
  }
})

export default router

