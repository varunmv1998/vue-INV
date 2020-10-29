<template>
  <div class="dashboard">
    <h1 class="headline grey--text my-2">StoreDashboard</h1>
    <v-container class="my-5">
      <v-layout row>
       
        <v-col cols="12" xs="12" md="6" lg="4">
          <v-container>
            <v-card max-width="400px" router :to="{ name: 'Storeview' }">
              <v-sheet
                class="v-sheet--offset mx-auto"
                color="green"
                elevation="10"
                max-width="100px"
              >
                <v-icon class="icns" x-large dark>mdi-cart</v-icon>
              </v-sheet>
              <v-card-text class="pt-0">
                <div class="title">View Products</div>
                <v-divider class="my-2"></v-divider>
              </v-card-text>
            </v-card>
          </v-container>
        </v-col>
       
         <v-col cols="12" xs="12" md="6" lg="4">
          <v-container>
            <v-card max-width="400px" router :to="{ name: 'Contact' }">
              <v-sheet
                class="v-sheet--offset mx-auto"
                color="blue-grey"
                elevation="10"
                max-width="100px"
              >
                <v-icon class="icns" x-large dark>mdi-face-agent</v-icon>
              </v-sheet>
              <v-card-text class="pt-0">
                <div class="title">Contact</div>
                <v-divider class="my-2"></v-divider>
              </v-card-text>
            </v-card>
          </v-container>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import firebase from "firebase";
  export default {
    data: () => ({}),
    created() {
      this.name =
        firebase.auth().currentUser && firebase.auth().currentUser.email;
    },
  };
</script>

<style scoped>
  .img {
    position: fixed;
    bottom: 0px;
    right: 10%;
    width: 65%;
    height: auto;
    z-index: -1;
  }
  .v-sheet--offset {
    top: -24px;
    left: 65px;
    position: relative;
  }
  .icns {
    margin: 30%;
    text-align: center;
  }
</style>
