import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SearchPage from './Components/searchPage/searchPage';
import Recipes from './Components/recipes/recipes.js';
import ShoppingCart from "./Components/shoppingCart/shoppingCart.js";
import axios from "axios";

export default class App extends React.Component{
  state= {
    recipesData:[],
    userInput:[],
    userSearch: "",
    dataCaptured: false
  }

  // function to capture the search parameters
  userSelection = (event)=>{
    console.log("userselection func")
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
      userSearch: userSearch,
      dataCaptured: true
    })
  }

  // GET request for recipes to render on Main component
  getRecipes = () => {
    if(!this.state.dataCaptured){
      console.log("inp",this.state.userInput)
      console.log("search",this.state.userSelection)
      axios.get("http://localhost:8080/recipes",{
          params: {
              userInput: this.state.userInput,
              userSearch: this.state.userSearch
          }
      })
      .then((response)=> {
          console.log("axios",response.data)
          this.setState({
              recipesData:response.data,
              dataCaptured: true
          })
      })
      .catch((error)=> console.log(error));
    }
  }

  render(){
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
                <Route path="/" exact render = {() => <SearchPage userSelection={this.userSelection}></SearchPage>}></Route>
                <Route path="/recipes" render = {() => <Recipes userSearch= {this.state.userSearch} userInput={this.state.userInput} getRecipes={this.getRecipes} recipesData={this.state.recipesData} dataCaptured={this.state.dataCaptured}></Recipes>}></Route>
                <Route path="/shoppingcart" exact component = {ShoppingCart}></Route>
                <Route path="/recipebook" exact component = {ShoppingCart}></Route>
            </Switch>
        </BrowserRouter>
        </div>
      );
  }  
}

