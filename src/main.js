import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import vuetify from "./plugins/vuetify";
import VueChatScroll from "vue-chat-scroll";
import VueHtmlToPaper from "vue-html-to-paper";
import "leaflet/dist/leaflet.css";

Vue.use(VueChatScroll);
Vue.use(VueHtmlToPaper);
Vue.config.productionTip = false;

let app = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
