import Vue from 'vue'
import VueRouter from 'vue-router'
import RepoList from '../components/RepoList'
import RegistRepo from '../components/RegistRepo.vue'
import FileList from '../components/FileList.vue'
import callback from '../components/callback.vue'

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
  },
  {
    path: '/file-list',
    name: 'file-list',
    component: FileList
  },
  {
    path: '/callback',
    name: 'callback',
    component: callback
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
