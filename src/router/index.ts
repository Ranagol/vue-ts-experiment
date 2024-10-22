import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import List from '../views/users/List.vue';
import UserEdit from '../views/users/UserEdit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
        path: '/users',
        name: 'users',
        component: List
    },
    {
        path: '/users/:id',
        name: 'user',
        component: UserEdit
    }
  ]
})

export default router
