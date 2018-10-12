var router = require("express").Router();
var { saveCart } = require("../db/cart");


router.post('/save', (req, res) => {
    console.log(req.body);   
    saveCart(req.body).then(data => {
        console.log(data);
        
        res.json(data)
    })
})

module.exports = router;
