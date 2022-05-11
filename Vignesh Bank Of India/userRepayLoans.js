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
  var queryString = location.search.substring(1);
 
  
         //const app = initializeApp(firebaseConfig);
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

    window.onload = function loadPage(){
        let repayButton = document.getElementById("repayButton")
        let balance = document.getElementById("balance");
        let balanceAmount = document.getElementById("balanceAmount");
        let erepayvalue = searchUser(queryString);
        setTimeout(() => {
            balance.textContent =  erepayvalue[3];
            balanceAmount.textContent = erepayvalue[0];
        }, 2000)
    }




repayButton.onclick = function(){
    let repay = document.getElementById("repay").value 
    if(repay == ""){
      alert("Please enter the inputs to all the fields");
      return;
    }
    let elementvalue = searchUser(queryString);
        setTimeout(() => {
          
      
          elementvalue[0] = Number(elementvalue[0]);
          elementvalue[3] = Number(elementvalue[3]);
          if(repay <= 0){
            alert("Please enter a positive number in amount's input field")
            return
          }
          else  if(elementvalue[0] >= repay && elementvalue[3] >= repay){
                elementvalue[0] -= repay;
                elementvalue[3] -= repay;
            }
            else if(elementvalue[0] < repay){
                alert("No suffficient balance in your account");
                return;
            }
            else if(elementvalue[3] < repay){
                alert("You are entering a higher repay amount");
                return;
            }
          
          var database_ref = database.ref()
      
          // Create User data
          var user_data = {
            Amount : elementvalue[0],
            Loan: elementvalue[3]
      }
          database_ref.child('users/' + queryString).update(user_data);
          
          setTimeout(() => {
            window.location.href = `login.html?${queryString}`;
        }, 100)
        
        
        }, 2000)
        
      
      
}

let logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  window.location.href = `index.html`;
 })