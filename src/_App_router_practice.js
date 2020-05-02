import React, {Component} from 'react';
import './App.scss';
import {HomePage} from "./pages/homepage/homepage.component";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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

const TopicDetail = props => {
    console.log(props)
    return (
        <div>
            <h1>
                Topics Detail Page: {props.match.params.topicId}
            </h1>
        </div>
    );
};

const TopicsList = props => {
    console.log(props)
    return (
        <div>
            <h1>
                Topics List
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
                    <Route exact path='/topics' component={TopicsList} />
                    <Route path='/topics/:topicId' component={TopicDetail} />
                </div>
            </Router>
        );
    }
}

export default App;
