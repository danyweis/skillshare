import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store.js";
// import Brazil from '../views/Brazil.vue';
// import Hawaii from '../views/Hawaii.vue';
// import Jamaica from '../views/Jamaica.vue';
// import Panama from '../views/Panama';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue"
          )
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) => destination.slug == to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "notFound" });
      }
    }
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  // {
  //   path: "/brazil",
  //   name: "brazil",
  //   component: () =>
  //     import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue"),
  // },
  // {
  //   path: "/hawaii",
  //   name: "hawaii",
  //   component: () =>
  //     import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue"),
  // },
  // {
  //   path: "/jamaica",
  //   name: "jamaica",
  //   component: () =>
  //     import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue"),
  // },
  // {
  //   path: "/panama",
  //   name: "panama",
  //   component: () =>
  //     import(/* webpackChunkName: "panama" */ "../views/Panama.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
