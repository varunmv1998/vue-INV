<template>
  <div class="container signup">
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <img width="85%" src="@/assets/AddUser.png" alt="messages" />
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="grey lighten-4">
          <v-toolbar dark height="100px" elevation="0" color="cyan darken-1">
            <v-card-title>
              <h1 class="font-weight-light">Sign Up</h1>
            </v-card-title>
          </v-toolbar>
          <v-form @submit.prevent="signup">
            <v-card-text>
              <v-text-field
                type="text"
                label="Name"
                prepend-icon="mdi-account"
                name="name"
                v-model="name"
              />
              <v-text-field
                type="email"
                label="Email"
                prepend-icon="mdi-email"
                name="email"
                v-model="email"
              />
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                name="password"
                v-model="password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
              <p v-if="feedback" class="red--text text--lighten-1">
                {{ feedback }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn depressed dark color="cyan darken-1" type="submit">
                <span>Sign Up</span>
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
  import fb from "../firebase/init";
  import slugify from "slugify";
  import firebase from "firebase";

  export default {
    name: "Signup",
    data() {
      return {
        email: null,
        password: null,
        name: null,
        feedback: null,
        slug: null,
        showPassword: false,
      };
    },
    methods: {
      signup() {
        if (this.name && this.email && this.password) {
          this.slug = slugify(this.name, {
            replacement: "-",
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true,
          });
          console.log(this.slug);
          let ref = fb.collection("users").doc(this.slug);
          ref.get().then((doc) => {
            if (doc.exists) {
              this.feedback = "This Name already exists";
            } else {
              firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then((cred) => {
                  ref.set({
                    name: this.name,
                    user_id: cred.user.uid,
                  });
                  //console.log(cred.user.uid);
                })
                .then(() =>
                  this.$router.push({
                    name: "Dashboard",
                    params: { name: this.name },
                  })
                )
                .catch((err) => {
                  console.log(err);
                  this.feedback = err.message;
                });
              this.feedback = "This Name is free to use";
            }
          });
        } else {
          this.feedback = "Enter All Fields";
        }
      },
    },
  };
</script>

<style>
  .signup {
    margin-top: 100px;
  }
</style>
