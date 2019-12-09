import React from "react";
import Like from '../../assets/like.svg';
import NotLike from '../../assets/notlike.svg';
import NotDislike from '../../assets/dislike-outline.svg';
import Dislike from '../../assets/dislike-active.svg';
import "./recipeCardStyle.scss";
import Sun from "../../assets/sun-with-face.svg";
import Timer from "../../assets/timer-clock.svg";
import RightArrow from "../../assets/rightArrow.svg";
// import Crop from "../../assets/crop.png";

export default class RecipeCard extends React.Component{
    state={
        liked:"false",
        disliked:"false"
    }
    
    displayIngredients(){
        // empty list to push JSX into
        let ingredientList = []
        // getting the details from the props, for the recipe to be displayed 
        let recipeDetails = this.props.recipesData[this.props.count]
        // getting ingredient list
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
        if(food === "breakfast"){
            return (
                <p><img src={Sun} alt=""/> <img src={Timer} alt=""/>{time} mins</p>
            )
        } else if (food === "lunch"){
            return (
                <p><img src={Sun} alt=""/> {time} mins</p>
            )
        } else if (food === "dinner"){
            return (
                <p><img src={Sun} alt=""/> {time} mins</p>
            )
        } else if (food === "dessert"){
            return (
                <p><img src={Sun} alt=""/> {time} mins</p>
            )
        }
    }

    likeImage(){
        console.log("getting class")
        console.log(this.props.recipesData[this.props.count]["name"])
        console.log(this.props.recipesData[this.props.count]["shopping"])
        
        if(this.props.recipesData[this.props.count]["shopping"] === true){
            return Like
        } else {
            return NotLike
        }
    }

    render(){
        return(
            <>
                <article className="ingredient__all">
                    {/* actual image for the recipe */}
                    <img className="z-depth-1 ingredient__heroImage" src={this.props.recipesData[this.props.count]["image"]} alt=""/>
                     {/* <img className="z-depth-2 ingredient__heroImage" src={Crop} alt=""/> */}
                    {/* {this.displayIngredients()} */}
                    <p className="h4 font-weight-bold recipe-name">{this.props.recipesData[this.props.count]["name"]}</p>
                    {/* {this.displaySummary()} */}
                    {/* <div className="emotions">
                        <button onClick={()=>this.recipeLiked()}><img src={this.likeImage()} height="20px" width="20px" alt=""></img></button>
                        <button onClick={()=>this.recipeDisliked()}><img src={this.dislikeImage()} height="20px" width="20px" alt=""></img></button>
                    </div> */}
                    {/* add to shopping cart button */}
                    <div className="action-items">
                        {/* swipe to next recipe button */}
                        <button onClick={(event) => this.props.recipeAdd(event,this.props.count)}><img className="action-items-img" src={RightArrow} height="32px" width="32px" alt=""></img> </button>
                        {/* add to shopping cart */}
                        <button onClick={(event) => this.props.recipeAdd(event,this.props.count)}><img className="action-items-img" src={this.likeImage()} height="32px" width="32px" alt=""></img> </button>
                    </div>    
                </article>
                {/* <ul>{this.displayRecipeSteps()}</ul> */}
            </>
        )
    }
}