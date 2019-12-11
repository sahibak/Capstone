import React from "react";
import "./recipeInBookStyle.scss";
import NavBarSingle from "../navBarSingle/navBarSingle.js";
// import Sun from "../../assets/sun-with-face.svg";
import axios from "axios";
import RecipeImageBckgrndRIB from "../recipeImageBckgrndRIB/recipeImageBckgrndRIB.js";
import RecipeCardRIB from "../recipeCardRIB/recipeCardRIB.js";

export default class RecipeInBook extends React.Component{
    state = {
        recipeData:"",
        dataReceived: false
    }
    
    url= "192.168.2.15"
    
    componentDidMount(){
        // GET request for recipes to render on Main component
        axios.get("http://"+this.url+":8080/recipe",{
            params: {
                id: this.props.match.params.id,
                visible: false
            }
        })
        .then((response)=> {
            this.setState({
                recipeData:response.data,
                dataReceived: true,
            })
        })
        .catch((error)=> console.log(error));
    }

    // displaying list of ingredients
    displayIngredients(){
        // empty list to push JSX into
        let ingredientList = []
        // getting ingredient list
        let ingredients = this.state.recipeData[0]["ingredients"]
        // for every item in ingridients, run the loop and create JSX
        for (let i=0; i<ingredients.length; i++){
            let { name, qty, unit} = ingredients[i] // image
            ingredientList.push(
                <>
                    <div className="ingredient__Group">
                        {/* <img className="z-depth-4 ingredient__Image" src={image} alt=""/> */}
                        <ul className="ingredient__List">
                            <li key = {i}>{name}</li>
                            <li className="ingredient__Qty">{qty} {unit}</li>
                        </ul>
                    </div>
                </>
            )
        }   
        return ingredientList;     
    }
    visible(event){
        event.preventDefault()
        this.setState({
            visible:!this.state.visible
        })        
    }
    addClass(){
        if(this.state.visible === true){
            return "display"
        } else {
            return "doNotDisplay"
        }
    }

    render(){
        console.log("recipeInBook",this.state.recipeData)
        if(this.state.dataReceived === true && this.state.recipeData.length>0){
            console.log("if ran")
            let { image, name, recipe, ingredients } = this.state.recipeData[0]
            return(
                <>
                    <NavBarSingle></NavBarSingle>
                    <RecipeImageBckgrndRIB recipeImage={image}></RecipeImageBckgrndRIB>
                    <img className="z-depth-1 ingredient__heroImageRIB" src={image} alt=""/>
                    <RecipeCardRIB recipe={recipe} name={name} ingredients={ingredients}></RecipeCardRIB>
                </>
            )
        } else{
            return (
                <p>Nothing to return</p>
            )
        }
    }
}