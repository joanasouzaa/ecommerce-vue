import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CatalogoView from '../views/CatalogoView.vue'
import ProductDetailsView from '../views/ProductView.vue';

const routes = [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/catalogo",
      name: "catalogo",
      component: CatalogoView,
    },
    {
      path: "/produto/:id",
      name: "detalhes",
      component: ProductDetailsView,
    }
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
