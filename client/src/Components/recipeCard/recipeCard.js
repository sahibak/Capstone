import React from "react";
import Like from '../../assets/like.svg';
import Dislike from '../../assets/face-dislike.svg';
import "./recipeCardStyle.scss";
import Sun from "../../assets/sun-with-face.svg";
// import Crop from "../../assets/crop.png";

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

    // Overview: Display recipe summary - food and time to cook
    displaySummary(){
        
        let {food, time} = this.props.recipesData[this.props.count]
        console.log(food, time)
        if(food === "breakfast"){
            return (
                <p><img src={Sun}/> {time} mins</p>
            )
        } else if (food === "lunch"){
            return (
                <p><img src={Sun}/> {time} mins</p>
            )
        } else if (food === "dinner"){
            return (
                <p><img src={Sun}/> {time} mins</p>
            )
        } else if (food === "dessert"){
            return (
                <p><img src={Sun}/> {time} mins</p>
            )
        }
    }

    render(){
        console.log(this.props.recipesData)
        return(
            <>
                <article className="ingredient__all">
                    {/* actual image for the recipe */}
                    <img className="z-depth-1 ingredient__heroImage" src={this.props.recipesData[this.props.count]["image"]} alt=""/>
                     {/* <img className="z-depth-2 ingredient__heroImage" src={Crop} alt=""/> */}
                    {/* {this.displayIngredients()} */}
                    <p className="btn btn-light font-weight-bold recipe-name">{this.props.recipesData[this.props.count]["name"]}</p>
                    {this.displaySummary()}
                    <div className="emotions">
                        <img src={Like} height="20px" width="20px" alt=""></img>
                        <img src={Dislike} height="20px" width="20px" alt=""></img>
                    </div>
                    {/* add to shopping cart button */}
                    <button onClick={this.props.recipeAdd} className="btn btn-dark font-weight-bold">Add To Recipe Book</button>
                </article>
                {/* <ul>{this.displayRecipeSteps()}</ul> */}
            </>
        )
    }
}