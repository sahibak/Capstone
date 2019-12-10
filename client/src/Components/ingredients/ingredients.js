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
            let { name, image } = ingredients[i] // qty, unit
            ingredientList.push(
                <>
                    <div key={`parent+${i}`} className="ingredient__Grouping">
                        <img key={`img+${i}`} className="z-depth-1 ingredient__Image" src={image} alt=""/>
                        <ul key={`parentul+${i}`} className="ingredient__List">
                            <li key={`li+${i}`} className="ingredient__Name" >{name}</li>
                            {/* <li className="ingredient__Qty">{qty} {unit}</li> */}
                        </ul>
                    </div>
                </>
            )
        }   
        return ingredientList;     
    }

    render(){
        if(this.props.recipeDetails){
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
