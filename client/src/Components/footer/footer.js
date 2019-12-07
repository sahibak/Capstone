import React from "react";
import { Link } from "react-router-dom";
import "./footerStyle.scss";

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="page-footer body red footer-links">
                {/* <article className="footer-links black"> */}
                    <Link to="/search"><i className="material-icons prefix">search</i></Link> 
                    <Link to="/recipebook"><i className="material-icons prefix">menu_book</i></Link>  
                    <Link to="/shoppingcart"><i className="material-icons prefix">shopping_cart</i></Link>
                    <Link to="/">Recipes</Link> 
                {/* </article> */}
            </footer>
        )
    }
}