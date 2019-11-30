import React from "react";
import axios from "axios";
import Recipes from "../recipes/recipes.js";
import SearchPage from "../searchPage/searchPage.js";


export default class Main extends React.Component{
    state={
        recipesData:[],
        allergyList:[],
        categoryList:[],
        dataCaptured: false
    }

    // function to capture the search parameters
    userSelection = (event)=>{
        console.log("userselection func")
        event.preventDefault();
        let userInputCategoryList = []
        let userInputAllergyList = []
        // checking if Vegetarian was selected and adding it to list if applicable @TODO could not get ternary to work, why?
        if(event.target.category1.checked){
            userInputCategoryList.push(event.target.category1.value)
        };
        // checking if Vegan was selected and adding it to list if applicable
        if(event.target.category2.checked){
            userInputCategoryList.push(event.target.category2.value)
        };
        // checking if Peanut allergy was selected and adding it to list if applicable 
        if(event.target.allergy1.checked){
            userInputAllergyList.push(event.target.allergy1.value)
        };
        // checking if Gluten allergy was selected and adding it to list if applicable
        if(event.target.allergy2.checked){
            userInputAllergyList.push(event.target.allergy2.value)
        };
        // checking if Dairy allergy was selected and adding it to list if applicable
        if(event.target.allergy3.checked){
            userInputAllergyList.push(event.target.allergy3.value)
        };

        // If there is any user input, updating state
        if(userInputCategoryList > 0 || userInputAllergyList.length > 0){
            this.setState({
                allergyList: userInputAllergyList,
                categoryList: userInputCategoryList,
                dataCaptures: false
            })
        }
    }

    componentDidUpdate(){
        if(!this.state.dataCaptured){
            axios.get("http://localhost:8080/recipes",{
                params: {
                    allergyList: this.state.allergyList,
                    categoryList: this.state.categoryList
                }}
            )
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