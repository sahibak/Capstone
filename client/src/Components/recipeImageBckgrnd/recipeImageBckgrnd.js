import React from "react";
import"./recipeImageBckgrndStyles.scss";
import Crop from "../../assets/crop.png";

export default class RecipeImageBckgrnd extends React.Component{
    render(){
        return(
            <>
            {/* move to next recipe button */}
            <button className="circle-dim" onClick={this.props.recipeSwipe}>
                <img src={this.props.recipeImage} alt="food"/>
                {/* <img className="circle-dim-img"src={Crop} alt="food"/> */}
            </button> 
            {/* add to shopping cart button */}
            <button onClick={this.props.recipeAdd} className="btn-floating btn-large red recipe_add-to-shopping-cart"> + </button>
            </>
        )
    }
}