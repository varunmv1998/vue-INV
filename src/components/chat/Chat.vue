<template>
  <div class="container">
    <v-row>
      <v-col cols="12" md="6">
        <img src="@/assets/Messages.svg" alt="messages" />
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-card class="welcome" color="grey lighten-4">
          <v-toolbar dark height="100px" elevation="0" color="red lighten-1">
            <v-card-title>
              <h1 class="font-weight-light">Welcome</h1>
            </v-card-title>
          </v-toolbar>
          <v-form @submit.prevent="enterChat">
            <v-card-text>
              <v-text-field
                type="text"
                label="Enter Name to Chat"
                prepend-icon="mdi-account"
                name="name"
                v-model="name"
                color="blue-grey"
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn depressed dark color="red lighten-1" type="submit">
                <span>Enter Chat</span>
                <v-icon>mdi-login-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import firebase from "firebase";
  export default {
    name: "Chat",
    data() {
      return {
        name: null,
        feedback: null,
      };
    },
    methods: {
      created() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.name = user;
            this.$router.push({ name: "Chats", params: { name: this.name } });
          } else {
            this.name = null;
          }
        });
      },
      enterChat() {
        if (this.name) {
          this.$router.push({ name: "Chats", params: { name: this.name } });
        } else {
          this.feedback = "Enter a name to join";
        }
      },
    },
  };
</script>

<style>
  .welcome {
    margin-top: 100px;
  }
  .welcome button {
    margin: 30px auto;
  }
</style>
