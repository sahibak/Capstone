import React from "react";
import "./searchPageStyle.scss";
import Peanut from "../../assets/peanut-outline.svg";
import PeanutOff from "../../assets/peanut-off-outline.svg";
import Green from "../../assets/green.svg";
import GreenSelected from "../../assets/green-selected.svg";
import Vegan from "../../assets/vegan.svg";
import VeganSelected from "../../assets/vegan-selected.svg";
import Shellfish from "../../assets/shellfish.svg";
import ShellfishOff from "../../assets/shellfish-selected.svg";
import Fish from "../../assets/fish.svg";
import FishOff from "../../assets/fishOff.svg";

export default class SearchPage extends React.Component{

    searchSubmit = (event) => {
        this.props.userSelection(event);
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="container">
                <form className="form" onSubmit={this.searchSubmit} >
                    <div className="input-field col s2 searchbar">
                        <i className="material-icons prefix">search</i>
                        <input type="text" id="autocomplete-input" className="autocomplete" type="text" name="searchbar" placeholder="Enter Search"></input>
                    </div>
                    <div>
                        <p className="label font-weight-bold">Food Category</p>
                        <div className ="space-between">
                        <label className="fancy-checkbox">
                            <input type="checkbox" name="category1" value="Vegetarian"/>
                                <img className="checked" src={GreenSelected}/>
                                <img className="unchecked" src={Green}/>
                        </label>
                        <label className="fancy-checkbox">
                            <input type="checkbox" name="category2" value="Vegan"/>
                                <img className="checked" src={VeganSelected}/>
                                <img className="unchecked" src={Vegan}/>
                        </label>
                        <label className="fancy-checkbox">
                            <input type="checkbox" name="category3" value="Fish"/>
                                <img className="checked" src={FishOff}/>
                                <img className="unchecked" src={Fish}/>
                        </label>
                        </div>
                    </div>
                    <div>
                        <p className="label font-weight-bold">Allergies</p>
                        <div className ="space-between">
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="allergy1" value="Peanuts"/>
                                <img className="checked" src={PeanutOff}/>
                                <img className="unchecked" src={Peanut}/>
                            </label>
                            
                            <label>
                                <input type="checkbox" name="allergy2" value="Gluten"/>
                                <span>Gluten</span>
                            </label>
                            <label>
                                <input type="checkbox" name="allergy3" value="Dairy"/>
                                <span>Dairy</span>
                            </label>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="allergy4" value="Shellfish"/>
                                <img className="checked" src={ShellfishOff}/>
                                <img className="unchecked" src={Shellfish}/>
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-dark font-weight-bold" type="submit">Submit</button>
                </form>
                {/* <Footer className="footer-class"></Footer> */}
             </div>
        )
    }
}