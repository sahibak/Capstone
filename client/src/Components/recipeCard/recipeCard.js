import React from "react";

export default class RecipeCard extends React.Component{
    
    displayIngredients(){
        // empty list to push JSX into
        let ingredientList = []
        // getting the details from the props, for the recipe to be displayed 
        let recipeDetails = this.props.recipesData[this.props.count]
        // getting ingredient list
        let ingredients = recipeDetails["ingredients"]
        // for every item in ingridients, run the loop and create JSX
        for (let i=0; i<ingredients.length; i++){
            let { name, qty, unit } = ingredients[i]
            ingredientList.push(
                <li key = {i}>{qty} {unit} of {name}</li>
            )
        }   
        return ingredientList;     
    }

    displayRecipeSteps(){
        let recipeList = []
        // getting the details from the props, for the recipe to be displayed 
        let recipeDetails = this.props.recipesData[this.props.count]
        // getting the recipe steps 
        let recipeSteps =   recipeDetails["recipe"]
        // for steps in recipe, run loop and create JSX
        for (let i=0; i<recipeSteps.length; i++){
            recipeList.push(
                 <li key = {i}>{recipeSteps[i]}</li>
            )
        }
        return recipeList; 
    }


    render(){
        if(this.props.recipesData.length > 0){
            return(
                <>
                    <ul>{this.displayIngredients()}</ul>
                    <ul>{this.displayRecipeSteps()}</ul>
                </>
            )
        }
        return(
            <>
            </>
        )
    }
}