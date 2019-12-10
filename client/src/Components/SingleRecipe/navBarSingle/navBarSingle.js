import React from "react";
import "./navBarSingle.scss";
import RecipeBook from "../../../assets/recipebook.svg";
import Bag from "../../../assets/bag.svg";
import { Link } from "react-router-dom";

export default class NavBarRecipeList extends React.Component{
    render(){
        return(
            <>
                <div className="navBar">
                <Link to="/recipebook"><img className= "navIcon" src={RecipeBook} alt=""/></Link>
                <Link to="/shoppingcart"><img className= "navIcon" src={Bag} alt=""/></Link>
                </div>
            </>
        )
    }
}