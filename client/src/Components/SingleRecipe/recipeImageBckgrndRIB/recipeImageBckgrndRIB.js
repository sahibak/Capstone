import React from "react";
import"./recipeImageBckgrndStylesRIB.scss";
// import Crop from "../../assets/crop.png";

export default class RecipeImageBckgrndRIB extends React.Component{
    render(){

        return(
            <>
            {/* move to next recipe button */}
            <div className="circle-dim">
                <img src={this.props.recipeImage} alt="food"/>
                {/* <img className="circle-dim-img"src={Crop} alt="food"/> */}
            </div>   
            </>
        )
    }
}