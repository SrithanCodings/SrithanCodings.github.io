// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

var queryString = location.search.substring(1);

let addToCart = document.querySelectorAll(".addToCartPlus");
let addToCartMinus = document.querySelectorAll(".addToCartMinus");

const itemno = document.querySelector("#itemno");
let itemNumber = 0;
const cart = document.getElementById("cart");
const orders = document.getElementById("orders");

const items = document.querySelectorAll(".items");
let cartArray = [];
let i =0;
        let elementval = [];
        let elementkey = [];
        readDatabase();
  
function readDatabase(){
  if(queryString == ""){
    return;
  }
var firebaseRef = firebase.database().ref('users/' + queryString + '/My Cart/');   
        
        
          
        firebaseRef.once("value", snapshot => {
          snapshot.forEach(element => {
            elementkey.push(element.key);
            //elementval.push(element.val());
            var firebase_Ref = firebase.database().ref('users/' + queryString + '/My Cart/' + element.key);
            firebase_Ref.once("value", snapshot => {
              snapshot.forEach(element => {
                elementval.push(element.val());
              })});
            i++;
          }
          )
      });
    }

            setTimeout(() => console.log(elementkey, elementval), 5000)

addToCart.forEach(cart => {
  

    cart.addEventListener("click", () => {
      if(queryString == ''){
        window.location.href = "login.html";
        return 
      }
    itemNumber++;
    itemno.textContent = itemNumber;
    cartArray.push(cart.id);
    console.log(cartArray);
    var database_ref = database.ref()
    let cartid = cart.id;
    let itemNameID = cartid + "label";
    let itemname = document.getElementById(itemNameID).innerHTML;
    itemname = Number(itemname);
    document.getElementById(itemNameID).innerHTML = ++itemname
    // Create User data
          

      var firebaseRef = firebase.database().ref("My Cart/" + cart.id);   
        let i =0;
        let elementval;
        let elementkey;
  
        
          
            firebaseRef.once("value", snapshot => {
                snapshot.forEach(element => {
                  elementkey = element.key;
                  elementval = element.val();
                  i++;
                }
                )});
                

          setTimeout(() => {
            console.log(elementval)
            if(elementval == undefined){
                elementval = 0
            }
            elementval++;
            var cart_data = {
                Item_Number : itemname
          }
            database_ref.child('users/' + queryString + '/My Cart/' + cartid).set(cart_data);

          }, 2000);
            
          
          
   
            
      
  
          
})})
console.log(Date.now())
addToCartMinus.forEach(cart => {

    cart.addEventListener("click", () => {
      if(queryString == ''){
        window.location.href = "login.html";
        return 
      }
        var database_ref = database.ref()
        let cartid = cart.id;
        let itemNameID = cartid + "label";
        let itemname = document.getElementById(itemNameID).innerHTML;
        itemname = Number(itemname);
        
    if(itemname <= 0){
        return;
    }
    itemNumber--;
    itemno.textContent = itemNumber;
    cartArray.push(cart.id);
    console.log(cartArray);
    
    document.getElementById(itemNameID).innerHTML = --itemname
    // Create User data
          

      
                

          setTimeout(() => {
            var cart_data = {
                Item_Number : itemname
          }
            database_ref.child('users/' + queryString + '/My Cart/' + cartid).set(cart_data);

          }, 4000);
            
          
          
   
            
      
  
          
})})



setTimeout(() => {
  console.log(elementval.length)

  for(i = 0; i < elementval.length; i++){
    if(!elementval[i] == 0){
      
      itemNumber += elementval[i];
      
    }
  }
  
  itemno.textContent = itemNumber;

}, 2000);

const cartLabel = document.querySelectorAll(".cartLabel");
let p = 0;   
setTimeout(() => {
  
  for(i = 0; i < cartLabel.length; i++){
    let foodItemName = cartLabel[i].id.slice(0, cartLabel[i].id.indexOf("label"));
    if(queryString == ''){
      document.getElementById(cartLabel[i].id).innerHTML = 0;
      continue;
    }
    for(let j = 0; j < elementval.length; j++){
    
    if(foodItemName == elementkey[j]){
      document.getElementById(cartLabel[i].id).innerHTML = elementval[j];
      break;
    }
    else{
      document.getElementById(cartLabel[i].id).innerHTML = 0;

    }
    
  }
  }
  document.getElementById("main").style.display ="block"
  document.getElementById("loader").style.display ="none"

}, 2000)

cartLabel.forEach(cart => {
  
  cart.textContent = elementval[p];
  p++;
})
cart.addEventListener("click", () => {
  if(queryString == "" || queryString == null){
    window.location.href = `login.html`;
  }
  else{
  window.location.href = `carts.html?${queryString}`;
  }
});

if(queryString == ""){
  document.getElementById("logout").style.display = "none";
}
else{
  document.getElementById("login").style.display = "none";
}
const searchbox = document.getElementById("searchbox")

window.addEventListener("keydown", (key) => {
if(key.key == "Enter"){
  let searchbox = document.getElementById("searchbox").value;
  const itemsName = document.getElementsByClassName("items");
  let itemsNameId = [];
  for(i = 0; i < itemsName.length; i++){
    console.log(itemsNameId)
    itemsNameId.push(itemsName[i].id);
  }
  /*itemsName.forEach(item => {
    itemsNameId.push(item.id);
  })*/
  if(searchbox.length == 0){
    document.getElementById("img").style.display = "block";
    document.getElementById('noItems').style.display = "none";


    for(i = 0; i < itemsName.length; i++){
      document.getElementById(itemsName[i].id).style.display = "block";
    }
    return;
  }
  console.log(itemsNameId)
  searchbox = searchbox.toLowerCase();

for(let i = 0; i < searchbox.length; i++){
  for(let j = 0; j < itemsNameId.length; j++){
    console.log(itemsNameId[j])
    if(searchbox[i] == itemsNameId[j][i]){
      document.getElementById(itemsNameId[j]).style.display = "block";

    }
    if(searchbox[i] != itemsNameId[j][i]){
      console.log(itemsNameId[j]);
      document.getElementById("img").style.display = "none";
      console.log(itemsNameId[j])
      document.getElementById(itemsNameId[j]).style.display = "none";
      itemsNameId.splice(j, 1);
      console.log(itemsNameId)
      j--;
    }
    
  }
}
let itemDisplay = false;
  for(i = 0; i < itemsName.length; i++){
    if(document.getElementById(itemsName[i].id).style.display == "block"){
      itemDisplay = true;
    }
  }
  if(itemDisplay == false){
    document.getElementById('noItems').style.display = "block";
  }
  else{
    document.getElementById('noItems').style.display = "none";

  }
}
})