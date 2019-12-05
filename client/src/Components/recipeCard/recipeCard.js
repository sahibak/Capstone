import React from "react";
import RecipeImage from "../recipeImage/recipeImage.js";
import "./style.scss";

export default class RecipeCard extends React.Component{
    
    displayIngredients(){
        // empty list to push JSX into
        let ingredientList = []
        // getting the details from the props, for the recipe to be displayed 
        let recipeDetails = this.props.recipesData[this.props.count]
        // getting ingredient list
        console.log(recipeDetails)
        let ingredients = recipeDetails["ingredients"]
        // for every item in ingridients, run the loop and create JSX
        for (let i=0; i<ingredients.length; i++){
            let { name, qty, unit, image } = ingredients[i]
            ingredientList.push(
                <>
                    <div className="ingredient__Group">
                        <img className="z-depth-4 ingredient__Image" src={image} alt=""/>
                        <ul className="ingredient__List">
                            <li key = {i}>{name}</li>
                            <li className="ingredient__Qty">{qty} {unit}</li>
                        </ul>
                    </div>
                </>
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
        return(
            <>
                <article className="ingredient__all">
                    <img className="z-depth-4 ingredient__Image ingredient__heroImage" src={this.props.recipesData[this.props.count]["image"]} alt=""/>
                    <p>{this.props.recipesData[this.props.count]["name"]}</p>
                    {this.displayIngredients()}
                </article>
                {/* <ul>{this.displayRecipeSteps()}</ul> */}
            </>
        )
    }
}