import React from "react";
import "./navBar.scss";
// import Book from "../../../assets/recipebook.svg";
// import Search from "../../../assets/search.svg";
// import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";


export default class NavBar extends React.Component{
    render(){
        return(
            <>
                <div className="navBarSearch">
                {/* <Link to="/recipebook"><img className= "navIcon" src={Book} alt=""/></Link> */}
                <img className= "logo" src={Logo} alt=""/>
                 {/* <Link to="/search"><img className= "navIcon" src={Search} alt=""/></Link> */}
                </div>
            </>
        )
    }
}