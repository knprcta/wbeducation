import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import InstructionView from '@/views/InstructionView.vue'
import QuizView from '@/views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { noSidebar: true },
    },
    {
      path: '/instructions/:slug',
      name: 'instructions',
      component: InstructionView,
    },
    {
      path: '/tests/:id(\\d+)',
      name: 'tests',
      component: QuizView
    }
  ]
})

export default router
