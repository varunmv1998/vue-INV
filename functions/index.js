const { parseFloat } = require('core-js/fn/number');
const functions = require('firebase-functions');


// // Create and Deploy Your First Cloud Functions
subtotal(){
   parseFloat(this.subtotal) = this.total - this.gst
}
total(){
   parseInt(this.total) = this.ppu * this.ppu
}

// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
