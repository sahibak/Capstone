import React from "react";
import "./ingredientsStyle.scss";

export default class Ingredients extends React.Component{

    displayIngredients(){
        // empty list to push JSX into
        let ingredientList = []
        // getting ingredient list
        let ingredients = this.props.recipeDetails["ingredients"]
        // for every item in ingridients, run the loop and create JSX
        for (let i=0; i<ingredients.length; i++){
            let { name, qty, unit, image } = ingredients[i]
            ingredientList.push(
                <>
                    <div className="ingredient__Grouping">
                        <img className="z-depth-1 ingredient__Image" src={image} alt=""/>
                        <ul className="ingredient__List">
                            <li className="ingredient__Name" key={i}>{name}</li>
                            {/* <li className="ingredient__Qty">{qty} {unit}</li> */}
                        </ul>
                    </div>
                </>
            )
        }   
        return ingredientList;     
    }

    render(){
        console.log("ingre",this.props.recipeDetails["ingredients"],!this.props.recipeDetails)
        if(this.props.recipeDetails){
            console.log("if stt ran")
            return(
                <div className="ingredient">
                {this.displayIngredients()}
                </div>
            )
        }
        return(
            <>
            </>
        )
    }
}
