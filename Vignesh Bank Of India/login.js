//import {elementvalue} from "./index.js";
/*const firebaseConfig = {
    apiKey: "AIzaSyAGQ8FtSWEYXFkL9rDZjC5n3vsz54R2UvU",
    authDomain: "bankingproject-a1680.firebaseapp.com",
    databaseURL: "https://bankingproject-a1680-default-rtdb.firebaseio.com",
    projectId: "bankingproject-a1680",
    storageBucket: "bankingproject-a1680.appspot.com",
    messagingSenderId: "367251452492",
    appId: "1:367251452492:web:a94f6c3ccfe9e2a81afae9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth()
  const database = firebase.database()

  let elementval;
  let elementkey;
*/
//import { users } from "./index.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAGQ8FtSWEYXFkL9rDZjC5n3vsz54R2UvU",
      authDomain: "bankingproject-a1680.firebaseapp.com",
      databaseURL: "https://bankingproject-a1680-default-rtdb.firebaseio.com",
      projectId: "bankingproject-a1680",
      storageBucket: "bankingproject-a1680.appspot.com",
      messagingSenderId: "367251452492",
      appId: "1:367251452492:web:59aef594dd33b4451afae9"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var queryString = location.search.substring(1);

       //const app = initializeApp(firebaseConfig);
  var firebaseRef = firebase.database().ref("users/" + queryString);   
    let elementval = ["users", "user", "user", "user"];
    let elementkey = ["users", "user", "user", "user"];

    let i =0;

  firebaseRef.on("value", snapshot => {
    snapshot.forEach(element => {
       elementkey[i] = (element.key);
       elementval[i] = (element.val());
       i++;
       
    }
    
    
    );
    document.getElementById("welcome").innerHTML = `Welcome ${elementval[5]}`;


    
  })

  let elementvalue = elementval;
 
 document.getElementById("myAccount").addEventListener("click", () => {
   window.location.href = `userAccount.html?${queryString}`;
 })


 document.getElementById("transferMoney").addEventListener("click", () => {
   
  window.location.href = `userTransferMoney.html?${queryString}`
 })

 document.getElementById("loans").addEventListener("click", () => {
   
  window.location.href = `userLoans.html?${queryString}`
 })

 document.getElementById("repayLoans").addEventListener("click", () => {
   
  window.location.href = `userRepayLoans.html?${queryString}`
 })

 let logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  window.location.href = `index.html`;
 })