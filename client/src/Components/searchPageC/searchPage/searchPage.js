import React from "react";
import "./searchPageStyle.scss";
import Peanut from "../../../assets/peanut-outline.svg";
import PeanutOff from "../../../assets/peanut-off-outline.svg";
import Green from "../../../assets/vegetarian.svg";
import GreenSelected from "../../../assets/vegetarian-selected.svg";
import Vegan from "../../../assets/vegan.svg";
import VeganSelected from "../../../assets/vegan-selected.svg";
// import Shellfish from "../../assets/shellfish.svg";
// import ShellfishOff from "../../assets/shellfish-selected.svg";
import Fish from "../../../assets/fish.svg";
import FishOff from "../../../assets/fish-selected.svg";
import Search from "../../../assets/search.svg";
import Wheat from "../../../assets/wheat.svg";
import WheatA from "../../../assets/wheat-active.svg";
import NavBar from "../navPageSearch/navBar.js";

export default class SearchPage extends React.Component{

    searchSubmit = (event) => {
        this.props.userSelection(event);
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="container">
                <NavBar></NavBar>
                <form className="form" onSubmit={this.searchSubmit} >
                    <div className="input-field s2 searchbar">
                        <input type="text" className="autocomplete" name="searchbar" placeholder="Enter Search"></input>
                        <button className="btn" type="submit"><img className="img" src={Search} alt=""/></button>
                    </div>
                    <div>
                        <p className="cat font-weight-bold">Food Category</p>
                        <div className ="category-group">
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="category1" value="Vegetarian"/>
                                    <img className="checked icon icon-box" src={GreenSelected} alt=""/>
                                    <img className="unchecked icon icon-box" src={Green} alt=""/>
                            </label>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="category2" value="Vegan"/>
                                    <img className="checked icon icon-box" src={VeganSelected} alt=""/>
                                    <img className="unchecked icon icon-box" src={Vegan} alt=""/>
                            </label>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="category3" value="Fish"/>
                                    <img className="checked icon icon-box" src={FishOff} alt=""/>
                                    <img className="unchecked icon icon-box" src={Fish} alt=""/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <p className="cat font-weight-bold">Allergies</p>
                        <div className="category-group">
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="allergy1" value="Peanuts"/>
                                <img className="checked icon icon-box" src={PeanutOff} alt=""/>
                                <img className="unchecked icon icon-box" src={Peanut} alt=""/>
                            </label>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="allergy2" value="Gluten"/>
                                <img className="checked icon icon-box" src={WheatA} alt=""/>
                                <img className="unchecked icon icon-box" src={Wheat} alt=""/>
                            </label>
                            <label>
                                <input type="checkbox" name="allergy3" value="Dairy"/>
                                <span>Dairy</span>
                            </label>
                        </div>
                        {/* <div>
                        <p className="cat font-weight-bold">Type</p>
                        <div className="category-group">
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="allergy1" value="Peanuts"/>
                                <img className="checked icon icon-box" src={PeanutOff} alt=""/>
                                <img className="unchecked icon icon-box" src={Peanut} alt=""/>
                            </label>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="allergy1" value="Peanuts"/>
                                <img className="checked icon icon-box" src={PeanutOff} alt=""/>
                                <img className="unchecked icon icon-box" src={Peanut} alt=""/>
                            </label>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="allergy1" value="Peanuts"/>
                                <img className="checked icon" src={PeanutOff} alt=""/>
                                <img className="unchecked icon" src={Peanut} alt=""/>
                            </label>
                            
                        </div>
                        </div> */}
                    </div>
                    {/* <button className="btn btn-dark font-weight-bold" type="submit">Submit</button> */}
                </form>
                {/* <Footer className="footer-class"></Footer> */}
             </div>
        )
    }
}