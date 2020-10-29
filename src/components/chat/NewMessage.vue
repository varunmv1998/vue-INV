<template>
  <v-container>
    <v-form @submit.prevent="addMessage">
      <v-container px-12>
        <v-text-field
          type="text"
          label="New message (enter to send)"
          name="new-message"
          color="deep-orange"
          v-model="newMessage"
        />
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn depressed dark color="deep-orange" type="submit"
          ><span>Send</span><v-icon>mdi-send</v-icon></v-btn
        >
      </v-card-actions>
    </v-form></v-container
  >
</template>

<script>
  import fb from "../firebase/init";

  export default {
    name: "NewMessage",
    props: ["name"],
    data() {
      return {
        newMessage: null,
        feedback: null,
      };
    },
    methods: {
      addMessage() {
        if (this.newMessage) {
          fb.collection("messages")
            .add({
              content: this.newMessage,
              name: this.name,
              timestamp: Date.now(),
            })
            .catch((err) => {
              console.log(err);
            });
          this.newMessage = null;
          this.feedback = null;
        } else {
          this.feedback = "Enter a message in order to send";
        }
      },
    },
  };
</script>

<style></style>
