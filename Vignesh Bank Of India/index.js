let date = new Date;
date = date.toLocaleString();

const firebaseConfig = {
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

document.getElementById("RegisterButton").onclick = function(){
//function register(){
  console.log("You are registered");
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let phone = document.getElementById("phoneNumber").value;
  let password = document.getElementById("password").value;

  if(validate_email(email) == false){
    alert("Please enter a proper email");
    return;
  }
  else if(validate_password(password) == false){
    alert("Please enter a proper password of length 6 characters");
    return;
  }
  else if(validate_field(username) == false){
    alert("Please enter your username");
    return;
  }
  else if(validate_field(phone) == false){
    alert("Please enter your phone number");
    return;
  }


  auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
        var user = auth.currentUser;

        var database_ref = database.ref();
        var user_data = {
          Email : email,
          Username : username,
          Phone_number : phone,
          Last_Login : date,
          Amount: 0,
          Loan: 0
        }

        database_ref.child('users/' + user.uid).set(user_data);
        alert("User Created");
        
      })
      .catch(error => {
          var error_code = error.code;
          var error_message = error.message;

          alert(error_message);
      })

}

let elementval = ["user"];
let elementkey = ["user"];

let userr;

document.getElementById("adminLogin").onclick = function(){
  let email = document.getElementById("loginemail").value;
  let password = document.getElementById("loginPassword").value;

  if(email == "srithanvigneshadmin@vigneshbank.co.in"){
    if(password == "vignesh_netbank@2107#2008"){
      setInterval(() => window.location.href = `admin.html`, 2000)
    }
  }
  else{
    alert("Wrong username or password");
  }
}

document.getElementById("loginButton").onclick = function(){
  let email = document.getElementById("loginemail").value;
  let password = document.getElementById("loginPassword").value;

  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Please enter Email and Password')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  //auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    
    // Declare user variable
    var user = auth.currentUser
    
    userr = user;

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      Last_Login : date,
}
    database_ref.child('users/' + user.uid).update(user_data)
    

    // DOne
    //alert('User Logged In!!')
    //
    var firebaseRef = firebase.database().ref("users/" + user.uid);
    
    let i = 0;
    firebaseRef.on("value", snapshot => {
      snapshot.forEach(element => {
         elementkey.push(element.key);
         elementval.push(element.val());
         i++;
      }
      );
    })
    console.log(elementval, elementkey)
    setInterval(() => window.location.href = `login.html?${user.uid}`, 2000)
  
  })
      .catch(error => {
        var error_code = error.code;
        var error_message = error.message;

        alert(error_message);
    })
};
console.log(elementval)

export let users = userr;
export const elementvalue = elementval;


function validate_email(email){
  
  let expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if(expression.test(email) == true){
    return true;
  }
  else{
    return false;
  }
}

function validate_password(password){
  if(password < 6){
    return false;
  }
  else{
    return true;
  }
}

function validate_field(field){
  if(field == null){
    return false;
  }
  else if(field.length <= 0){
    return false;
  }
  else{
    return true;
  }
}


document.getElementById("signUpButton").onclick = function(){
  document.getElementById("userLogin").style.display = "none";
  document.getElementById("userRegister").style.display = "block";
  
}

document.getElementById("login").onclick = function(){
  document.getElementById("userRegister").style.display = "none";
  document.getElementById("userLogin").style.display = "block";

}

/*import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGQ8FtSWEYXFkL9rDZjC5n3vsz54R2UvU",
  authDomain: "bankingproject-a1680.firebaseapp.com",
  databaseURL: "https://bankingproject-a1680-default-rtdb.firebaseio.com",
  projectId: "bankingproject-a1680",
  storageBucket: "bankingproject-a1680.appspot.com",
  messagingSenderId: "367251452492",
  appId: "1:367251452492:web:a94f6c3ccfe9e2a81afae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signUpButton").onclick = function(){
    document.getElementById("userLogin").style.display = "none";
    document.getElementById("userRegister").style.display = "block";

}

document.getElementById("login").onclick = function(){
    document.getElementById("userRegister").style.display = "none";
    document.getElementById("userLogin").style.display = "block";

}

function loginClick(){
    const loginEmail = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Wrong username or password");

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Wrong username or password");
  });
  alert("cld");

} */