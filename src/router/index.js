import Vue from "vue";
import VueRouter from "vue-router";
import ListWorkouts from "../views/ListWorkouts.vue";
import Stepper from "../views/Stepper.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ListWorkouts",
    component: ListWorkouts,
  },
  {
    path: "/stepper",
    name: "Stepper",
    component: Stepper,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
