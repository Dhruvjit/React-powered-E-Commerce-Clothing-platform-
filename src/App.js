import React, {Component} from 'react';
import './App.scss';
import {HomePage} from "./pages/homepage/homepage.component";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class App extends Component{

    unSubscribeFromAuth = null;

    componentDidMount() {

        // this method is called whenever user state changes on sign in using google
        /*
        * its a open messaging system on our app, whenever authentication is changed
        * this method will be called because user status has been updated
        * */
        this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
           if(userAuth){
               // createUserProfileDocument returns us userRef
               const userRef = await createUserProfileDocument(userAuth);
               // get userRef object because we want to check if the database been updated at that reference with any new data
               userRef.onSnapshot(snapshot => {
                   /* documentSnapshot returns us two properties 1. exists and 2. data() method  */
                   /* snapshot.data() -> returns us displayName, email and createdAt data from the database located in firebase */
                   this.props.setCurrentUser({
                       // returns id and displayName, email and createdAt data using ...snapshot.data()
                       id: snapshot.id,
                       ...snapshot.data()
                   });

               })
           }
            // if userAuth is null then set the state as userAuth which is actually - null
            this.props.setCurrentUser(userAuth);
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
                        <Route exact path='/signin'
                               render={()=>this.props.currentUser ?
                                   (<Redirect to="/" />) :(<SignInAndSignUpPage/>)}
                        />
                    </Switch>
                </div>
            </Router>
        );

    }
}

// get current user from user reducer
const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    // dispatch here denotes that whatever is going to passed to me
    // will be used as action object that i ll pass to every reducer
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

// null here represents that we don't want any state to prop from reducer
export default connect(mapStateToProps, mapDispatchToProps)(App);
