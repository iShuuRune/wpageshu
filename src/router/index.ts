import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/layouts/MenuLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/eventos',
          name: 'eventos',
          component: () => import('@/views/EventosView.vue'),
        },
        {
          path: '/evento/:id',
          name: 'evento-detalle',
          component: () => import('@/views/EventDetailView.vue'),
        },
        {
          path: '/blog',
          name: 'blog',
          component: () => import('@/views/BlogView.vue'),
        },
        {
          path: '/contacto',
          name: 'contacto',
          component: () => import('@/views/ContactoView.vue'),
        },
        {
          path: '/quienes-somos',
          name: 'quienes-somos',
          component: () => import('@/views/QuienesSomosView.vue'),
        },
      ]
    }
  ]
})

export default router