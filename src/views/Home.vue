<template>
  <div>
      <section id="s1">
       
        <v-parallax src="@/assets/1.jpg">
         <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="mb-4 logo">V S</h1>
        <h4 class="display-1">Enterprises</h4>
      </v-col>
    </v-row>
         </v-parallax>
      </section>
         <section id="s2">
        <v-layout column wrap class="my-5">
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
              
                      <h2 class="vs display-3 layout justify-center">
                        We are <br> 
                        The Largest Distributor
                         <br>
                          Of Britannia
                         <br>
                         Products
                         <br>
                        In South Bangalore
                      </h2>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent d-flex justify-center">
                    <img
                      width="100%"
                      src="@/assets/brt.svg"
                      alt="brt"
                    />
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
     <section id="s3" class="mt-12">
        <v-parallax src="@/assets/1.jpg">
         <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-3">We Serve to Multiple Stores </h1>
      </v-col>
    </v-row>
         </v-parallax>
      </section>
      <section id="s4" class="mt-12">
       <v-card class="elevation-0 d-flex justify-center transparent">
      <h1 class="display-3">Be a Part Of Our Store Fleet</h1>
       </v-card>
      </section>
      <section class="mt-12" id="s5">
        <v-layout column wrap class="my-5">
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <img src="@/assets/Chat.svg" width="100%" alt="delivery" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <h1 class="display-3 mt-6">Come Talk To Us</h1>
                    </v-card-title>
                    <v-card-actions class="layout justify-center">
                      <v-btn depressed  router: to="/contact" fab x-large>
                        <v-icon>mdi-chevron-triple-right</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: "Home",
  };
</script>
<style scoped>
.logo{
  font-family: 'Monoton', cursive;
  font-size: 164px;
}
  .vs {
    padding-top: 10%;
    float: left;

  }
  #s1 {
    height: 100vh;
    padding: 2em;
    margin: 1em 0;
    border-radius: 25px;
  }
   #s2{
    height: 75vh;
    border-radius: 25px;
    padding: 1em;
    margin: 1em 0;
    /* background-image: linear-gradient(45deg, #dd3e5395 15%,#6be58595 85%);
 */ } 
  #s3{
    height: 90vh;
    padding: 1em;
    margin: 1em 0;
  }
  #s4{
    height: 40vh;
    padding: 1em;
    margin: 1em 0;
  }
  #s5 {
    background-image: linear-gradient(45deg, #659999 25%, #ffdde1 80%);
    padding: 1em;
    margin: 1em 0;
    color: #fff;
    border-radius: 25px;
  } 
</style>
