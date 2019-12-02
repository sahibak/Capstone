import React from "react";
import axios from "axios";
import Footer from "../footer/footer.js";

export default class ShoppingCart extends React.Component{
    state = {
        ingredients: []
    }

    componentDidMount(){
        axios.get("http://localhost:8080/shoppingcart")
        .then(response => {
            console.log("shoppin",response)
            // setting state
            this.setState({
                ingredients: response
            })
        })
        .catch(error => {console.log(error)})
    }

    render(){
        console.log(this.state)
        return(
            <>
            <p>test</p>
            <Footer></Footer>
            </>

        )
    }
}