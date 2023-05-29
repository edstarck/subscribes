import Vue from "vue";
import VueRouter from "vue-router";
import SubscribesPage from "@/page/Subscribes.vue";
import PopupWindow from "@/components/Popup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "subscribes",
    component: SubscribesPage,
    children: [
      {
        path: "/save",
        name: "save",
        component: PopupWindow,
      },
      {
        path: "/unsubscribe",
        name: "unsubscribe",
        component: PopupWindow,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
