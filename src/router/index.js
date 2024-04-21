import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/home.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/about.vue')
  },
  {
    path : '/projects',
    name: 'projects',
    component: () => import('../views/projects.vue')
  },
  {
    path : '/projects/:id/:title',
    name: 'projects/:id/:title',
    component: () => import('../views/project_view.vue')
  },
  {
    path : '/services',
    name: 'services',
    component: () => import('../views/services.vue')
  },
  {
    path : '/services/:id/:title',
    name: 'services/:id/:title',
    component: () => import('../views/view.vue')
  },
  {
    path : '/contacts',
    name: 'Contacts',
    component: () => import('../views/contacts.vue')
  },
  {
    path : '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/test.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: () => import('../views/error.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
