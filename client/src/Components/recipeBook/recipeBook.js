import React from "react";
import axios from "axios";
import "./style.scss"

export default class RecipeBook extends React.Component{
    state = {
        recipes: [],
    }

    // overview: on Component mounting, running axios request to get data from the server and setting state
    componentDidMount(){
        axios.get("http://localhost:8080/shoppingcart")
        .then(response => {
            console.log("shoppin",response.data)
            this.setState({
                recipes: response.data
            })
        })
        .catch(error => {console.log(error)})
    }

    render(){
        return(
            <>
            </>
        )
    }