import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import headerLogo from '../../assets/images/monarchy.svg';
import {auth} from "../../firebase/firebase.utils";

const Header = ({currentUser}) => {

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
                        </div> :
                        <Link className="option" to="/signin">
                            SIGN IN
                        </Link>
                }
            </div>
        </div>
    );
}

export default Header;