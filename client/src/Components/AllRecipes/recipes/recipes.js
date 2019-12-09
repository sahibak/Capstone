import React from "react";
import RecipeCard from "../recipeCard/recipeCard.js";
import RecipeImageBckgrnd from "../recipeImageBckgrnd/recipeImageBckgrnd.js";
// import axios from "axios";
// import Footer from "../../footer/footer.js";
import "./recipeStyle.scss";
// import ArrowL from "../../assets/arrow-left.svg";
import NavBar from "../navBar/navBar.js";
// import Ingredients from "../../ingredients/ingredients.js";


export default class Recipes extends React.Component{
    state = {
        count: 0,
        recipeadded: false
    }

    componentDidMount(){
        // get recipes' data on mounting
        this.props.getRecipes();
    }    

    // To update the counter of recipes, so app can swipe to next one
    componentDidUpdate(_,prevState){
        if (prevState.count !== this.state.count){
            // let randomNumber = Math.floor(Math.random() * Math.floor(this.props.recipesData.length))
            // let newCountValue = 0
            // randomNumber===prevState.count ? newCountValue = prevState.count+1 : newCountValue = randomNumber
            // console.log("random", randomNumber, "newCountVal", newCountValue,"len", this.props.recipesData.length)
            let newCountValue = prevState.count+1;   
            // if there is no new recipe to load, the recipe showcase will start from the beginning
            newCountValue >= this.props.recipesData.length ? this.setState({count: 0}) : this.setState({count:newCountValue});
        }
    }

    // To swipe to next recipe
    recipeSwipe(event){
        event.preventDefault()
        let newCountValue = this.state.count+1;
        // if there is no new recipe to load, the recipe showcase will start from the beginning
        newCountValue >= this.props.recipesData.length ? this.setState({count: 0}) : this.setState({count:newCountValue});
    }
    

    // // when the user adds a recipe to shopping cart
    // recipeAdd = (event) => {
    //     event.preventDefault();
    //     console.log("in add shopping cartfunction")
    //     console.log(this.props.recipesData[this.state.count])
    //     // posting data on shopping cart
    //     axios.post("http://localhost:8080/shoppingcart", {
    //         id: this.props.recipesData[this.state.count]["id"],
    //         // ingredientList: this.props.recipesData[this.state.count]["ingredientList"],
    //         ingredients: this.props.recipesData[this.state.count]["ingredients"]
    //     })
    //     .then((response) => {
    //         console.log("shopping cart added on server")
    //         console.log(response.data)
    //         // showing the next recipe
    //         this.recipeSwipe(event)
    //     })
    //     .catch((error)=> {console.log(error)})
    // }

    render(){
        if(this.props.dataCaptured === true){
            return(
                <>
                <section className="body">  
                    {/* <p className="oval"></p> */}
                    {/* <button className="btn btn-success">test</button> */}
                    <RecipeImageBckgrnd className="circle" recipeImage={this.props.recipesData[this.state.count]["image"]}></RecipeImageBckgrnd>
                    <NavBar></NavBar>
                    {/* <button className="next-recipe-swipe" onClick={(event) => this.recipeSwipe(event)}><img src={ArrowL} alt="arrow left"/></button> */}
                    <RecipeCard recipesData={this.props.recipesData} count={this.state.count} recipeAdd ={this.props.recipeAdd}></RecipeCard>
                    {/* <Ingredients recipeDetails={this.props.recipesData[this.state.count]}></Ingredients> */}
                    {/* <Footer></Footer> */}
                </section>
                
                {/* <Footer></Footer> */}
                </>
            )
        } else {
            return(
                <p>"no data"</p>
            )
        }
    }
}