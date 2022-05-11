const firebaseConfig = {
    apiKey: "AIzaSyAGQ8FtSWEYXFkL9rDZjC5n3vsz54R2UvU",
    authDomain: "bankingproject-a1680.firebaseapp.com",
    databaseURL: "https://bankingproject-a1680-default-rtdb.firebaseio.com",
    projectId: "bankingproject-a1680",
    storageBucket: "bankingproject-a1680.appspot.com",
    messagingSenderId: "367251452492",
    appId: "1:367251452492:web:cc3e04c4f80ae59f1afae9"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database()
  

let withdrawButton = document.getElementById("withdaw");

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

withdrawButton.addEventListener("click", () => {
    let uid =  document.getElementById("uid").value;
    let username =  document.getElementById("username").value;
    let amount =  document.getElementById("amount").value;
    if(uid == "" || username == "" || amount == ""){
      alert("Please enter the inputs to all the fields");
      return;
    }
    let elementvalue = searchUser(uid);
    setTimeout(() => {
    if(username == elementvalue[5]){
      elementvalue[0] = Number(elementvalue[0]);
      if(amount > elementvalue[0]){
        alert(`No sufficient balance in ${elementvalue[5]}'s account`);
        return;
      }
      elementvalue[0] -= amount;
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        Amount : elementvalue[0]
  }
      database_ref.child('users/' + uid).update(user_data);
      setTimeout(() => {
          window.location.href = "admin.html";
      }, 100)
      
    }
    else{
      alert("The username or UID is invalid")
      return;
    }
    }, 2000)
    
  
  
  })

  let logout = document.getElementById("logout");

  logout.addEventListener("click", () => {
    window.location.href = `index.html`;
   })