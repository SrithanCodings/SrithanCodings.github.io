
const firebaseConfigur = {
    apiKey: "AIzaSyBYN2HM7mRhQm1u-z_RgjKLKRdpI7VX0Ps",
    authDomain: "vignesh-restaurant.firebaseapp.com",
    projectId: "vignesh-restaurant",
    storageBucket: "vignesh-restaurant.appspot.com",
    messagingSenderId: "477227373654",
    appId: "1:477227373654:web:44c19240b27b94aeb2d7f7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfigur);
  let cartArray = []
  
  const database = firebase.database();

  function generate_orderId(){
      let orderId = Math.floor(Math.random()*10000)
      return orderId
  }

  export function ordernow(grandTotal){
    let date = new Date;
    date = date.toLocaleString();
    var database_ref = database.ref();
    var cart_data = {
        Grand_Total : grandTotal,
        Items: items,
        Date: date
  }
    database_ref.child('users/' + queryString + '/Orders/' + generate_orderId()).set(cart_data);
  }