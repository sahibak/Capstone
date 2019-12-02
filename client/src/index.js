import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SearchPage from './Components/searchPage/searchPage';
import Main from './Components/main/main';
import ShoppingCart from "./Components/shoppingCart/shoppingCart.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component = {SearchPage}></Route>
            <Route path="/recipes" exact component = {Main}></Route>
            <Route path="/shoppingcart" exact component = {ShoppingCart}></Route>
            <Route path="/recipebook" exact component = {ShoppingCart}></Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
