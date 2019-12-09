import React from "react";
import "./navBarRecipeList.scss";
import Recipes from "../../../assets/recipes.svg";
import ShoppingCart from "../../../assets/shopping-cart.svg";
import { Link } from "react-router-dom";

export default class NavBarRecipeList extends React.Component{
    render(){
        return(
            <>
                <div className="navBar">
                <Link to="/"><img src={Recipes}/></Link>
                <Link to="/shoppingcart"><img src={ShoppingCart}/></Link>
                </div>
            </>
        )
    }
}