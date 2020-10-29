import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAGKuZId5_O7bxe4ynX2VS3L3VBsPrqhDM",
  authDomain: "inv-vue.firebaseapp.com",
  databaseURL: "https://inv-vue.firebaseio.com",
  projectId: "inv-vue",
  storageBucket: "inv-vue.appspot.com",
  messagingSenderId: "505188742727",
  appId: "1:505188742727:web:364d32dfd7384cbee42362"
};
// Initialize Firebase
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  export default firebaseapp.firestore()