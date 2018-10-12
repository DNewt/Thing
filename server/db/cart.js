const db = require("./connection");

function saveCart(cart) {
    
    let stringyCartString = JSON.stringify(cart)
    return db("carts").insert({
        savedcart: stringyCartString
    }).then(data => {
    return db("carts").select().first()
    //this wont scale so youll need to use the data callback to query the db "WHERE" id = data 
    }) 
  }

  module.exports = {
      saveCart
  }