import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Passport from '@/components/TemplatesDoc/Passport'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/passport',
    name: 'passport',
    component: Passport
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
