// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{amount} from "./cart.js"
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
let cartArray = []

const database = firebase.database();
var queryString = location.search.substring(1);

var firebaseRef = firebase.database().ref('users/' + queryString + '/My Cart/');   
        let i =0;
        let elementval = [];
        let elementkey = [];

        
        
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
 
setTimeout(() => {  console.log(elementval.length)

  for(i = 0; i < elementval.length; i++){
    if(elementval[i] == 0){
      console.log("hello");
    }
    else{
      let divTag = document.createElement("div");
      divTag.id = "cart" + i;
      divTag.className = "foodItem";
      divTag.innerHTML=`<br><br><br><br><br><br><img height="200px" width="200px" src="${elementkey[i]}.webp"><br><br><br><br>
      <label class = "itemName">${elementkey[i]}</label>
      <div id="addtocart">
    <button id="${elementkey[i]}" class="addToCartPlus">+</button><button id="${elementkey[i] + 'label'}" class="cartLabel">${elementval[i]}</button><button id="${elementkey[i]}" class="addToCartMinus">-</button>
    <label class="amount" id="${elementkey[i] + "amountlabel"}">₹${checkPrice(i)}</label>
    <label class="price" id="${elementkey[i] + "amount"}">₹${elementval[i] * checkPrice(i)}</label>
    <br><br><br><br><br><br>`;
      const item = document.getElementById("item")
      item.append(divTag);
      console.log("HELLO");
      itemNumber += elementval[i];
      
    }
  }
  addToCart = document.querySelectorAll(".addToCartPlus");
  addToCartMinus = document.querySelectorAll(".addToCartMinus");
  console.log(addToCart)
  itemno.textContent = itemNumber;
   prices = document.querySelectorAll(".price");
   prices.forEach(price => {
    totalAmount += Number(price.textContent.slice(1));
   })
  document.getElementById("total").textContent = `Total: ₹${totalAmount}`   
   gst = totalAmount * 12/100;
   document.getElementById("gst").textContent = `GST(12%): ₹${gst}`;
   grandTotal = gst + totalAmount;
   document.getElementById("grandTotal").textContent = `Grand Total: ₹${grandTotal}`
 }, 2000)

const items = document.getElementById("item");
let addToCart = [];
let addToCartMinus = [];

const itemno = document.querySelector("#itemno");
let itemNumber = 0;
const cart = document.getElementById("cart");
const orders = document.getElementById("orders");
let prices;
let gst = 0;
let totalAmount = 0;
let grandTotal = gst + totalAmount;
//const items = document.querySelectorAll(".items");




function checkPrice( i){
  return amount[i][1];
}

setTimeout(() => {addToCart.forEach(cart => {
  cart.addEventListener("click", () => {
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
  let itemAmount = document.getElementById(cartid + "amount").textContent;
  let unititemAmount = document.getElementById(cartid + "amountlabel").textContent;
  console.log(itemAmount, unititemAmount, itemname, cartid);

  itemAmount = itemAmount.slice(1);
  unititemAmount = unititemAmount.slice(1);
  console.log(itemAmount, unititemAmount, itemname, cartid);

  itemAmount = Number(itemAmount);
  unititemAmount = Number(unititemAmount);
  itemAmount = unititemAmount * itemname;
  console.log(itemAmount, unititemAmount, itemname, cartid);
  totalAmount = 0;
  document.getElementById(cartid + "amount").textContent = "₹" + itemAmount;
  prices.forEach(price => {
    totalAmount += Number(price.textContent.slice(1));
   })
  document.getElementById("total").textContent = `Total: ₹${totalAmount}`   
   gst = totalAmount * 12/100;
   document.getElementById("gst").textContent = `GST(12%): ₹${gst}`;
   grandTotal = gst + totalAmount;
   document.getElementById("grandTotal").textContent = `Grand Total: ₹${grandTotal}`
  
  // Create User data
        

    var firebaseRef = firebase.database().ref('users/' + queryString + '/My Cart' + cart.id);   
      let i =0;
      let elementval;
      let elementkey;

      
        
          firebaseRef.once("value", snapshot => {
          snapshot.forEach(element => {
            elementkey.push(element.key());
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

addToCartMinus.forEach(cart => {
  cart.addEventListener("click", () => {
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
  let itemAmount = document.getElementById(cartid + "amount").textContent;
  let unititemAmount = document.getElementById(cartid + "amountlabel").textContent;
  console.log(itemAmount, unititemAmount, itemname, cartid);

  itemAmount = itemAmount.slice(1);
  unititemAmount = unititemAmount.slice(1);
  console.log(itemAmount, unititemAmount, itemname, cartid);

  itemAmount = Number(itemAmount);
  unititemAmount = Number(unititemAmount);
  itemAmount = unititemAmount * itemname;
  console.log(itemAmount, unititemAmount, itemname, cartid);
  totalAmount = 0;
  document.getElementById(cartid + "amount").textContent = "₹" + itemAmount;
  prices.forEach(price => {
    totalAmount += Number(price.textContent.slice(1));
   })
  document.getElementById("total").textContent = `Total: ₹${totalAmount}`   
   gst = totalAmount * 12/100;
   document.getElementById("gst").textContent = `GST(12%): ₹${gst}`;
   grandTotal = gst + totalAmount;
   document.getElementById("grandTotal").textContent = `Grand Total: ₹${grandTotal}`
      
  // Create User data
        
    console.log(cartid);
 
    if(itemname == 0){
      for(i = 0; i<=elementkey.length; i++){
        if(elementkey[i] == cartid){
          console.log("cart" + i)
          document.getElementById("cart" + i).style.display = "none";
                    break;
        }
      }
       
      //document.getElementById(e).style.display = "none";
    }
              

        setTimeout(() => {
          var cart_data = {
              Item_Number : itemname
        }
          database_ref.child('users/' + queryString + '/My Cart/' + cartid).set(cart_data);

        }, 2000);
          
        
        
 
          
    

        
})})}, 2000)
document.getElementById("orderNow").addEventListener("click", () => window.location.href = `ordernow.html?${queryString}|${grandTotal}`);

document.getElementById("home").addEventListener("click", () => window.location.href = `index.html?${queryString}`);
