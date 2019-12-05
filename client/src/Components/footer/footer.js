import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="page-footer container body red footer-links">
                {/* <article className="footer-links black"> */}
                    <Link to="/shoppingcart"><i className="material-icons prefix">shopping_cart</i></Link>
                    <Link to="/recipebook"><i className="material-icons prefix">menu_book</i></Link>  
                    <Link to="/">Recipes</Link> 
                    <Link to="/search"><i className="material-icons prefix">search</i></Link> 
                {/* </article> */}
            </footer>
        )
    }
}