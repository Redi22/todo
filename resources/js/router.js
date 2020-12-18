import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "Create",
  
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/Create.vue")
  }
];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes : [
        {
          path: "/",
          name: "Home",
          component: Home
        },
        {
          path: "/create",
          name: "Create",
        
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Create.vue")
        }
      ]
  });