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

let elementvalue = searchUser(queryString);

setTimeout(() => {
    document.getElementById("name").textContent = `Name: ${elementvalue[5]}`;
    document.getElementById("email").textContent = `E-mail: ${elementvalue[1]}`;
    document.getElementById("phone").textContent = `Phone Number: ${elementvalue[4]}`;
    document.getElementById("balance").textContent = `Balance Amount: ₹${elementvalue[0]}`;
    document.getElementById("balanceloan").textContent = `Balance Loan: ₹${elementvalue[3]}`;
    document.getElementById("uid").textContent = `User ID [UID]: ${queryString}`;
}, 2000)

let logout = document.getElementById("logout");

  logout.addEventListener("click", () => {
    window.location.href = `index.html`;
   })