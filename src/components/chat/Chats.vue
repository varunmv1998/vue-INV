<template>
  <div class="C">
    <v-container>
      <v-card elevation="12" class="ma-auto mt-12">
        <v-card-title class="display-3">Chat Room</v-card-title>
        <v-card
          elevation="0"
          color="grey lighten-3"
          class="mx-auto"
          max-width="1000px"
        >
          <v-card-text class="messages" v-chat-scroll>
            <v-list-item v-for="message in messages" :key="message.id">
              <v-list-item-content>
                <v-list-item-title>
                  <h2 class="font-weight-light">{{ message.content }}</h2>
                </v-list-item-title>
                <v-list-item-subtitle class="overline deep-orange--text">
                  {{ message.name }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="font-italic font-weight-light">{{
                  message.timestamp
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
        <div class="card-action">
          <NewMessage :name="name" />
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  import NewMessage from "./NewMessage";
  import fb from "../firebase/init";
  import moment from "moment";
  export default {
    name: "Chat",
    props: ["name"],
    components: {
      NewMessage,
    },
    data() {
      return {
        messages: [],
      };
    },
    created() {
      let ref = fb.collection("messages").orderBy("timestamp");

      // subscribe to changes to the 'messages' collection
      ref.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added") {
            let doc = change.doc;
            this.messages.push({
              id: doc.id,
              name: doc.data().name,
              content: doc.data().content,
              timestamp: moment(doc.data().timestamp).format("lll"),
            });
          }
        });
      });
    },
  };
</script>

<style>
  .messages {
    max-height: 300px;
    overflow: auto;
    text-align: left;
  }
  .messages::-webkit-scrollbar {
    width: 3px;
  }

  .messages::-webkit-scrollbar-track {
    background: #aaa;
  }
  .messages::-webkit-scrollbar-thumb {
    background: #ff520d;
  }
</style>
