<template>
  <div>
    <v-container mt-12>
      <v-card>
        <v-sheet
          class="v-sheet--offset mx-auto"
          color="red"
          elevation="10"
          max-width="calc(100% - 42px)"
        >
          <v-card-title>
            <h1 class="headline white--text my-2">Re-stock</h1>
            <v-spacer></v-spacer>
            <v-icon large dark>mdi-clipboard-text-multiple</v-icon>
          </v-card-title>
        </v-sheet>
        <v-container
          ><v-text-field
            v-model="search"
            prepend-icon="mdi-magnify"
            label="Search"
            hide-details
            color="red"
          ></v-text-field
        ></v-container>
        <v-data-table
          :search="search"
          :headers="headers"
          :items="items"
        >
        </v-data-table>
      </v-card>
    </v-container>
     <v-speed-dial fixed right bottom>
        <template v-slot:activator>
          <v-btn v-model="fab" dark color="cyan" fab>
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-arrow-up-drop-circle</v-icon>
          </v-btn>
        </template>
        <v-btn router: to="/add-item" fab dark small color="green accent-4">
          <v-icon >mdi-plus</v-icon>
        </v-btn>
        <v-btn router: to="/restock" fab dark small color="deep-orange">
          <v-icon>mdi-cart-plus</v-icon>
        </v-btn>
        <v-btn fab dark small color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>
  </div>
</template>

<script>
  import fb from "../firebase/init";
  import firebase from "firebase";
  export default {
    name: "Restock",
    data() {
      return {
        search: "",
        items: [],
        quantity: items.quantity <= 500,
        headers: [
          { text: "Item Name", value: "name" },
          { text: "Quantity", value: "quantity" },
        ],
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
      fb.collection("items")
        .get()
        .then((snapshot) => {
          snapshot.forEach((element) => {
            let item = element.data();
            item.id = element.id;
            this.items.push(item);
          });
        });
    },
    print() {
      window.print();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .v-sheet--offset {
    top: -25px;
    position: relative;
  }
</style>
