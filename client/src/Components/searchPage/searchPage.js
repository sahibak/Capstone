import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./style.scss";
import Footer from "../footer/footer.js";
import Headroom from "react-headroom";

export default class SearchPage extends React.Component{
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.collapsible');
            let elems2 = document.querySelectorAll('.autocomplete');
            
            let instances = M.Collapsible.init(elems, {})
            let instances2 = M.Autocomplete.init(elems, {
                data:"currinder"
            });
        });
    }
    searchSubmit = (event) => {
        this.props.userSelection(event);
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.searchSubmit}>
                    <div className="input-field col s2">
                        <i className="material-icons prefix">search</i>
                        <input type="text" id="autocomplete-input" className="autocomplete" type="text" name="searchbar" placeholder="Enter Search"></input>
                    </div>
                    <div>
                        <p>Food Category</p>
                        <div className ="space-between">
                            <label>
                                <input type="checkbox" name="category1" value="Vegetarian" className="red"/>
                                <span>Vegetarian</span>
                            </label>
                            <label>
                                <input type="checkbox" name="category2" value="Vegan"/>
                                <span>Vegan</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <p>Allergies</p>
                        <div className ="space-between">
                            <label>
                                <input type="checkbox" name="allergy1" value="Peanuts"/>
                                <span>Peanuts</span>
                            </label>
                            <label>
                                <input type="checkbox" name="allergy2" value="Gluten"/>
                                <span>Gluten</span>
                            </label>
                            <label>
                                <input type="checkbox" name="allergy3" value="Dairy"/>
                                <span>Dairy</span>
                            </label>
                        </div>
                    </div>
                    <button class="waves-effect waves-light btn submit-btn" type="submit">Submit</button>
                </form>
                <Footer className="footer-class"></Footer>
             </div>


            // <>
            //     <form onSubmit={this.searchSubmit}>
            //     <input type="text" name="searchbar" placeholder="enter keyword to search by.."></input>
            //         <p>Food Category</p>
            //         <div>
            //             <label>Vegetarian</label>
            //             <input type="checkbox" name="category1" value="Vegetarian" id="indeterminate-checkbox"></input>
            //         </div>
            //         <div>
            //             <label>Vegan</label>
            //             <input type="checkbox" name="category2" value="Vegan"></input>
            //         </div>
            //         <p>Allergies</p>
            //         <div>
            //             <label>Peanuts</label>
            //             <input type="checkbox" name="allergy1" value="Peanuts"></input>
            //         </div>
            //         <div>
            //             <label>Gluten</label>
            //             <input type="checkbox" name="allergy2" value="Gluten"></input>
            //         </div>
            //         <div>
            //             <label>Dairy</label>
            //             <input type="checkbox" name="allergy3" value="Dairy"></input>
            //         </div>
                
            //             <button type="submit">Enter</button>
                    
            //     </form>
            // </>
        )
    }
}