
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
  appId: "1:367251452492:web:cc3e04c4f80ae59f1afae9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()



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
  
  

let withdrawMoney = document.getElementById("withdrawMoney");
let depositMoney = document.getElementById("depositMoney");
let transferMoney = document.getElementById("transferMoney");
let loans = document.getElementById("loans");
let homePage = document.getElementById("homePage");
let withdrawMoneyPage = document.getElementById("withdrawMoneyPage");
let depositMoneyPage = document.getElementById("depositMoneyPage");
let withdrawButton = document.getElementById("withdaw");
let depositButton = document.getElementById("deposit");
let logout = document.getElementById("logout");


withdrawMoney.addEventListener("click", () => {
  window.location.href = `adminWithdrawPage.html`;
})

depositMoney.addEventListener("click", () => {
  window.location.href = `adminDepositPage.html`;
 })
 
 transferMoney.addEventListener("click", () => {
  window.location.href = `adminTransferMoney.html`;
 })
 
 loans.addEventListener("click", () => {
  window.location.href = `adminLoansPage.html`;
 })
 
 logout.addEventListener("click", () => {
  window.location.href = `index.html`;
 })

