import React from "react";
import axios from "axios";
import Footer from "../footer/footer.js";
import uuid from "uuid";

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

     // function to modigy data recieved from the server
    //  Function details - looping over the recipes, to find the ingredients and saving them in an Obj with category
    renderingIngredient(){
        // creating empty objective
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
                // cheking if the category exists, if category doesnt exist creating empty obj
                if (!(categoryToCheck in renderingList)) {
                    renderingList[categoryToCheck] = {}
                }
                // cheking if the item exists under the category, if item doesnt exist adding it in and initializing it to zero
                if (!(itemName in renderingList[categoryToCheck])) {
                    renderingList[categoryToCheck][itemName] = 0
                }
                // updating the qty of the item
                renderingList[categoryToCheck][itemName] += Number(qty)
                }
        }
            return(renderingList)
    }

    // rendering JSX to display items on the screen
    renderingShoppingList(){
        // creating empty array to add JSX 
        let shoppingCart = []
        let shoppingIngredients = []
        let renderingList = this.renderingIngredient()
        // Overview: looping over each key(category) and getting items obj (obj of ingredients)
        //  looping over items obj to get key (item name) and value (qty)

        // returning list of category keys
        let categoryList = Object.keys(renderingList)

        // determing key for JSX Obj
        let i = 0;
        // getting obj of items under each category
        categoryList.forEach(category => {
            shoppingCart.push(
                <p key={i+category}>{category}</p>
            )
            let itemsObj = renderingList[category]
            console.log("itemObj",itemsObj)
            for (let item in itemsObj){
                console.log("item",item)
                let qty = itemsObj[item]
                i ++
                shoppingIngredients.push(
                    <ul key={i+item}>
                        <li>{item} {qty}</li>
                    </ul>
                )
            }
            i++;
            shoppingCart.push(shoppingIngredients)
            shoppingIngredients = []
        })
        return shoppingCart
    }    
    

    render(){
        
        if(this.state.recipeIngredientsList.length >0){
        // {this.renderingShoppingList()}
        


        return(
            <>
            <p>test</p>
            {this.renderingShoppingList()}
            
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