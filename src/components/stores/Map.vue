<template>
  <div>
    <h1 class="headline grey--text my-2">Store Locations</h1>
    <v-container class="stores">
      <!-- <v-card
      color="grey lighten-3"
       elevation="5"
            min-width="400px">
         <v-toolbar dark  color="brown">
            <v-card-title>
              <v-icon>mdi-office-building-marker-outline</v-icon>
            </v-card-title>
          </v-toolbar>
          <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=dmart,1/2,%20Kanakapura%20Rd,%20Bayyanapalya,%20Vajarahalli%20Village,%20Talaghattapura,%20Bengaluru,%20Karnataka%20560062+(Your%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
</v-card> -->

<v-card
      color="grey lighten-3"
      elevation="5"
            min-width="400px">
         <v-toolbar dark color="brown">
            <v-card-title>
              <v-icon>mdi-office-building-marker-outline</v-icon>
            </v-card-title>
          </v-toolbar>
          <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=vishal%20mega%20mart,ward%20no.184,%20SIRI%20Landmark,%20Khata%20No.714,%2013,%20Uttarahalli%20Main%20Rd,%20Chikkalasandra,%20Bengaluru,%20Karnataka%20560068+(varn)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </v-card>
<v-card
      color="grey lighten-3"
       elevation="5"
            min-width="400px">
         <v-toolbar dark  color="brown">
            <v-card-title>
              <v-icon>mdi-office-building-marker-outline</v-icon>
            </v-card-title>
          </v-toolbar>
          <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=dmart,A,%20Ground%20Floor%20Sri%20Garuda%20Swagath%20Mall%2065,%2078%2079,%20Tilak%20Nagar%20Main%20Rd,%20Tilak%20Nagar,%20Bengaluru,%20Karnataka%20560011+(varn)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </v-card>
          <v-card
      color="grey lighten-3"
       elevation="5"
            min-width="400px">
         <v-toolbar dark  color="brown">
            <v-card-title>
              <v-icon>mdi-office-building-marker-outline</v-icon>
            </v-card-title>
          </v-toolbar>
          <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=shrinidhi%20condiments,31,%203rd%20Main%20Rd,%20Krishna%20Nagar%20Badavane,%20Krishnanagar,%20Ankappa%20Layout,%20Uttarahalli%20Hobli,%20Bengaluru,%20Karnataka%20560061+(varn)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </v-card>
          </v-container>
  </div>
</template>

<script>
  import fb from "../firebase/init";
  import firebase from "firebase";
  export default {
    name: "Map"
    }
   
</script>

<style>
  .stores {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 30px;
    margin-top: 60px;
  }
  .delete {
    position: absolute;
    top: 10px;
    left: 85%;
    cursor: pointer;
  }
</style>

