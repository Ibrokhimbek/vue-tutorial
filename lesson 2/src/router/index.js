import Counter from "@/views/Counter.vue";
import Home from "@/views/Home.vue";
import User from "@/views/User.vue";
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/counter",
      name: "Counter",
      component: Counter,
    },
    {
      path: "/user/:id",
      name: "User",
      component: User,
    },
  ],
});
