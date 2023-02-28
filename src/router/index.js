import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookView from "../views/BookView.vue";
import CurrencyView from "../views/CurrencyView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/books",
    name: "Books",
    component: BookView,
  },
  {
    path: "/currency",
    name: "Currency",
    component: CurrencyView,
  },
  {
    path: "/user-details",
    name: "user-details",
    component: () => import("../views/UserDetailsView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
