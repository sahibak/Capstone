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
    let recipeId = request.query.id
    // filtering recipesData to get the recipe requested
    updatedRecipeData = filterRecipe(recipeId)
    response.send(updatedRecipeData);
})

// Function to filter recipesData 
filterRecipe = (recipeId) => {
    console.log("running-----")
    let updatedRecipeData = []
    // search through recipe list using a loop
    for (let i=0 ; i < recipesData.length; i++){
        if(recipesData[i]["id"] == (recipeId)){
            updatedRecipeData.push(recipesData[i])
            break;
        }
    } 
    return updatedRecipeData
}
     
   
