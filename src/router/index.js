import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/informations_cours',
    name: 'cours',
    component: () => import('@/views/InfoCoursView.vue') 
  },
  {
    path: '/informations_pratiques',
    name: 'utiles',
    component: () => import('@/views/InfoPratiquesView.vue')
  },
  {
    path: '/actu_tips',
    name: 'actu',
    component: () => import('@/views/ActuView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router