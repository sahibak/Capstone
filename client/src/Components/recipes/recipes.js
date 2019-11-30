import React from "react";
import RecipeCard from "../recipeCard/recipeCard.js";

export default class Recipes extends React.Component{
    state = {
        count: 0
    }

    // when the user swipes for the next recipe
    recipeSwipe(event){
        event.preventDefault();
        let newCountValue = this.state.count+1;
        // if there is no new recipe to load, the recipe showcase will start from the beginning
        newCountValue >= this.props.recipesData.length ? this.setState({count: 0}) : this.setState({count:newCountValue});
    }
    render(){
        console.log("recipes",this.props.recipesData)
        return(
            <>
            {/* <img src={this.props.recipesData[this.state.count]["image"]}></img> */}
            <RecipeCard recipesData={this.props.recipesData} count={this.state.count}></RecipeCard>
            </>
        )
    }
}