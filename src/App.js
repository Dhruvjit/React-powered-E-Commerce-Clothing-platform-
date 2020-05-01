import React, {Component} from 'react';
import './App.scss';
import {HomePage} from "./pages/homepage/homepage.component";

class App extends Component{
    render(){
        return(
            <div className="body">
                <HomePage/>
                <div>hello</div>
            </div>
        );
    }
}

export default App;
