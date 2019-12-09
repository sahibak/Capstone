import React from "react";
import Like from '../../assets/like.svg';
import NotLike from '../../assets/notlike.svg';
import NotDislike from '../../assets/dislike-outline.svg';
import Dislike from '../../assets/dislike-active.svg';
import "./recipeCardStyleRIB.scss";
import Sun from "../../assets/sun-with-face.svg";
import Timer from "../../assets/timer-clock.svg";
import RightArrow from "../../assets/rightArrow.svg";
import Ingredients from "../ingredients/ingredients";
// import Crop from "../../assets/crop.png";



export default class RecipeCardRIB extends React.Component{
    state={
        liked:"false",
        disliked:"false"
    }
    
    displayIngredients(){
        // empty list to push JSX into
        let ingredientList = []
        // getting ingredient list
        let ingredients = this.props.recipe["ingredients"]
        // for every item in ingridients, run the loop and create JSX
        for (let i=0; i<ingredients.length; i++){
            let { name, qty, unit, image } = ingredients[i]
            ingredientList.push(
                <>
                    <div key = {i} className="ingredient__Group">
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
        // getting the recipe steps 
        let recipeSteps = this.props.recipe["recipe"]
        // for steps in recipe, run loop and create JSX
        for (let i=0; i<recipeSteps.length; i++){
            recipeList.push(
                 <li key = {i}>{recipeSteps[i]}</li>
            )
        }
        return recipeList; 
    }

    render(){
        console.log(this.props.recipe)
        return(
            <>
                <article className="recipeCard">
                <p className="h4 font-weight-bold recipe-name">{this.props.recipe["name"]}</p>
                    <div>{this.displayIngredients()}</div>
                    <ul>{this.displayRecipeSteps()}</ul>
                </article>
            </>
        )
    }
}