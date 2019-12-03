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
        let renderingList = []
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
                if(renderingList.length === 0){
                    console.log("length",renderingList.length)
                    renderingList.push(
                        {
                            category: categoryToCheck,
                            items: [{
                                [itemName]:[qty,unit]
                            }]
                        }
                    )
                } else {
                    console.log("rederingList has items")
                    // checking the rederingList to see if the categoryToCheck exists
                    for (let i = 0; i<=this.state.count; i++){
                        let categoryMatch = (renderingList[i]["category"] == categoryToCheck)
                        if(i<renderingList.length && categoryMatch){
                            console.log("cat match")
                            // // checking if the item already exists under the category
                            // for(let n = 0; n<=this.state.count;n++ ){
                            //     let item = renderingList[i]["items"][n]
                            //     console.log(item)
                            //     if(itemName in item){
                            //         console.log("item matched")
                            //         item[0] = item[0]+qty
                            //         break;
                            //     } 
                            //     // if item doesnt exist under category, adding it in
                            //     else if ( n == this.state.count){
                            //         renderingList[i]["items"].push({
                            //             [itemName]:[qty,unit]
                            //         })
                            //     }
                            // }
                            break;
                        }
                        else if (i = this.state.count){
                            console.log("cat does not match")
                            // adding category and product to the list
                            renderingList.push(
                                {
                                    category: categoryToCheck,
                                    items: [{
                                        [itemName]:[qty,unit]
                                    }]
                                }
                            )
                        }
                    }
                }
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