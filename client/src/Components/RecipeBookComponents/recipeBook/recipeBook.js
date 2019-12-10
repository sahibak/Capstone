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
        axios.get("http://localhost:8080/shoppingcart")
        .then(response => {
            this.setState({
                recipes: response.data
            })
        })
        .catch(error => {console.log(error)})
    }

    updateSelection = (event,index) => {
        console.log("ran update")
        event.preventDefault();
        // posting data on shopping cart
        axios.post("http://localhost:8080/shoppingcart/remove", {
            id: index
        })
        .then((response) => {
            console.log("received",response.data)
            this.setState({
            recipes: response.data
            })
        })
        .catch((error)=> {console.log(error)})
    }

    render(){
        return(
            <>
            <div className="container">
                <NavBarRecipeList></NavBarRecipeList>
                <article>
                    <RecipeBookList updateSelection = {this.updateSelection} recipes={this.state.recipes}></RecipeBookList>
                </article>
            </div>
            </>
        )
    }
}