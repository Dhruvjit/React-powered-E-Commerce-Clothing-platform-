import React, {Component} from 'react';
import './App.scss';
import {HomePage} from "./pages/homepage/homepage.component";
import {BrowserRouter as Router, Route} from "react-router-dom";

const HatsPage = props => {
    console.log(props)
    return (
        <div>
            <h1>
                Hats Page
            </h1>
        </div>
    );
};

class App extends Component{
    render(){
        return(
            <Router>
                <div className="body">
                    <Route exact path='/' component={HomePage} />
                    <Route path='/hats' component={HatsPage} />
                </div>
            </Router>
        );
    }
}

export default App;
