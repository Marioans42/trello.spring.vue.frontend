import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage'
import RegisterPage from '@/views/RegisterPage'
import HomePage from '@/views/HomePage'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'LoginPage',
  component: LoginPage
}, {
  path: '/register',
  name: 'RegisterPage',
  component: RegisterPage
}, {
  path: '/',
  name: 'HomePage',
  component: HomePage
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
