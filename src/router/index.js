import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Passport from '@/components/TemplatesDoc/Passport'
import Residence from '@/components/TemplatesDoc/Residence'

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
  {
    path: '/residence',
    name: 'residence',
    component: Residence
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
