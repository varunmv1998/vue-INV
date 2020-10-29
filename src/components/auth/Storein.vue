<template>
  <div class="container">
    <v-row>
      <v-col cols="12" md="6">
        <img src="@/assets/Store.svg" alt="messages" />
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-card class="login" color="grey lighten-4">
          <v-toolbar
            dark
            height="100px"
            elevation="0"
            color="blue-grey darken-3"
          >
            <v-card-title>
              <h1 class="font-weight-light">Sign In</h1>
            </v-card-title>
          </v-toolbar>
          <v-form @submit.prevent="login">
            <v-card-text>
              <v-text-field
                type="email"
                label="Email"
                name="email"
                color="teal accent-4"
                v-model="email"
                prepend-icon="mdi-email"
              />
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                name="password"
                color="teal accent-4"
                v-model="password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
              <router-link :to="{ name: 'Reset' }">
                <p class="red--text text--lighten-1">
                  Forgot Password?
                </p>
              </router-link>
               
              <p v-if="feedback" class="red--text text--lighten-1">
                {{ feedback }}
              </p>
            </v-card-text>
            <v-card-actions>
              <router-link :to="{ name: 'Storeup' }">
                <p class="red--text text--lighten-1">
                  New Store? SignUp.
                </p>
              </router-link>
              <v-spacer></v-spacer>
              <v-btn depressed dark color="blue-grey darken-3" type="submit">
                <span>Sign In</span>
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
    name: "Storein",
    data() {
      return {
        email: null,
        password: null,
        feedback: null,
        showPassword: false,
      };
    },
    methods: {
      login() {
        if (this.email && this.password) {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then((cred) => {
              console.log(cred.user);
              this.$router.push({ name: "Storedash" });
            })
            .catch((err) => {
              this.feedback = err.message;
            });

          this.feedback = null;
        } else {
          this.feedback = "Please enter Email and Password";
        }
      },
    },
  };
</script>

<style>
  .login {
    margin-top: 100px;
  }
  .login .field {
    margin-bottom: 16px;
  }
</style>
