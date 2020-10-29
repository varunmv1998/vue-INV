import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import Home from "../views/Home.vue";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import Reset from "../components/auth/Reset";
import Dashboard from "../components/Dashboard";
import Inventory from "../components/inventory/Inventory";
import AddItem from "../components/inventory/AddItem";
import EditItem from "../components/inventory/EditItem";
import Restock from "../components/inventory/Restock";
import Sales from "../components/sales/Sales";
import AddSales from "../components/sales/AddSales";
import Report from "../components/sales/Report";
import Chat from "../components/chat/Chat";
import Chats from "../components/chat/Chats";
import Stores from "../components/stores/Stores";
import Contact from "../components/contact/Contact";
import Query from "../components/contact/Query";
import Storein from "../components/auth/Storein";
import Storeup from "../components/auth/Storeup";
import Storedash from "../components/stores/StoreDash";
import Storeview from "../components/stores/StoreView";
import AddOrder from "../components/stores/AddOrder";
import Order from "../components/stores/Order";
import Map from "../components/stores/Map";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/storein",
    name: "Storein",
    component: Storein,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/storeup",
    name: "Storeup",
    component: Storeup,
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/storedash",
    name: "Storedash",
    component: Storedash,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
    meta: {
      requiresAuth: true,
    },
  },
   {
    path: "/storedash",
    name: "Storedash",
    component: Storedash,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/storeview",
    name: "Storeview",
    component: Storeview,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/query",
    name: "Query",
    component: Query,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-item",
    name: "AddItem",
    component: AddItem,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-order",
    name: "AddOrder",
    component: AddOrder,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-item/:item_slug",
    name: "EditItem",
    component: EditItem,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/restock",
    name: "Restock",
    component: Restock,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/sales",
    name: "Sales",
    component: Sales,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-sales",
    name: "AddSales",
    component: AddSales,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    props: true,
  },
  {
    path: "/chats",
    name: "Chats",
    component: Chats,
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.name) {
        next();
      } else {
        next({ name: "Welcome" });
      }
    },
  },
  {
    path: "/stores",
    name: "Stores",
    component: Stores,
    meta: {
      requiresAuth: true,
    },
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// router guards
router.beforeEach((to, from, next) => {
  // check to see if route has auth guard
  if (to.matched.some((rec) => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser;
    if (user) {
      // User is signed in. Proceed to route
      next();
    } else {
      // No user is signed in. Redirect to login
      next({ name: "Signin" });
    }
  } else {
    // if route is not guarded by auth, proceed
    next();
  }
});

export default router;
