import React from "react";
import axios from "axios";
import RecipeBookList from "../recipeBookList/recipeBookList.js";
import "./recipeBookStyle.scss";
import NavBarRecipeList from "../navBarRecipeList/navBarRecipeList.js";


export default class RecipeBook extends React.Component{
    state = {
        recipes: [],
    }

    url = "192.168.2.15"
    // overview: on Component mounting, running axios request to get data from the server and setting state
    componentDidMount(){
        axios.get("http://"+this.url+":8080/shoppingcart")
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
        axios.post("http://"+this.url+":8080/shoppingcart/remove", {
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
        if(this.state.recipes.length>0){
            return(
                <>
                <div className="containerRB">
                    <NavBarRecipeList></NavBarRecipeList>
                    <article className="recipeBook">
                        <RecipeBookList updateSelection = {this.updateSelection} recipes={this.state.recipes}></RecipeBookList>
                    </article>
                </div>
                </>
            )
        } else{
            return(
            <>
                <div className="containerRB"></div>
                <NavBarRecipeList></NavBarRecipeList>
                <p className="rbText"> Putting together your recipebook...</p>
            </>
            )
        }
    }
}