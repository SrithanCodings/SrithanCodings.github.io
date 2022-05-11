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

const database = firebase.database()
  

let transferButton = document.getElementById("transfer");

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

  transferButton.addEventListener("click", () => {
    let transferUid =  document.getElementById("transferUid").value;
    let transferUsername =  document.getElementById("transferUsername").value;
    let amount =  document.getElementById("amount").value;
    let elementvalue = searchUser(queryString);
    setTimeout(() => {
      elementvalue[0] = Number(elementvalue[0]);
      if(amount > elementvalue[0]){
        alert(`No sufficient balance in ${elementvalue[5]}'s account`);
        return;
      }
      if(amount <= 0){
        alert("Please enter a positive number in amount's input field")
        return
      }
      elementvalue[0] -= amount;
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        Amount : elementvalue[0]
  }
      database_ref.child('users/' + queryString).update(user_data);

      let elementvalues = searchUser(transferUid);
      setTimeout(() => {
            if(transferUsername == elementvalues[5]){
        
            elementvalues[0] = Number(elementvalues[0]);
            amount = Number(amount);
        
            elementvalues[0] += amount;
            var database_ref = database.ref()
        
            // Create User data
            var user_data = {
                Amount : elementvalues[0]
        }
            database_ref.child('users/' + transferUid).update(user_data);
        }
        else{
          alert("Please enter a correct UID or Username of the person to whom the money is transferred")
        }
            
        setInterval(() => window.location.href = `login.html?${queryString}`, 1000)
      }, 2000)

  }, 2000)
})

let logout = document.getElementById("logout");

  logout.addEventListener("click", () => {
    window.location.href = `index.html`;
   })