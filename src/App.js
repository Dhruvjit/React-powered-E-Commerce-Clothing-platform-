import React, {Component} from 'react';
import './App.scss';
import {HomePage} from "./pages/homepage/homepage.component";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

class App extends Component{
    render(){
        return(
            <Router>
                <div className="body">
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                    </Switch>
                </div>
            </Router>
        );

    }
}

export default App;
