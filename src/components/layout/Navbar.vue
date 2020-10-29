<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">VS</span>
        <span>Enterprises</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-if="!user" depressed router :to="{ name: 'Signup' }">
        <span>Sign Up</span>
        <v-icon>mdi-face</v-icon>
      </v-btn>
      <v-btn v-if="!user" depressed router :to="{ name: 'Signin' }">
        <span>Sign In</span>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
      <v-btn v-if="!user" depressed router :to="{ name: 'Storein' }">
        <v-icon>mdi-storefront</v-icon>
      </v-btn>
      <v-btn v-if="user" depressed @click="logout">
        <span>Sign Out</span>
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-if="user"
      app
      v-model="drawer"
      class="purple accent-4"
    >
      <v-layout column align-center>
        <v-flex class="mt-12">
          <v-avatar size="50" width="150">
            <img src="../../assets/user.svg" alt="profile" />
          </v-avatar>
          <p class="white--text overline mt-5">{{ user.email }}</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  import firebase from "firebase";

  export default {
    name: "Navbar",
    data() {
      return {
        user: null,
        drawer: false,
        links: [
          {
            icon: "mdi-view-dashboard-variant-outline",
            text: "Dashboard",
            route: "/dashboard",
          },
          { icon: "mdi-cart", text: "Inventory", route: "/inventory" },
          { icon: "mdi-chart-areaspline", text: "Sales", route: "/sales" },
          { icon: "mdi-message-text", text: "Chat", route: "/chat" },
          { icon: "mdi-store", text: "Stores", route: "/stores" },
          { icon: "mdi-home", text: "Home", route: "/" },
        ],
      };
    },
    methods: {
      logout() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.push({ name: "Home" });
          });
      },
    },
    created() {
      //let user = firebase.auth().currentUser
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    },
  };
</script>

<style></style>
