import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component{
    render(){
        return(
            <>
            <Link to="/shoppingcart">
                Shopping Cart
            </Link>
            <Link to="/recipebook">
                Recipe Book
            </Link>
            <Link to="/recipes">
                Recipes
            </Link>
            <Link to="/">
                Search Page
            </Link>
            </>
        )
    }
}