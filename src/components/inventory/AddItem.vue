<template>
  <div class="container">
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-card class="login" color="grey lighten-4">
          <v-toolbar
            dark
            height="100px"
            elevation="0"
            color="teal lighten-1"
          >
            <v-card-title>
              <h1 class="font-weight-light">Add Items</h1>
            </v-card-title>
          </v-toolbar>
          <v-form @submit.prevent="addItem">
            <v-card-text>
              <v-text-field
                label="Item Name:"
                type="text"
                name="name"
                color="teal lighten-1"
                v-model="name"
              ></v-text-field>
              <v-text-field
                label="Price Per Unit:"
                type="text"
                name="ppu"
                color="teal lighten-1"
                v-model="ppu"
              ></v-text-field>
              <v-text-field
                label="Item Quantity:"
                type="number"
                name="quantity"
                color="teal lighten-1"
                v-model="quantity"
              ></v-text-field>
              <v-text-field
                label="GST Inclusive"
                type="number"
                name="gst"
                color="teal lighten-1"
                v-model="gst"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn depressed dark color="teal lighten-1" type="submit"
                ><span>Add Item</span> <v-icon>mdi-shape-plus</v-icon></v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <img src="@/assets/Inventory.svg" alt="inv" />'
      </v-col> </v-row
    >
  </div>
</template>
<script>
  import fb from "../firebase/init";
  import slugify from "slugify";
  export default {
    name: "AddItem",
    data() {
      return {
        name: null,
        quantity: null,
        feedback: null,
        total:null,
        subtotal: null,
        ppu: null,
        slug: null,
        gst: null
      };
    },
    
    methods: {
       calc (){
        this.total=firebase.cloudfunction.calc;
      },
      addItem() {
        if ((this.name, this.quantity, this.gst)) {
          (this.feedback = null),
            (this.slug = slugify(this.name, {
              replacement: "-",
              remove: /[$*_+~.()'"!\-:@]/g,
              lower: true,
            }));
          //console.log(this.slug)  
          //save item to firestore
          fb.collection("items")
            .add({
              name: this.name,
              quantity: this.quantity,
              ppu: this.ppu,
              slug: this.slug,
              gst: this.gst,
              total:this.total,
              subtotal: this.subtotal
            })
            .then(() => {
              this.$router.push({ name: "Inventory" });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          this.feedback = "you must enter item name and quantity";
        }
      },
    },
  };
</script>
<style>
  /* .add-item {
    margin-top: 60px;
    max-width: 500px;
  } */
  /* .add-item .field {
    margin: 20px auto;
  } */
</style>
