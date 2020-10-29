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
            <h1 class="headline white--text my-2">Orders</h1>
            <v-spacer></v-spacer>
            <v-icon large dark>mdi-cart</v-icon>
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
        <v-btn fab router: to="/add-order" dark bottom right fixed color="green accent-4">
          <v-icon >mdi-cart-plus</v-icon>
        </v-btn>
    </v-container>
  </div>
</template>

<script>
  import fb from "../firebase/init";
  import firebase from "firebase";
  export default {
    name: "order",
    data() {
      return {
        search: "",
        items: [],
        headers: [
          { text: "Item Name", value: "name" },
          { text: "Quantity", value: "quantity"},
          { text: "Store", value: "sname"}
        ],
        fab: false,
        bottom: true,
      };
    },
    methods: {
      deleteItems(id) {
        fb.collection("items")
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
      fb.collection("order")
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
