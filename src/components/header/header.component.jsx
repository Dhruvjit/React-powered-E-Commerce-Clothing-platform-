import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';

const Header = () => {

    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <img src="../../assets/cowboyHat.svg" alt="" height="60px" width="60px"/>
            </Link>
            <div className="options">
                <Link className="options" to="/shop">
                    SHOP
                </Link>
                <Link className="options" to="/contact">
                    CONTACT
                </Link>
            </div>
        </div>
    );
}

export default Header;