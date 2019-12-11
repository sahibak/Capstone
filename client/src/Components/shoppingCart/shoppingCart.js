import React from "react";
import axios from "axios";
// import Footer from "../footer/footer.js";
import "./shoppingCartStyle.scss";
import NavBar from "./navBarSC/navBarSC.js";

export default class ShoppingCart extends React.Component{
    state = {
        recipeIngredientsList: [],
        shoppingCart:[],
        status: ""
    }

    url = "192.168.2.15"

    // overview: on Component mounting, running axios request to get data from the server and setting state
    componentDidMount(){
        axios.get("http://"+this.url+":8080/shoppingcart")
        .then(response => {
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
                let itemName = (ingredientsForRecipe[n]["name"]).toLowerCase()
                let qty = ingredientsForRecipe[n]["qty"]
                let unit = ingredientsForRecipe[n]["unit"]
                let categoryToCheck = ingredientsForRecipe[n]["category"]
                let image  = ingredientsForRecipe[n]["image"]
                
                // cheking if the category exists as a key, if category doesnt exist creating empty obj
                if (!(categoryToCheck in renderingList)) {
                    renderingList[categoryToCheck] = {}
                }
                // cheking if the item exists under the category, if item doesnt exist adding it in and initializing it to zero
                if (!(itemName in renderingList[categoryToCheck])) {
                    renderingList[categoryToCheck][itemName] = [Number(0)]
                    renderingList[categoryToCheck][itemName].push(unit)
                    renderingList[categoryToCheck][itemName].push(image)
                }
                // updating the qty of the item
                renderingList[categoryToCheck][itemName][0] += Number(qty)
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
        // Overview: looping over each key(category) and getting items-obj (obj of ingredients)
        //  looping over items-obj to get key (item name) and value (qty)

        // returning list of category keys
        let categoryList = Object.keys(this.renderingList)
        // sorting category list to ensure others comes at bottom
        categoryList.sort(function(a,b){if(a==="others"){return 1}else if(b==="others"){return -1}})
        // getting obj of items under each category
        categoryList.forEach(category => {
            console.log(category)
            //pushing product category into shoppping cart render
            this.shoppingList.push(
                <div className={this.determineCategory(category)} key={i+category}>{category}</div>
            )
            
            // running function to get starting rgb color for the cat
            let color = this.determineCatForBck(category)
            let n = 0
            
            
            let itemsObj = this.renderingList[category]
            let len = Object.keys(itemsObj).length
            for (let item in itemsObj){
                let colorList ="rgb("+this.adjustingColor(n,color,len)+")"
                console.log("in main",colorList)
                let qty = itemsObj[item][0]
                let unit = itemsObj[item][1]
                let image = itemsObj[item][2]
                shoppingIngredients.push(
                    <ul key={category} onClick={(event) => this.itemPurchased(item,qty, category,event)} style = {{backgroundColor:colorList}} className={`${this.determineCategory(category)}`}>
                        <li key={item}style = {{color:"white"}} className=""  ><img className ="z-depth-1 ingredient__ImageSC"src={image} alt=""/> {item} - {qty} {unit}</li>
                    </ul>
                )
                n++
            }
            this.shoppingList.push(shoppingIngredients)
            shoppingIngredients = []
        })
        this.setState({
            shoppingCart: this.shoppingList,
            status: true
        })
    }   
    
    determineCatForBck(category){
        if(category === "produce"){
            return [[46,164,140],[65,229,196]]
        } else if (category === "others" || category === "meats" || category === "dairy" || category === "nuts"){
            return [[181,133,22],[243,178,24]]
        }
    }

    adjustingColor(i, color, len){
        let startColor1 = color[0][0]
        let startColor2 = color[0][1]
        let startColor3 = color[0][2]

        // let endColor1 = color[1][0]
        let endColor2 = color[1][1]
        // let endColor3 = color[1][2]

        let jump = Math.floor((endColor2 - startColor2)/len)

        return String([startColor1, startColor2 + (i*jump), startColor3])
    }

    // determing styling class based on category type
    determineCategory(category){
        if(category==="produce"){
            return "produceClass item_design"
        } else if (category==="others"){
            return "othersClass item_design"
        } else if (category==="meats"){
            return "meatsClass item_design"
        } else if (category==="dairy"){
            return "dairyClass item_design"
        } else if (category==="nuts"){
            return "nutsClass item_design"
        }
    }

    // Overview: once the item is clicked, it is assumed to be purchased and moved to the bottom of the list
    itemPurchased(item,qty, category,event){
        console.log(event)
        for (let i =0; i<this.shoppingList.length; i++){
            for (let n =0; n<this.shoppingList[i].length; n++){ 
               if(this.shoppingList[i][n]["key"] === item){ 
                   console.log(this.shoppingList[i][n])
                   console.log(this.shoppingList[i][n]["key"])
                   console.log(typeof this.shoppingList[i][n] )
                   this.shoppingList[i].splice(n,1)
                //    delete this.shoppingList[i][n]
                   console.log(this.shoppingList[i])
                    this.shoppingList.push(
                        <ul key={item} className={` purchased ${this.determineCategory(category)}`}>
                            <li className="shadow p-3 mb-2 font-weight-bold rounded items">{item} {qty}</li>
                        </ul>
                    )
                   break;
                
                
                //     this.shoppingList[i].splice(n,1)
                //     this.setState({
                //         shoppingCart: this.shoppingList
                //     })
                //     // this.shoppingList.push(
                //     //     <ul key={item} className="roysclass">
                //     //         <li onClick={(event) => this.itemPurchased(item,qty)} >{item} {qty}</li>
                //     //     </ul>
                //     // )
                //     // console.log(this.shoppingList)
                //     // console.log("----------------------")
                }
            }
        }    
        console.log(this.shoppingList)             
        this.setState({
            shoppingCart: this.shoppingList
        })
       
    }    

    render(){
        if(this.state.recipeIngredientsList.length>0){
            console.log("render")
            return(
                <>
                    <NavBar></NavBar>
                    <div className="shoppingCart">
                        <div className="scContainer">
                        {this.state.shoppingCart}
                        </div>
                    </div>
                </>
            )
        }
        else{
            return(
                <>
                    <NavBar></NavBar>
                    <p className="scText"> Building your shopping cart...</p>
                </>
            )
        }
    }
        
}