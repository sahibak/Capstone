import React from "react";
import "./navBar.scss";
import Book from "../../assets/book.svg";
import Search from "../../assets/search.svg";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component{
    render(){
        return(
            <>
                <div className="navBar">
                <Link to="/recipebook"><img src={Book}/></Link>
                <Link to="/search"><img src={Search}/></Link>
                </div>
            </>
        )
    }
}