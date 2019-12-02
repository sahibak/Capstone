import React from "react";

export default class RecipeImage extends React.Component{
    render(){
        return(
            <>
            {/* move to next recipe button */}
            <button onClick={this.props.recipeSwipe}><img src={this.props.recipeImage} alt="food"/></button> 
            {/* add to shopping cart button */}
            <button onClick={this.props.recipeAdd} className="recipe_add-to-shopping-cart"> + </button>
            </>
        )
    }
}