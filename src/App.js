import React, {Component} from 'react';
import './App.scss';
import {HomePage} from "./pages/homepage/homepage.component";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

class App extends Component{
    render(){
        return(
            <Router>
                <div className="body">
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                </div>
            </Router>
        );
    }
}

export default App;
