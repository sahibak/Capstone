import React from "react";
import "./recipeBookListStyle.scss";
// import RecipeInBook from "./recipeInBook/recipeInBook.js";
import Sun from "../../../assets/sun-with-face.svg";
import { Link } from "react-router-dom";

export default class RecipeBookList extends React.Component{
    
    // Overview: Display card for each recipe
    displayRecipeCards(){
        console.log("recipes displayed props", this.props.recipes)
        let recipeBookList = []
        for (let i= 0; i < this.props.recipes.length; i++){
            let { name, time, food, image, id } =  this.props.recipes[i]
            recipeBookList.push(
                <Link to={"/"+id}>
                <article key={this.props.recipes[i]["id"]} className="each-recipe shadow bg-white rounded">
                    <img className="recipe-image" src={image} alt=""/>
                    <span>{name}</span>
                    {this.imageToUse(food)}
                    <span>{time} mins</span>
                </article>
                </Link>
            )
        }
        return recipeBookList
    }

    // Overview: based on the recipe, deciding image to show
    imageToUse(food){
        console.log("ran this",food)
        if(food === "breakfast"){
            return (<img className="recipe-image" src={Sun} alt=""/>)
        } else if (food === "lunch"){
            return  (<img className="recipe-image" src={Sun} alt=""/>)
        } else if (food === "dinner"){
            return  (<img className="recipe-image" src={Sun} alt=""/>)
        } else if (food === "dessert"){
            return  (<img className="recipe-image" src={Sun} alt=""/>)
        }
    }   

    render(){
        return(
            <>
                <div>{this.displayRecipeCards()}</div>
                
            </>
        )
    } 
}