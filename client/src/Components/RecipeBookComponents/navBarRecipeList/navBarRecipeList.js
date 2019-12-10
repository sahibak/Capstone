import React from "react";
import "./navBarRecipeList.scss";
import Recipes from "../../../assets/recipe.svg";
import Bag from "../../../assets/bag.svg";
import { Link } from "react-router-dom";

export default class NavBarRecipeList extends React.Component{
    render(){
        return(
            <>
                <div className="navBar">
                <Link to="/"><img className= "navIcon" src={Recipes} alt=""/></Link>
                <Link to="/shoppingcart"><img className= "navIcon" src={Bag} alt=""/></Link>
                </div>
            </>
        )
    }
}