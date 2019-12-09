import React from "react";
import "../navBar/navBar.scss";
import Recipes from "../../assets/recipes.svg";
import Search from "../../assets/search.svg";
import { Link } from "react-router-dom";

export default class NavBarRecipeList extends React.Component{
    render(){
        return(
            <>
                <div className="navBar">
                <Link to="/"><img src={Recipes}/></Link>
                <Link to="/search"><img src={Search}/></Link>
                </div>
            </>
        )
    }
}