import React from "react";
import "./navBarSingle.scss";
import RecipeBook from "../../../assets/book.svg";
import ShoppingCart from "../../../assets/shopping-cart.svg";
import { Link } from "react-router-dom";

export default class NavBarRecipeList extends React.Component{
    render(){
        return(
            <>
                <div className="navBar">
                <Link to="/recipebook"><img src={RecipeBook}/></Link>
                <Link to="/shoppingcart"><img src={ShoppingCart}/></Link>
                </div>
            </>
        )
    }
}