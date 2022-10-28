import { createRouter, createWebHistory } from "vue-router";

// import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import Movies from "../views/Movies.vue";

const Home = () => import("../views/Home.vue");

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/movies",
    name: "MovieList",
    component: () => import("../views/Movies.vue"),
  },
  {
    path: "/movies/:id",
    name: "MovieDetails",
    component: () => import("../views/MovieDetails.vue"),
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
