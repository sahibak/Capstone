import React from "react";
// import Like from '../../assets/like.svg';
// import NotLike from '../../assets/notlike.svg';
// import NotDislike from '../../assets/dislike-outline.svg';
// import Dislike from '../../assets/dislike-active.svg';
import "./recipeCardStyleRIB.scss";
// import Sun from "../../assets/sun-with-face.svg";
// import Timer from "../../assets/timer-clock.svg";
// import RightArrow from "../../assets/rightArrow.svg";
// import Ingredients from "../../ingredients/ingredients";
// // import Crop from "../../assets/crop.png";
// import Circle from "../../assets/circle.svg";
// import CircleCheck from "../../assets/check-circle.svg";



export default class RecipeCardRIB extends React.Component{
    state={
        steps:{}
    }

    componentDidMount(){
        console.log("this.props.recipe",this.props.recipe)
        this.setState({
            steps: this.props.recipe["recipe"]
        })
    }
    
    displayIngredients(){
        // empty list to push JSX into
        let ingredientList = []
        // getting ingredient list
        let ingredients = this.props.recipe["ingredients"]
        // for every item in ingridients, run the loop and create JSX
        for (let i=0; i<ingredients.length; i++){
            let { name, qty, unit, image } = ingredients[i]
            ingredientList.push(
                <>
                    <div key = {i} className="ingredient__Group">
                        <img className="z-depth-1 ingredient__Image shadow p-3 mb-5" src={image} alt=""/>
                        <ul className="ingredient__List">
                            <li key = {i}>{name} - {qty} {unit}</li>
                            {/* <li className="ingredient__Qty"></li> */}
                        </ul>
                    </div>
                </>
            )
        }   
        return ingredientList;     
    }

    displayRecipeSteps(){
        let recipeList = []
        // getting the recipe steps 
        let recipeSteps = this.state.steps
        // for steps in recipe, run loop and create JSX
        for (let i=1; i<=Object.keys(this.state.steps).length; i++){
            let currentStepNumber = "Step"+i
            let currentStep = this.state.steps[currentStepNumber]
            let currentStepStatus = this.state.steps[currentStepNumber][1]
            recipeList.push(
                 <li onClick = {() => this.completedStep(currentStepNumber)} className={this.displayImage(currentStepNumber)} key={currentStepNumber}>
                     {/* <img src={this.displayImage(currentStepNumber)} alt=""/>*/}
                    {currentStep}</li> 
            )
        }
        return recipeList; 
    }

    completedStep(currentStepNumber){
        let allSteps = this.state.steps
        // updating the status of the step
        allSteps[currentStepNumber][1] = !allSteps[currentStepNumber][1]
        // updating state
        this.setState({
            steps: allSteps
        })
    }

    displayImage(currentStepNumber){
        if(this.state.steps[currentStepNumber][1]=== true){
            // return CircleCheck
            return "completed stdStyle"
        } else{
            // return Circle
            return "pending stdStyle"
        }
    }

    render(){
        if(this.state.steps){
            return(
                <>
                    <article className="recipeCard">
                    <p className="h4 font-weight-bold recipe-name">{this.props.recipe["name"]}</p>
                        <div>{this.displayIngredients()}</div>
                        <ul>{this.displayRecipeSteps()}</ul>
                    </article>
                </>
            )
        }
        return(
            <>
            <p>Nothing to show</p>
            </>
        )
    }
}