import React, {Component} from 'react';
import './App.scss';
import {HomePage} from "./pages/homepage/homepage.component";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from "./firebase/firebase.utils";

class App extends Component{

    unSubscribeFromAuth = null;

    constructor() {
        super();
        this.state= {
            currentUser: null
        }
    }

    componentDidMount() {
        // this method is called whenever user state changes on sign in using google
        /*
        * its a open messaging system on our app, whenever authentication is changed
        * this method will be called because user status has been updated
        * */
        this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
           this.setState({currentUser: user})
            console.log(user)
        });
    }


    componentWillUnmount() {
        // 1: unsubscribeFromAuth is initialised as null
        // 2: unsubscribeFromAuth is reassigned to the return value of calling auth.onAuthStateChanged().
        // Yihua doesn't say this in the vid but this method returns another method: firebase.unsubscribe().
        // (see docs here: https://firebase.google.com/docs/reference/js/firebase.auth.Auth#returns-firebase.unsubscribe)
        // so when unsubscribeFromAuth() is called inside the componentWillUnmount,
        // it now has the value of firebase.unsubscribe(), which executes, closing the session.
        this.unSubscribeFromAuth();
    }

    render(){
        return(
            <Router>
                <div className="body">
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route path='/signin' component={SignInAndSignUpPage} />
                    </Switch>
                </div>
            </Router>
        );

    }
}

export default App;
