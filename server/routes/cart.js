var router = require("express").Router();
var { saveCart } = require("../db/cart");


router.post('/save', (req, res) => {
    console.log(req.body);   
    saveCart(req.body)
})

module.exports = router;
