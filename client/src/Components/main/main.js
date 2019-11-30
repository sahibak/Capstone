import React from "react";
import axios from "axios";
import Recipes from "../recipes/recipes.js";

export default class Main extends React.Component{
    state={
        recipesData:[]
    }

    componentDidMount(){
        axios.get("http://localhost:8080/recipes")
        .then((response)=> {
            // console.log("axios",response.data)
            this.setState({
                recipesData:response.data
            })
        })
        .catch((error)=> console.log(error));
    }    
    render(){
        return(
            <>
                <Recipes recipesData = {this.state.recipesData}></Recipes>
                {/* take file input from use */}
                {/* <input type="file" accept="image/*" ></input> */}
            </>
        )
    }
}