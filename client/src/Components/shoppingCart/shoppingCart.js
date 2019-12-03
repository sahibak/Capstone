import React from "react";
import axios from "axios";
import Footer from "../footer/footer.js";

export default class ShoppingCart extends React.Component{
    state = {
        ingredientList: []
    }

    componentDidMount(){
        axios.get("http://localhost:8080/shoppingcart")
        .then(response => {
            console.log("shoppin",response.data)
            // setting state
            this.setState({
                ingredientList: response.data
            })
        })
        .catch(error => {console.log(error)})
    }

    renderingIngredient(){
        let renderingList = []
        console.log("-----------rendering-----------")
        console.log("response")
        console.log(this.state.ingredientList)
        // function to show ingredients on the screen
        // for (let i = 0; i < this.state.ingredients.length; i++){
        //     let ingredients = this.state.ingredients["ingredients"]
        //     for (let n = 0; n < ingredients.length; i++){
        //         renderingList.push(
        //             <>
        //                 <p>{ingredients[n]["qty"]}  {ingredients[n]["unit"]} of {ingredients[n]["eggplant"]}</p>
        //             </>
        //         )
        //     }
        // }
    }

    render(){
        console.log("State", this.state)
        return(
            <>
            <p>test</p>
            {/* {this.renderingIngredient()} */}
            <Footer></Footer>
            </>

        )
    }
}