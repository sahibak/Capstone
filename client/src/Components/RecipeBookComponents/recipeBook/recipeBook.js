import React from "react";
import axios from "axios";
import RecipeBookList from "../recipeBookList/recipeBookList.js";
import "./recipeBookStyle.scss";
import NavBarRecipeList from "../navBarRecipeList/navBarRecipeList.js";


export default class RecipeBook extends React.Component{
    state = {
        recipes: [],
    }

    // overview: on Component mounting, running axios request to get data from the server and setting state
    componentDidMount(){
        axios.get("http://192.168.2.15:8080/shoppingcart")
        .then(response => {
            console.log("shoppin",response.data)
            this.setState({
                recipes: response.data
            })
        })
        .catch(error => {console.log(error)})
    }

    render(){
        return(
            <>
            <div className="container">
                <h1>GroSure</h1>
                <NavBarRecipeList></NavBarRecipeList>
                <article>
                    <RecipeBookList recipes={this.state.recipes}></RecipeBookList>
                </article>
            </div>
            </>
        )
    }
}