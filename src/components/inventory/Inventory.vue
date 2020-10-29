<template>
  <div>
    <h1 class="headline grey--text my-2">Inventory</h1>
    <v-container class="products">
      <div v-for="item in items" :key="item.id">
        <v-container>
          <v-card
            color="grey lighten-3"
            min-width="300px"
          >
            <v-icon class="delete red--text" @click="deleteItems(item.id)"
              >mdi-delete-forever</v-icon
            >
            <v-card-title class="headline">{{ item.name }}</v-card-title>
            <v-chip dark  class="ma-2" :color="getColor(item.quantity)">
              Quantity: {{ item.quantity }}
            </v-chip>
            <router-link :to="{ name: 'EditItem', params: { item_slug: item.slug } }">
            <v-btn fab color="pink accent-1" bottom right absolute>
              <v-icon>mdi-square-edit-outline</v-icon>
            </v-btn>
            </router-link>
          </v-card>
          </v-container>
      </div>
      <v-btn fab router: to="/add-item" dark bottom right fixed color="green accent-4">
          <v-icon >mdi-plus</v-icon>
        </v-btn>
    </v-container>
   </div>
</template>

<script>
  import fb from "../firebase/init";
  import firebase from "firebase";
  export default {
    name: "Inventory",
    data() {
      return {
        items: [],
        links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ]};
    },
    methods: {
      getColor (quantity) {
        if (quantity <= 250) return 'deep-orange accent-3'
        else if (quantity <= 500) return 'amber accent-4'
        else return 'green accent-4'},
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
  };
</script>

<style>
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    margin-top: 60px;
  }
  .delete {
    position: absolute;
    top: 10px;
    left: 85%;
    cursor: pointer;
  }
</style>
