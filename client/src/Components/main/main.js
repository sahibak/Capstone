import React from "react";
import axios from "axios";
import Recipes from "../recipes/recipes.js";
import Footer from "../footer/footer.js";

export default class Main extends React.Component{
    state={
        recipesData:[],
        userInput:[],
        userSearch: "",
        dataCaptured: false
    }

    runAxios(){
        console.log(run)
        // update this to component did mount when testing recipes and componentDidUpdate for search.
        // if(!this.state.dataCaptured){
            console.log("----update---")
            console.log(this.state.userInput,this.state.userSearch)
            axios.get("http://localhost:8080/recipes",{
                params: {
                    userInput: this.state.userInput,
                    userSearch: this.state.userSearch
                }
            })
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
        console.log()
        if(this.state.recipesData.length>0){
            return(
                <>
                    <Recipes recipesData = {this.state.recipesData} runAxios={this.runAxios}></Recipes>
                    <Footer></Footer>
                    {/* take file input from use */}
                    {/* {/* <input type="file" accept="image/*" ></input> */}
                </>
            )
        }
        return(
            <>
            </>
        )

    }
}