<template>
  <div v-if="item" class="edit-item container">
    <v-form @submit.prevent="editItem">
      <v-card color="grey lighten-4">
        <v-toolbar
          dark
          height="100px"
          elevation="0"
          color="blue-grey
"
        >
          <v-card-title>
            <h1 class="font-weight-light">Edit Item</h1>
          </v-card-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            label="Name"
            type="text"
            name="name"
            v-model="item.name"
          />
        </v-card-text>
        <v-card-text>
          <v-text-field
            label="Quantity"
            type="text"
            name="quantity"
            v-model="item.quantity"
          />
        </v-card-text>
        <p v-if="feedback" class="red--text text--lighten-1">{{ feedback }}</p>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed dark color="blue-grey" type="submit">
            <span>Edit</span>
            <v-icon>mdi-pen</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
    <!-- <form @submit.prevent="editItem" class="card-panel">
      <h2 class="center-align">Edit Item</h2>
      <div class="field name">
        <label for="name">Item name:</label>
        <input type="text" name="name" v-model="item.name" />
      </div>
      <div class="field quantity">
        <label for="quantity">Item quantity:</label>
        <input type="text" name="quantity" v-model="item.quantity" />
      </div>
       <div class="field ppu">
        <label for="ppu">Price per Unit:</label>
        <input type="text" name="ppu" v-model="item.ppu" />
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn waves-effect waves-light">Edit Item</button>
      </div>
    </form>-->
  </div>
</template>

<script>
  import fb from "../firebase/init";
  import slugify from "slugify";
  export default {
    name: "EditItem",
    data() {
      return {
        item: null,
        feedback: null,

        slug: null,
      };
    },
    methods: {
      editItem() {
        if ((this.item.name, this.item.quantity)) {
          (this.feedback = null),
            (this.item.slug = slugify(this.item.name, {
              replacement: "-",
              remove: /[$*_+~.()'"!\-:@]/g,
              lower: true,
            }));
          //console.log(this.slug)
          //save item to firestore
          fb.collection("items")
            .doc(this.item.id)
            .update({
              name: this.item.name,
              quantity: this.item.quantity,
              // ppu: this.item.ppu,
              slug: this.item.slug,
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
    created() {
      let ref = fb
        .collection("items")
        .where("slug", "==", this.$route.params.item_slug);
      ref.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.data());
          this.item = doc.data();
          this.item.id = doc.id;
        });
      });
    },
  };
</script>

<style>
  .edit-item {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
  }
</style>
