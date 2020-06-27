import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import headerLogo from '../../assets/images/monarchy.svg';
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import {setCurrentUser} from "../../redux/user/user.actions.js";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentCart, selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartItems} from "../../redux/cart/cart.selectors";

const Header = ({currentUser, cart}) => {
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

                {/* sign in sign out transition links */}

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

                <CartIcon/>

                {/* cart hidden visible transitions */}

                {
                    cart.hidden ? null : <CartDropdown />
                }

            </div>
        </div>
    );
}

// function that allows us to access the state, with state being our root reducer
// state here is the rootReducer
// so this function will call the user value in root-reducer which will give us user-reducer
// here mapStateToProps is just to get the current user, it gets but doesn't sets
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cart: selectCurrentCart
});

// connect allows us to connect our state to the root reducer
export default connect(mapStateToProps)(Header);