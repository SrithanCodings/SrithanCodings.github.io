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
  
  
  
         //const app = initializeApp(firebaseConfig);
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

let loansButton = document.getElementById("loan");
let calculateButton = document.getElementById("calculate");
let interestvalue;

calculateButton.onclick = function(){
    let uid = document.getElementById("uid").value;
    let username = document.getElementById("username").value;
    let principle = Number(document.getElementById("principle").value);
    let time = Number(document.getElementById("time").value);
    let interest = document.getElementById("interest");
    let paidAmount = document.getElementById("paidAmount");
    
    interest.innerHTML = interestvalue = (principle * 12 * time) / 100;
    paidAmount.innerHTML = (interestvalue + principle)
}


loansButton.onclick = function(){
    let uid = document.getElementById("uid").value;
    let username = document.getElementById("username").value;
    let principle = Number(document.getElementById("principle").value);
    let time = Number(document.getElementById("time").value);
    let interest = document.getElementById("interest");
    let paidAmount = document.getElementById("paidAmount");

    if(uid == "" || username == "" || principle == 0 || time == 0){
      alert("Please enter the values to all the fields");
      return;
    }
    

    interest.innerHTML = interestvalue = (principle * 12 * time) / 100;
    paidAmount.innerHTML = (interestvalue + principle)

    

    let elementvalue = searchUser(uid);
        setTimeout(() => {
          console.log(elementvalue[5]);
        if(username == elementvalue[5]){
          console.log(elementvalue[0]);
      
          elementvalue[0] = Number(elementvalue[0]);
          principle = Number(principle);
          console.log(elementvalue[0]);

          let paidvalue = interestvalue + principle;
      
          elementvalue[0] += principle;
          var database_ref = database.ref()
          console.log(elementvalue[0]);
      
          // Create User data
          var user_data = {
            Amount : elementvalue[0],
            Loan: elementvalue[3] + paidvalue
      }
          database_ref.child('users/' + uid).update(user_data);
          
          setTimeout(() => {
            window.location.href = "admin.html";
        }, 100)
        
        }
        else{
          alert("The username or UID is invalid")
        }
        }, 2000)
        
      
      
}

let logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  window.location.href = `index.html`;
 })