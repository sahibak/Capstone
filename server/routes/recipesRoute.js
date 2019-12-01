// setting up express
const express = require("express");
// setting up router
const router = express.Router();
// exporting router
module.exports = router;

// importing data
recipesData = require("../data/recipesData.js");

// GET request for recipes data
router.get("/",(request,response) => {
    // getting all params sent with request
    let userInput = request.query.userInput
    // updating the recipe list to display based on params
    updatedRecipesData = filterBasedOnUserPreferances(userInput)
    response.send(updatedRecipesData);
})

// Function to filter recipesData based on get request params
filterBasedOnUserPreferances = (userInput) => {
    let updatedRecipesData = []
    // search through recipe list using a loop
    for (let i=0 ; i < recipesData.length; i++) {
        // if user has provided filters, then apply them to recipes database and include recipes belonging to the categoy and exclude recipes with allergens.
        if(userInput.length > 0){
            for(let n= 0 ; n < userInput.length; n++){
                if(recipesData[i]["category"].includes(userInput[n]) && 
                    !recipesData[i]["allergy"].includes(userInput[n])){
                        updatedRecipesData.push(recipesData[i])
                }
            }
        } else{
            updatedRecipesData = recipesData
        }
    }
    return updatedRecipesData
}

