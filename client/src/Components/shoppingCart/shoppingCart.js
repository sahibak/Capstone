import React from "react";
import axios from "axios";
import Footer from "../footer/footer.js";

export default class ShoppingCart extends React.Component{
    state = {
        recipeIngredientsList: [],
        count: 0
    }

    componentDidMount(){
        axios.get("http://localhost:8080/shoppingcart")
        .then(response => {
            console.log("shoppin",response.data)
            // counting total number of ingridents
            let count = 0
            for(let i = 0; i< response.data.length; i++){
                count = count + response.data[i]["ingredientList"].length
            }
            // setting state
            this.setState({
                recipeIngredientsList: response.data,
                count: count
            })
        })
        .catch(error => {console.log(error)})
    }

     // function to show ingredients on the screen
    renderingIngredient(){
        let renderingList = {}
        // looping over each recipe 
        for (let i = 0; i < this.state.recipeIngredientsList.length; i++){
            // For each recipe's ingredients, set them as ingredientsForRecipe
            let ingredientsForRecipe = this.state.recipeIngredientsList[i]["ingredients"]
            // loop over the each ingredient for a recipe
            for (let n = 0; n<ingredientsForRecipe.length; n++){
                let itemName = ingredientsForRecipe[n]["name"]
                let qty = ingredientsForRecipe[n]["qty"]
                let unit = ingredientsForRecipe[n]["unit"]
                let categoryToCheck = ingredientsForRecipe[n]["category"]
                console.log("ingredient",itemName,qty,unit,categoryToCheck)
                // if rendering list is empty, adding in 1st item adding 1st item

                if (!(categoryToCheck in renderingList)) {
                    renderingList[categoryToCheck] = {}
                }
        
                if (!(itemName in renderingList[categoryToCheck])) {
                    renderingList[categoryToCheck][itemName] = 0
                }
        
                renderingList[categoryToCheck][itemName] += qty
                
                }
            }
            console.log(renderingList)
        }
    
        
    

    render(){
        
        if(this.state.recipeIngredientsList.length >0){
        {this.renderingIngredient()}
        


        return(
            <>
            <p>test</p>
            
            <Footer></Footer>
            </>

        )
        }
        else{
            return (
                <p>nothing to render</p>
            )
        }
    }
}