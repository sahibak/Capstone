import React from "react";
import "./recipeInBookStyle.scss";
import Sun from "../../../../assets/sun-with-face.svg";

export default class RecipeInBook extends React.Component{
    name = this.props.recipe.name
    food = this.props.recipe.name
    time= this.props.recipe.time

    render(){
        console.log("recipe in book",this.props.recipe)
        if(this.food === "breakfast"){
            return(
                <>
                <article>
                    <span>{this.name}</span>
                    <img src={Sun} alt=""/>
                    <span>{this.time} mins</span>
                </article>
                </>
            )
        } else if (this.food === "lunch"){
            return(
                <>
                <article>
                    <span>{this.name}</span>
                    <img src={Sun} alt=""/>
                    <span>{this.time} mins</span>
                </article>
                </>
            )
        } else if (this.food === "dinner"){
            return(
                <>
                <article>
                    <span>{this.name}</span>
                    <img src={Sun} alt=""/>
                    <span>{this.time} mins</span>
                </article>
                </>
            )
        } else if (this.food === "dessert"){
            return(
                <>
                <article>
                    <span>{this.name}</span>
                    <img src={Sun} alt=""/>
                    <span>{this.time} mins</span>
                </article>
                </>
            )
        } 
    }
}