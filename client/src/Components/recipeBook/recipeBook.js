import React from "react";
import axios from "axios";
import RecipeBookList from "./recipeBookList/recipeBookList.js";
import "./recipeBookStyle.scss";

export default class RecipeBook extends React.Component{
    state = {
        recipes: [],
    }

    // overview: on Component mounting, running axios request to get data from the server and setting state
    componentDidMount(){
        axios.get("http://localhost:8080/shoppingcart")
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
                <h1>GroSure</h1>
                <h1>My Recipe Book</h1>
                <h1>This Week</h1>
                <article>
                    <RecipeBookList recipes={this.state.recipes}></RecipeBookList>
                </article>
            </>
        )
    }
}