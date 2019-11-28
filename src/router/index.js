import Vue from 'vue'
import VueRouter from 'vue-router'
import RepoList from '../components/RepoList'
import RegistRepo from '../components/RegistRepo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'repo-list',
    component: RepoList
  },
  {
    path: '/regist-repo',
    name: 'regist-repo',
    component: RegistRepo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
