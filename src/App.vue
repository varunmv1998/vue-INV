<template>
  <v-app>
    <Navbar />
    <v-content class="mx-4 mb-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  import Home from "./views/Home";
  import Navbar from "./components/layout/Navbar";
  export default {
    name: "App",

    components: {
      Home,
      Navbar,
    },

    data: () => ({
      //
    }),
  };
</script>
