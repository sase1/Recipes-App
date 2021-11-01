import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SingleRecipe from "../components/SingleRecipe.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Recipes",
    component: Home,
  },
  {
    path: "/recipe/:id",
    name: "SingleRecipe",
    component: SingleRecipe,
  },
  {
    path: "/recipes",
    name: "AddRecipe",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddRecipe.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
