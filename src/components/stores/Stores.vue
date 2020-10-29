<template>
  <div>
    <v-container mt-12>

      <v-card>
        <v-sheet
          class="v-sheet--offset mx-auto"
          color="blue"
          elevation="10"
          max-width="calc(100% - 42px)"
        >
          <v-card-title>
            <h1 class="headline white--text my-2">Stores</h1>
            <v-spacer></v-spacer>
            <v-icon large dark>mdi-store</v-icon>
          </v-card-title>
        </v-sheet>
        <v-container
          ><v-text-field
            v-model="search"
            prepend-icon="mdi-magnify"
            label="Search"
            hide-details
            color="orange"
          ></v-text-field
        ></v-container>
        <v-data-table  v-model="selected" :search="search" :headers="headers" :items="items" select-all>
        </v-data-table>
      </v-card>
        <v-btn fab router: to="/map" dark bottom right fixed color="green accent-4">
          <v-icon >mdi-office-building-marker</v-icon>
        </v-btn>
    </v-container>
  </div>
</template>

<script>
  import fb from "../firebase/init";
  import firebase from "firebase";
  export default {
    name: "stores",
    data() {
      return {
        search: "",
        items: [],
        headers: [
          { text: "Store Name", value: "sname" },
          { text: "Address", value: "sadd"},
        ],
        fab: false,
        bottom: true,
      };
    },
    methods: {
      deleteItems(id) {
        fb.collection("stores")
          .doc(id)
          .delete()
          .then(() => {
            this.items = this.items.filter((item) => {
              return item.id != id;
            });
          });
      },
    },
    created() {
      console.log(firebase.auth().currentUser);
      fb.collection("stores")
        .get()
        .then((snapshot) => {
          snapshot.forEach((element) => {
            let item = element.data();
            item.id = element.id;
            this.items.push(item);
          });
        });
    },
  };
</script>

<style></style>
