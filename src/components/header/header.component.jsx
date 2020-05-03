import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import headerLogo from '../../assets/images/crowns.svg';

const Header = () => {

    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <img src={headerLogo} alt="" height="80px" width="80px"/>
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