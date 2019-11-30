import React from "react";

export default class RecipeImage extends React.Component{
    render(){
        return(
            <>
            <button onClick={this.props.recipeSwipe}><img src={this.props.recipeImage} alt="food"/></button> 
            </>
        )
    }
}