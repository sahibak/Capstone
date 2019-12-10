import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SearchPage from './Components/searchPage/searchPage';
import Recipes from './Components/AllRecipes/recipes/recipes.js';
import ShoppingCart from "./Components/shoppingCart/shoppingCart.js";
import RecipeBook from "./Components/RecipeBookComponents/recipeBook/recipeBook.js";
import axios from "axios";
// import Recipe from "./Components/recipe/recipe.js";
import RecipeInBook from "./Components/SingleRecipe/recipeInBook/recipeInBook.js";
// import 'materialize-css/dist/css/materialize.min.css';

export default class App extends React.Component{
  state= {
    recipesData:[],
    userInput:[],
    userSearch: "",
    dataCaptured: false,
    count: 0
  }

  // function to capture the search parameters
  userSelection = (event)=>{
    event.preventDefault();
    let userInput = []
    // getting input from search field
    let userSearch = ""
    userSearch = event.target.searchbar.value.trim().toLowerCase()
    // checking if Vegetarian was selected and adding it to list if applicable @TODO could not get ternary to work, why?
    if(event.target.category1.checked){
        userInput.push(event.target.category1.value)
    };
    // checking if Vegan was selected and adding it to list if applicable
    if(event.target.category2.checked){
        userInput.push(event.target.category2.value)
    };
    // checking if Peanut allergy was selected and adding it to list if applicable 
    if(event.target.allergy1.checked){
        userInput.push(event.target.allergy1.value)
    };
    // checking if Gluten allergy was selected and adding it to list if applicable
    if(event.target.allergy2.checked){
        userInput.push(event.target.allergy2.value)
    };
    // checking if Dairy allergy was selected and adding it to list if applicable
    if(event.target.allergy3.checked){
        userInput.push(event.target.allergy3.value)
    };
    this.setState({
      userInput: userInput,
      userSearch: userSearch
    })
  }

  // GET request for recipes to render on Main component
  getRecipes = () => {
    axios.get("http://localhost:8080/recipes",{
        params: {
            userInput: this.state.userInput,
            userSearch: this.state.userSearch
        }
    })
    .then((response)=> {
        this.setState({
            recipesData:response.data,
            dataCaptured: true
        })
    })
    .catch((error)=> console.log(error));
  }

  // when the user adds a recipe to shopping cart
  recipeAdd = (event,index) => {
    console.log("ran add")
    event.preventDefault();
    // posting data on shopping cart
    axios.post("http://localhost:8080/shoppingcart", {
        id: this.state.recipesData[index]["id"]
    })
    .then((response) => {
      this.setState({
        recipesData: response.data,
        count: this.state.count + 1
      })
    })
    .catch((error)=> {console.log(error)})
  }

  // componentDidUpdate(_,prevState){
  //   if(prevState.count !== this.state.count){
  //     let newCountValue = this.state.count+1;
  //     // if there is no new recipe to load, the recipe showcase will start from the beginning
  //     newCountValue >= this.recipesData.length ? this.setState({count: 0}) : this.setState({count:newCountValue});
  //   }
  // }

  // To swipe to next recipe
  recipeSwipe = (event) =>{
    console.log("ran swipe")
    event.preventDefault()
    let newCountValue = this.state.count+1;
    // if there is no new recipe to load, the recipe showcase will start from the beginning
    newCountValue >= this.state.recipesData.length ? this.setState({count: 0}) : this.setState({count:newCountValue});
}

  render(){
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
                <Route path="/search" exact render = {(props) => <SearchPage {...props} userSelection={this.userSelection}></SearchPage>}></Route>
                <Route path="/" exact render = {() => <Recipes userSearch= {this.state.userSearch} userInput={this.state.userInput} recipeSwipe={this.recipeSwipe} getRecipes={this.getRecipes} recipesData={this.state.recipesData} dataCaptured={this.state.dataCaptured} recipeAdd={this.recipeAdd} count={this.state.count}></Recipes>}></Route>
                <Route path="/shoppingcart" exact component = {ShoppingCart}></Route>
                <Route path="/recipebook" exact component = {RecipeBook}></Route>
                <Route path="/:id" exact component={RecipeInBook}></Route>
                {/* <Route path="/recipe" render={(this.state.recipesData) => <Recipe recipesData={this.state.recipesData}></Recipe>}></Route> */}
            </Switch>
        </BrowserRouter>
        </div>
      );
  }  
}

