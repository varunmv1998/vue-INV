<template>
  <div class="container">
    <v-row>
      <v-col cols="12" md="6">
        <img src="@/assets/Forgot.svg" alt="messages" />
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-card class="login" color="grey lighten-4">
          <v-toolbar
            dark
            height="100px"
            elevation="0"
            color="blue-grey darken-4"
          >
            <v-card-title>
              <h1 class="font-weight-light">Reset Password</h1>
            </v-card-title>
          </v-toolbar>
          <v-form @submit.prevent="reset">
            <v-card-text>
              <v-text-field
                type="email"
                label="E-mail"
                name="email"
                color="purple"
                v-model="email"
                prepend-icon="mdi-email"
              />
              <p class="purple--text subtitle-2">
                Enter your E-mail to recieve a password reset link
              </p>
              <p v-if="feedback" class="red--text text--lighten-1">
                {{ feedback }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn depressed dark color="blue-grey darken-3" type="submit">
                <span>Reset</span>
                <v-icon>mdi-lock-reset</v-icon>
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
    name: "Reset",
    data() {
      return {
        email: null,
        feedback: null,
      };
    },
    methods: {
      reset() {
        if (this.email) {
          firebase
            .auth()
            .sendPasswordResetEmail(this.email)
            .then(() => {
              this.feedback = "Check Emil for Password Reset Link";
              console.log("email sent");
              this.$router.push({ name: "Signin" });
            })
            .catch((err) => {
              this.feedback = err.message;
            });

          this.feedback = null;
        } else {
          this.feedback = "Please enter Email";
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
