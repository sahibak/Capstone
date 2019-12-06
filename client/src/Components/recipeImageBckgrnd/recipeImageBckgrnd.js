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
            </>
        )
    }
}