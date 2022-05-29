// Import the functions you need from the SDKs you need
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
  appId: "1:367251452492:web:b3bf6f7505af36fe1afae9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const auth = firebase.auth()

function searchUser(uid){
    let elementval = ["users", "user", "user", "user", "user", "user", "user"];
let elementkey = ["users", "user", "user", "user", "user", "user", "user"];
    
      var firebaseRef = firebase.database().ref("users/" + uid);   
      let i =0;

      firebaseRef.once("value", snapshot => {
        snapshot.forEach(element => {
          elementkey[i] = element.key;
          elementval[i] = element.val();
          i++;
          
        }

        
        
        );

    });
    return elementval;
  }
   var queryString = location.search.substring(1);
   var a = queryString.split('|');

document.getElementById("pay").onclick = function(){
    document.getElementById("loader").style.display = "block";
    document.getElementById("userLogin").style.display = "none";
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let transferUid = "KDbQoGrhExXg9Sk6UuWCi6k93oK2";
  
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
      let amount =  a[1];
    let elementvalue = searchUser(user.uid);
    setTimeout(() => {
        console.log(elementvalue)

      elementvalue[0] = Number(elementvalue[0]);
      if(amount > elementvalue[0]){
        alert(`No sufficient balance in ${elementvalue[5]}'s account`);
        return;
      }
      if(amount <= 0){
        alert("Please enter a positive number in amount's input field")
        return
      }
      amount = Number(amount)
      elementvalue[0] -= amount;
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        Amount : elementvalue[0]
  }
      database_ref.child('users/' + user.uid).update(user_data);

      let elementvalues = searchUser(transferUid);
      setTimeout(() => {
        
            elementvalues[0] = Number(elementvalues[0]);
            amount = Number(amount);
        
            elementvalues[0] += amount;
            var database_ref = database.ref()
        
            // Create User data
            var user_data = {
                Amount : elementvalues[0]
        }
            database_ref.child('users/' + transferUid).update(user_data);
            setTimeout(() => {
              document.getElementById("loader").style.display = "none";
              document.getElementById("userLogin").style.display = "none";
              let svg = document.createElement("svg");
              svg.id = "svgId";
              svg.innerHTML = `<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
              <label id="thankYou">Your order will be delivered to you shortly<br><b>Thank You For Shopping With Us!</b><br><br><br></label>
              <label><a href="index.html?${a[0]}">Go Back To Home Page</a>`
              document.getElementById("tick").append(svg);

              

            }, 1000)
    }, 2000)
    }, 2000);
  
      // Add this user to Firebase Database
      
      
    })
        .catch(error => {
          var error_code = error.code;
          var error_message = error.message;
  
          alert(error_message);
      })
  };
  
  document.getElementById("amount").textContent = `Amount to be paid: ${a[1]}`;
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
  
  