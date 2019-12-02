import React from "react";
import {Link} from "react-router-dom";
import Recipes from "../recipes/recipes.js";

export default class SearchPage extends React.Component{
    render(){
        return(
            <>
                <form onSubmit={event=> {this.props.userSelection(event)}}>
                <input type="text" name="searchbar" placeholder="enter keyword to search by.."></input>
                    <p>Food Category</p>
                    <div>
                        <label>Vegetarian</label>
                        <input type="checkbox" name="category1" value="Vegetarian"></input>
                    </div>
                    <div>
                        <label>Vegan</label>
                        <input type="checkbox" name="category2" value="Vegan"></input>
                    </div>
                    <p>Allergies</p>
                    <div>
                        <label>Peanuts</label>
                        <input type="checkbox" name="allergy1" value="Peanuts"></input>
                    </div>
                    <div>
                        <label>Gluten</label>
                        <input type="checkbox" name="allergy2" value="Gluten"></input>
                    </div>
                    <div>
                        <label>Dairy</label>
                        <input type="checkbox" name="allergy3" value="Dairy"></input>
                    </div>
                    {/* <Link to={Recipes}> */}
                        <button type="submit">Enter</button>
                    {/* </Link> */}
                </form>
            </>
        )
    }
}