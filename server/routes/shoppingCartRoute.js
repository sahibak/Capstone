// setting up express
const express = require("express");
// setting up router
const router = express.Router();
// exporting router
module.exports = router;

// pre-cursor to POST request
router.use(express.json());

// // importing data
// shoppingCartData = require("../data/shoppingCartData.js");

// // POST Request
// router.post("/",(request,response) => {
//     // adding ingredients to the shopping list
//     console.log(request.body)
//     shoppingCartData.push(request.body)
//     response.send("items posted")
// })

// // GET Request
// router.get("/",(request,response) => {
//     console.log(shoppingCartData)
//     response.send(shoppingCartData)
// })

// importing data
recipes = require("../data/recipesData.js")
// POST Request
router.post("/",(request,response) => {
    console.log("posting data on shopping cart")
    for (let i = 0; i<recipes.length; i++){
        if(recipes[i]["id"] == request.body.id && !recipes[i]["shopping"]){
            console.log("entered if")
            recipes[i]["shopping"] = true;
            break;
        }
        else if (recipes[i]["id"] == request.body.id){
            console.log("entered else")
            recipes[i]["shopping"] = false;
            break;
        }
    }
    response.send(recipes)
})

// GET Request
router.get("/",(request,response) => {
    let recipesToSend = [];
    for (let i =0; i<recipes.length; i++){
        if (recipes[i]["shopping"] == true){
            recipesToSend.push(recipes[i])
        }
    }
    response.send(recipesToSend)
})

// POST request- removing recipes from shopping cart from recipebook
router.post("/remove",(request,response) => {
    console.log("posting data on shopping cart")
    for (let i = 0; i<recipes.length; i++){
        if(recipes[i]["id"] == request.body.id && !recipes[i]["shopping"]){
            console.log("entered if")
            recipes[i]["shopping"] = true;
            break;
        }
        else if (recipes[i]["id"] == request.body.id){
            console.log("entered else")
            recipes[i]["shopping"] = false;
            break;
        }
    }
    let recipesToSend = [];
    for (let i =0; i<recipes.length; i++){
        if (recipes[i]["shopping"] == true){
            recipesToSend.push(recipes[i])
        }
    }
    response.send(recipesToSend)
})