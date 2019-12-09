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
        // getting the recipe steps 
        let recipeSteps = this.props.recipe["ingredients"]
        // for steps in recipe, run loop and create JSX
        for (let i=0; i<recipeSteps.length; i++){
            recipeList.push(
                 <li key = {i}>{recipeSteps[i]}</li>
            )
        }
        return recipeList; 
    }

    // // Overview: Display recipe summary - food and time to cook
    // displaySummary(){
    //     let {food, time} = this.props.recipesData[this.props.count]
    //     if(food === "breakfast"){
    //         return (
    //             <p><img src={Sun} alt=""/> <img src={Timer} alt=""/>{time} mins</p>
    //         )
    //     } else if (food === "lunch"){
    //         return (
    //             <p><img src={Sun} alt=""/> {time} mins</p>
    //         )
    //     } else if (food === "dinner"){
    //         return (
    //             <p><img src={Sun} alt=""/> {time} mins</p>
    //         )
    //     } else if (food === "dessert"){
    //         return (
    //             <p><img src={Sun} alt=""/> {time} mins</p>
    //         )
    //     }
    // }

    // likeImage(){
    //     console.log("getting class")
    //     console.log(this.props.recipesData[this.props.count]["name"])
    //     console.log(this.props.recipesData[this.props.count]["shopping"])
        
    //     if(this.props.recipesData[this.props.count]["shopping"] === true){
    //         return Like
    //     } else {
    //         return NotLike
    //     }
    // }
    visible(event){
        console.log("ran click")
        event.preventDefault()
        this.setState({
            visible:!this.state.visible
        })        
    }
    addClass(){
        console.log("ran",this.state.visible)
        if(this.state.visible === true){
            return "display"
        } else {
            return "doNotDisplay"
        }
    }

    render(){
        return(
            <>
            <button onClick={event => this.visible(event)}>test</button>
                <article className={this.addClass()}>
                    {/* actual image for the recipe */}
                    {/* <img className="z-depth-1 ingredient__heroImage" src={this.props.recipe["image"]} alt=""/> */}
                     {/* <img className="z-depth-2 ingredient__heroImage" src={Crop} alt=""/> */}
                    {/* <div>{this.displayIngredients()}</div> */}
                    <p className="h4 font-weight-bold recipe-name">{this.props.recipe["name"]}</p>
                    {/* {this.displaySummary()} */}
                    {/* <div className="emotions">
                        <button onClick={()=>this.recipeLiked()}><img src={this.likeImage()} height="20px" width="20px" alt=""></img></button>
                        <button onClick={()=>this.recipeDisliked()}><img src={this.dislikeImage()} height="20px" width="20px" alt=""></img></button>
                    </div> */}
                    {/* add to shopping cart button */}
                    {/* <div className="action-items">
                        {/* swipe to next recipe button */}
                        {/* <button onClick={(event) => this.props.recipeAdd(event,this.props.count)}><img className="action-items-img" src={RightArrow} height="32px" width="32px" alt=""></img> </button> */}
                        {/* add to shopping cart */}
                        {/* <button onClick={(event) => this.props.recipeAdd(event,this.props.count)}><img className="action-items-img" src={this.likeImage()} height="32px" width="32px" alt=""></img> </button>
                    </div>     */} 
                    {/* <Ingredients recipeDetails={this.props.recipe}></Ingredients> */}
                </article>
                {/* <ul>{this.displayRecipeSteps()}</ul> */}
            </>
        )
    }
}