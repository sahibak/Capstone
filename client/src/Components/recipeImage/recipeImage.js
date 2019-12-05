import React from "react";
import"./style.scss";
import M from "materialize-css";

export default class RecipeImage extends React.Component{
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.fixed-action-btn');
            let instances = M.FloatingActionButton.init(elems, {
                direction:"left"
            });
          });
    }
    render(){
        return(
            <>
            {/* move to next recipe button */}
            {/* <button onClick={this.props.recipeSwipe}> */}
                <img className="circle-dim" src={this.props.recipeImage} alt="food"/>
                {/* </button>  */}
            {/* add to shopping cart button */}
            <button onClick={this.props.recipeAdd} className="recipe_add-to-shopping-cart btn-floating btn-large red    "> + </button>
            </>
        )
    }
}