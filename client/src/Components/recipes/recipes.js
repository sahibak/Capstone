import React from "react";
import RecipeCard from "../recipeCard/recipeCard.js";
import RecipeImageBckgrnd from "../recipeImageBckgrnd/recipeImageBckgrnd.js";
import axios from "axios";
import Footer from "../footer/footer.js";
import "./recipeStyle.scss";
import ArrowL from "../../assets/arrow-left.svg";


export default class Recipes extends React.Component{
    state = {
        count: 0
    }

    componentDidMount(){
        // get recipes' data on mounting
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
            // ingredientList: this.props.recipesData[this.state.count]["ingredientList"],
            ingredients: this.props.recipesData[this.state.count]["ingredients"]
        })
        .then((response) => {
            console.log(response.data)
            // showing the next recipe
            this.recipeSwipe(event)
        })
        .catch((error)=> {console.log(error)})
    }

    render(){
        if(this.props.dataCaptured === true){
            return(
                <>
                <section className="body">  
                    {/* <p className="oval"></p> */}
                    {/* <button className="btn btn-success">test</button> */}
                    <RecipeImageBckgrnd className="circle" recipeImage={this.props.recipesData[this.state.count]["image"]}></RecipeImageBckgrnd>
                    <button className="next-recipe-swipe" onClick={this.recipeSwipe}><img src={ArrowL} alt="arrow left"/></button>
                    <RecipeCard recipesData={this.props.recipesData} count={this.state.count} recipeAdd ={this.recipeAdd}></RecipeCard>
                    {/* <Footer></Footer> */}
                </section>
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