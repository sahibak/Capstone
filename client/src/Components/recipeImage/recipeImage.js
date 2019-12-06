import React from "react";
import"./recipeImageStyle.scss";
import M from "materialize-css";
import Crop from "../../assets/crop.png";

export default class RecipeImage extends React.Component{
    // componentDidMount(){
    //     document.addEventListener('DOMContentLoaded', function() {
    //         let elems = document.querySelectorAll('.fixed-action-btn');
    //         let instances = M.FloatingActionButton.init(elems, {
    //             direction:"left"
    //         });
    //       });
    // }
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