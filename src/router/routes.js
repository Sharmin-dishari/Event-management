const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/ListView.vue"),
      },
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "event-details",
        name: "event-details",
        component: () => import("pages/EventDetails.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
