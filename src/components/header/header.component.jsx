import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import headerLogo from '../../assets/images/monarchy.svg';
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import {setCurrentUser} from "../../redux/user/user.actions";

const Header = ({currentUser}) => {
    console.log('header current user values is ', currentUser);
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <img src={headerLogo} alt="" height="80px" width="80px"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    // if current user is an object and not null then evaluate it to div
                    // if it is null then evaluate it to Link
                    currentUser ?
                        <div className="option" onClick={()=>auth.signOut()}>
                            SIGN OUT
                            <span className='option-name'>Hello, {currentUser.email}</span>
                        </div> :
                        <Link className="option" to="/signin">
                            SIGN IN
                        </Link>
                }
            </div>
        </div>
    );
}

// function that allows us to access the state, with state being our root reducer
// state here is the rootReducer
// so this function will call the user value in root-reducer which will give us user-reducer
// here mapStateToProps is just to get the current user, it gets but doesn't sets
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

// connect allows us to connect our state to the root reducer
export default connect(mapStateToProps)(Header);