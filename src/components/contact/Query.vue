<template>
  <div>
    <h1 class="headline grey--text my-2">Queries</h1>
    <v-container class="queries">
      <div v-for="item in items" :key="item.id">
        <v-container>
          <v-card
           color="blue-grey lighten-5"
            min-width="300px"
          >
            <v-card-title class="headline">{{ item.query }}</v-card-title>
            <v-chip dark  class="ma-2" color="blue">
              {{item.name}}
            </v-chip><br>
            <v-chip dark  class="ma-2" color="blue">
              {{item.email}}
            </v-chip><br>
            <v-chip dark  class="ma-2" color="blue">
              Ph.no: {{ item.phno }}
            </v-chip>
            <v-btn fab @click="deleteItems(item.id)" color="green accent-1" bottom right absolute >
              <v-icon>mdi-delete-forever</v-icon>
            </v-btn>
          </v-card>
          </v-container>
      </div>
    </v-container>
  </div>
</template>

<script>
  import fb from "../firebase/init";
  import firebase from "firebase";
  export default {
    name: "Query",
    data() {
      return {
        items: [],
        
      };
    },
   
    methods: {
      // getColor (complete) {
      //   if (complete = true) return 'green accent-1'
      //   else if (complete = false) return 'orang accent-1'
      //   },
      deleteItems(id) {
        fb.collection("contact")
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
      fb.collection("contact")
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

<style scoped>
 .queries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 30px;
    margin-top: 60px;
  }
  .delete {
    position: absolute;
    top: 10px;
    left: 95%;
    cursor: pointer;
  }
</style>
 
