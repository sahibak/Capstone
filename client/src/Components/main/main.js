import React from "react";
import axios from "axios";
import Recipes from "../recipes/recipes.js";
import SearchPage from "../searchPage/searchPage.js";

export default class Main extends React.Component{
    state={
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
       

        // If there is any user input, updating state
        if(userInput.length > 0 || userSearch.length > 0){
            console.log("userInput",userInput)
            this.setState({
                userInput: userInput,
                userSearch: userSearch,
                dataCaptured: false
            })
        }
    }

    componentDidUpdate(){
        if(!this.state.dataCaptured){
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
        // if(this.state.recipesData.length>0){
            return(
                <>
                    {/* <SearchBar></SearchBar> */}
                    <SearchPage userSelection={this.userSelection}></SearchPage>
                    {/* <Recipes recipesData = {this.state.recipesData}></Recipes> */}
                    {/* take file input from use */}
                    {/* {/* <input type="file" accept="image/*" ></input> */}
                </>
            )
        // }
        // return(
        //     <>
        //     </>
        // )

    }
}