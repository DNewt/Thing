const db = require("./connection");

function saveCart(cart) {
    console.log('hit db');
    console.log(cart);
    let stringyCartString = JSON.stringify(cart)
    return db("carts").insert({
        savedcart: stringyCartString
    }).then(data => {
        console.log(data);
        
    })
      
     
  }

  module.exports = {
      saveCart
  }