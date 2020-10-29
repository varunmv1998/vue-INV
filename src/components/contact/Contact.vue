<template>
  <div>
    <h1 class="headline grey--text my-2">Contact Us</h1>
    <v-container class="contact">
       <v-row>
      <v-col cols="12" xs="12" md="6">
        <img width="85%" src="@/assets/Call.svg" alt="messages" />
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="grey lighten-4">
          <v-toolbar dark height="100px" elevation="0" color="blue">
            <v-card-title>
              <h1 class="font-weight-light">We'll get in touch soon</h1>
            </v-card-title>
          </v-toolbar>
          <v-form @submit.prevent="submit">
            <v-card-text>
              <v-text-field
                type="text"
                label="Name"
                prepend-icon="mdi-card-account-details"
                name="name"
                v-model="name"
              />
              <v-text-field
                type="email"
                label="Email"
                prepend-icon="mdi-card-account-mail"
                name="email"
                v-model="email"
              />
              <v-text-field
                type="number"
                label="Phone Number"
                prepend-icon="mdi-card-account-phone"
                name="phno"
                v-model="phno"
              />
              <v-textarea
                type="text"
                label="Feel free to ask us anything"
                prepend-icon="mdi-frequently-asked-questions"
                name="query"
                v-model="query"
              />
              
              <p v-if="feedback" class="red--text text--lighten-1">
                {{ feedback }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn depressed dark color="blue" type="submit">
                <span>Submit Feedback</span>
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<<script>
  import fb from "../firebase/init";
  import firebase from "firebase";

  export default {
    name: "Contact",
    data() {
      return {
        name: null,
        phno: null,
        email: null,
        query: null
      };
    },
    
    methods: {
      submit() {
        if ((this.name, this.phno, this.email, this.query)) {
          (this.feedback = null),
          fb.collection("contact")
            .add({
              name: this.name,
              phno: this.phno,
              email: this.email,
              query: this.query,
            })
            .then(() => {
              this.$router.push({ name: "Home" });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          this.feedback = "Please enter all fields";
        }
      },
    },
  };
</script>

<style>
  
</style>
