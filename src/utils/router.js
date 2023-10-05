import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import HomePage from "../pages/HomePage.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import InstructionPage from "../pages/instructionPage.vue";
import QuizPage from "../pages/quizPage.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", component: HomePage, props: true }],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorPage,
  },
  {
    path: "/instructions/:slug",
    component: MainLayout,
    children: [{ path: "", component: InstructionPage, props: true }],
  },
  {
    path: "/tests/:id(\\d+)",
    component: MainLayout,
    children: [{ path: "", component: QuizPage, props: true }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
