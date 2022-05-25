let date = new Date;
date = date.toLocaleString();

const firebaseConfig = {
    apiKey: "AIzaSyBYN2HM7mRhQm1u-z_RgjKLKRdpI7VX0Ps",
    authDomain: "vignesh-restaurant.firebaseapp.com",
    projectId: "vignesh-restaurant",
    storageBucket: "vignesh-restaurant.appspot.com",
    messagingSenderId: "477227373654",
    appId: "1:477227373654:web:44c19240b27b94aeb2d7f7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database()
  const auth = firebase.auth()

  document.getElementById("RegisterButton").onclick = function(){
    //function register(){
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
        }

        database_ref.child('users/' + user.uid).set(user_data);
        alert("User Created");

        setInterval(() => window.location.href = `login.html?${user.uid}`, 2000)
        
      })
      .catch(error => {
          var error_code = error.code;
          var error_message = error.message;

          alert(error_message);
      })

}

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
      
      let userr = user;
  
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
      
      alert("User Logged in");
      setInterval(() => window.location.href = `index.html?${user.uid}`, 2000)
    
    })
        .catch(error => {
          var error_code = error.code;
          var error_message = error.message;
  
          alert(error_message);
      })
  };

  document.getElementById("signUpButton").onclick = function(){
    document.getElementById("userLogin").style.display = "none";
    document.getElementById("userRegister").style.display = "block";
    
  }
  
  document.getElementById("login").onclick = function(){
    document.getElementById("userRegister").style.display = "none";
    document.getElementById("userLogin").style.display = "block";
  
  }
  
  