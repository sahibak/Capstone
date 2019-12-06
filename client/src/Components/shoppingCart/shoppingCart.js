import React from "react";
import axios from "axios";
import Footer from "../footer/footer.js";
import "./shoppingCartStyle.scss"

export default class ShoppingCart extends React.Component{
    state = {
        recipeIngredientsList: [],
        shoppingCart:[],
        status: ""
    }

    // overview: on Component mounting, running axios request to get data from the server and setting state
    componentDidMount(){
        axios.get("http://localhost:8080/shoppingcart")
        .then(response => {
            console.log("shoppin",response.data)
            this.setState({
                recipeIngredientsList: response.data
            })
        })
        .catch(error => {console.log(error)})
    }

    // Overview: Once state is set, then the page re-renders if the condition is met
    componentDidUpdate(){
        if(this.state.status !== true){
            this.renderingShoppingList()
        }
    }

     // function to modify data recieved from the server
    //  Function details - looping over the recipes, to find the ingredients and saving them in an Obj with category as key
    renderingIngredient(){
        let renderingList = {}
        // looping over each recipe 
        for (let i = 0; i < this.state.recipeIngredientsList.length; i++){
            // For each recipe's ingredients, set them as ingredientsForRecipe
            let ingredientsForRecipe = this.state.recipeIngredientsList[i]["ingredients"]
            // loop over the each ingredient in ingredientsForRecipe
            for (let n = 0; n<ingredientsForRecipe.length; n++){
                let itemName = ingredientsForRecipe[n]["name"]
                let qty = ingredientsForRecipe[n]["qty"]
                let unit = ingredientsForRecipe[n]["unit"]
                let categoryToCheck = ingredientsForRecipe[n]["category"]
                
                // cheking if the category exists as a key, if category doesnt exist creating empty obj
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

    // Creating global variables
    renderingList = {}
    shoppingList=[]
    
    // rendering JSX to display ingredients on the screen
    renderingShoppingList(){
        // creating empty array to add JSX 
        let i = 0
        let shoppingIngredients = []
        this.renderingList = this.renderingIngredient()
        // Overview: looping over each key(category) and getting items obj (obj of ingredients)
        //  looping over items obj to get key (item name) and value (qty)

        // returning list of category keys
        let categoryList = Object.keys(this.renderingList)
        // getting obj of items under each category
        categoryList.forEach(category => {
            // //pushing product category into shoppping cart render
            // shoppingCart.push(
            //     <p key={i+category}>{category}</p>
            // )
            let itemsObj = this.renderingList[category]
            for (let item in itemsObj){
                let qty = itemsObj[item]
                shoppingIngredients.push(
                    <ul key={item} className={`${this.determineCategory(category)}`}>
                        <li onClick={(event) => this.itemPurchased(item,qty)} >{item} {qty}</li>
                    </ul>
                )
                i ++
            }
            this.shoppingList.push(shoppingIngredients)
            shoppingIngredients = []
        })
        this.setState({
            shoppingCart: this.shoppingList,
            status: true
        })
    }    

    // determing styling class based on category type
    determineCategory(category){
        if(category==="produce"){
            return "produceClass"
        } else if (category==="dry item"){
            return "dryGoodsClass"
        }
    }

    // Overview: once the item is clicked, it is assumed to be purchased and moved to the bottom of the list
    itemPurchased(item,qty){
        for (let i =0; i<this.shoppingList.length; i++){
            for (let n =0; n<this.shoppingList[i].length; n++){ 
                if(this.shoppingList[i][n]["key"] === item){
                    this.shoppingList[i].splice(n,1)
                    this.shoppingList.push(
                        <ul key={item} className="roysclass">
                            <li onClick={(event) => this.itemPurchased(item,qty)} >{item} {qty}</li>
                        </ul>
                    )
                }
            }
        }                 
        this.setState({
            shoppingCart: this.shoppingList
        })
    }    

    render(){
        if(this.state.recipeIngredientsList.length>0){
            return(
                <>
                    {this.state.shoppingCart}
                </>
            )
        }
        else{
            return(
                <>
                    <p>Nothing to return</p>
                </>
            )
        }
    }
        
}