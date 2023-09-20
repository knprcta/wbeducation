import { createRouter, createWebHistory } from "vue-router";
import MainLayout from '../layouts/MainLayout.vue';
import WInstructions from '../components/WInstructions.vue'
import WTests from '../components/WTests.vue';


// const routes = [
//   { path: "/instructions/:id", component: WContent, props: true },
// ];

const routes = [
  {
    path: "/instructions/:id",
    components: {
      default: MainLayout,
      content: WInstructions,
    }, 
    props: true,
  },
  {
    path: "/tests/:id",
    components: {
      default: MainLayout,
      content: WTests,
    }, 
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
