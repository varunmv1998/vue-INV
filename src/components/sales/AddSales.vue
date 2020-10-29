<template>
  <div class="add-item container">
    <v-card color="grey lighten-3">
      <v-toolbar dark color="blue-grey" height="100px" elevation="0">
        <v-card-title>
          <h1 class="font-weight-light">Add Sales</h1>
        </v-card-title>
      </v-toolbar>
      <v-form @submit.prevent="addSales">
        <v-card-text>
          <v-text-field
            label="Item Name:"
            type="text"
            name="name"
            v-model="name"
          ></v-text-field>
          <v-text-field
            label="Item Quantity:"
            type="number"
            name="quantity"
            v-model="quantity"
          ></v-text-field>
          <v-text-field
            label="Store Name:"
            type="text"
            name="store"
            v-model="store"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed type="submit"
            ><span>Add Sales</span> <v-icon>mdi-shape-plus</v-icon></v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>
<script>
  import fb from "../firebase/init";
  import slugify from "slugify";
  export default {
    name: "AddSales",
    data() {
      return {
        name: [],
        quantity: null,
        feedback: null,
        store: null,
        slug: null,
        total:null
      };
    },
    methods: {
      addItem(){
      if(this.another){
        this.name.push(this.another)
      }
      },
      addSales() {
        if ((this.name, this.quantity , this.store )) {
          (this.feedback = null),
            (this.slug = slugify(this.name, {
              replacement: "-",
              remove: /[$*_+~.()'"!\-:@]/g,
              lower: true,
            }));
          //console.log(this.slug)
          //save item to firestore
          fb.collection("sales")
            .add({
              name: this.name,
              quantity: this.quantity,
              store: this.store,
              slug: this.slug,
            })
            .then(() => {
              this.$router.push({ name: "Sales" });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          this.feedback = "you must enter item name and quantity to Sell Them";
        }
      },
    },
  };
</script>
<style>
  .add-item {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
  }
  .add-item h2 {
    font-size: 2em;
    margin: 20px auto;
  }
  .add-item .field {
    margin: 20px auto;
  }
</style>
