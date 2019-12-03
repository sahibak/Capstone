import React from "react";
import RecipeCard from "../recipeCard/recipeCard.js";
import RecipeImage from "../recipeImage/recipeImage.js";
import axios from "axios";
import Footer from "../footer/footer.js";

export default class Recipes extends React.Component{
    state = {
        count: 0
    }

    componentDidMount(){
        // get recipes' data on mounting
        console.log("recipes mounted")
        console.log(this.props)
        this.props.getRecipes();
    }
       
    // when the user swipes for the next recipe
    recipeSwipe = (event) => {
        event.preventDefault();
        let newCountValue = this.state.count+1;
        // if there is no new recipe to load, the recipe showcase will start from the beginning
        newCountValue >= this.props.recipesData.length ? this.setState({count: 0}) : this.setState({count:newCountValue});
    }

    // when the user adds a recipe to shopping cart
    recipeAdd = (event) => {
        event.preventDefault();
        console.log("in add function")
        // posting data on shopping cart
        axios.post("http://localhost:8080/shoppingcart", {
            id: this.props.recipesData[this.state.count]["id"],
            ingredientList: this.props.recipesData[this.state.count]["ingredientList"],
            ingredients: this.props.recipesData[this.state.count]["ingredients"]
        })
        .then((response) => {
            // console.log(response.data)
            // showing the next recipe
            this.recipeSwipe(event)
        })
        .catch((error)=> {console.log(error)})
    }

    render(){
        if(this.props.dataCaptured === true){
            return(
                <>
                    <RecipeImage recipeAdd ={this.recipeAdd} recipeSwipe={this.recipeSwipe} recipeImage={this.props.recipesData[this.state.count]["image"]}></RecipeImage>
                    <p>{this.props.recipesData[this.state.count]["name"]}</p>
                    <RecipeCard recipesData={this.props.recipesData} count={this.state.count}></RecipeCard>
                    <Footer></Footer>
                </>
            )
        } else {
            return(
                <p>"no data"</p>
            )
        }
    }
}