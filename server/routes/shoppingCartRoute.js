// setting up express
const express = require("express");
// setting up router
const router = express.Router();
// exporting router
module.exports = router;

// importing data
shoppingCartData = require("../data/shoppingCartData.js");

// pre-cursor to POST request
router.use(express.json());

// POST Request
router.post("/",(request,response) => {
    // adding ingredients to the shopping list
    console.log(request.body)
    shoppingCartData.push(request.body)
    response.send("items posted")
})

// GET Request
router.get("/",(request,response) => {
    console.log(shoppingCartData)
    response.send(shoppingCartData)
})