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
  

let transferButton = document.getElementById("transfer");

function searchUser(uid){
    console.log(uid);
    let elementval = ["users", "user", "user", "user", "user", "user", "user"];
let elementkey = ["users", "user", "user", "user", "user", "user", "user"];
    
      var firebaseRef = firebase.database().ref("users/" + uid);   
      let i =0;

      firebaseRef.once("value", snapshot => {
        snapshot.forEach(element => {
          elementkey[i] = element.key;
          elementval[i] = element.val();
          i++;
          setTimeout(() => console.log(elementval[i]), 1000);
          
        }

        
        
        );

    });
    return elementval;
  }

transferButton.addEventListener("click", () => {
    let userUid =  document.getElementById("userUid").value;
    let userUsername =  document.getElementById("userUsername").value;
    let transferUid =  document.getElementById("transferUid").value;
    let transferUsername =  document.getElementById("transferUsername").value;
    let amount =  document.getElementById("amount").value;
    if(userUid == "" || userUsername == "" || transferUid == "" ||transferUsername == "" || amount == ""){
      alert("Please enter the inputs to all the fields");
      return;
    }
    let elementvalue = searchUser(userUid);
    setTimeout(() => {
      console.log(elementvalue[5]);
    if(userUsername == elementvalue[5]){
      elementvalue[0] = Number(elementvalue[0]);
      if(amount > elementvalue[0]){
        alert(`No sufficient balance in ${elementvalue[5]}'s account`);
        return;
      }
      elementvalue[0] -= amount;
      var database_ref = database.ref()
      console.log(elementvalue[0]);
  
      // Create User data
      var user_data = {
        Amount : elementvalue[0]
  }
      database_ref.child('users/' + userUid).update(user_data);

      let elementvalues = searchUser(transferUid);
      setTimeout(() => {
            console.log(elementvalues[5]);
            if(transferUsername == elementvalues[5]){
            console.log(elementvalues[0]);
        
            elementvalues[0] = Number(elementvalues[0]);
            amount = Number(amount);
            console.log(elementvalues[0]);
        
            elementvalues[0] += amount;
            var database_ref = database.ref()
            console.log(elementvalues[0]);
        
            // Create User data
            var user_data = {
                Amount : elementvalues[0]
        }
            database_ref.child('users/' + transferUid).update(user_data);
        
            
        setTimeout(() => {
            window.location.href = "admin.html";
        }, 100)
      }
      
        else{
          alert("The username or UID of the person to whom the money is transferred is invalid")
        }
      
      }, 2000)


      
      
    }
    else{
      alert("The username or UID of user is invalid");
    }
    
    
  
  
  }, 2000)
})

let logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  window.location.href = `index.html`;
 })