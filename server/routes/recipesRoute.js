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
    // getting all query params sent with request
    let userInput = request.query.userInput
    let userSearch = request.query.userSearch
    // updating the recipe list to display based on params
    updatedRecipesData = filterBasedOnUserPreferances(userInput, userSearch)
    response.send(updatedRecipesData);
})

// Function to filter recipesData based on get request params
filterBasedOnUserPreferances = (userInput, userSearch) => {
    console.log("running-----")
    let updatedRecipesData = []
    // search through recipe list using a loop
    for (let i=0 ; i < recipesData.length; i++) {
        // filtering the data to be sent back via axios.response
        // if user has provided selections and search terms
        if(userInput && userSearch){
            console.log("both defined")
            for(let n= 0 ; n < userInput.length; n++){
                if((recipesData[i]["name"] == (userSearch) ||
                recipesData[i]["type"] == (userSearch) ||
                recipesData[i]["ingredientList"].includes(userSearch)) && 
                !recipesData[i]["allergy"].includes(userInput[n])) {
                    updatedRecipesData.push(recipesData[i])
                }
            }
        } 
        // if user has provided only selections
        else if (userInput){
            console.log("selection defined")
            for(let n= 0 ; n < userInput.length; n++){
                if(recipesData[i]["category"].includes(userInput[n]) && 
                !recipesData[i]["allergy"].includes(userInput[n])) {
                    updatedRecipesData.push(recipesData[i])
                }
            }
        } 
        // if user has provided only search term
        else if (userSearch){
            console.log("search defined")
            if(recipesData[i]["name"] == userSearch ||
            recipesData[i]["type"] == userSearch ||
            recipesData[i]["ingredientList"].includes(userSearch)) {
                updatedRecipesData.push(recipesData[i])
            }
        }
        else {
            updatedRecipesData = recipesData
        }
    }
    updatedRecipesData.sort(() => Math.random() - 0.5)
    return updatedRecipesData
}