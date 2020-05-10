import React from 'react';
import './cart-icon.styles.scss';
import Icon from '../../assets/images/shopping-bag.svg'
import headerLogo from "../../assets/images/monarchy.svg";

const CartIcon = () => {
    return(
            <div className='cart-icon'>
                <img src={Icon} alt="" className='shopping-icon'/>
                <span className='item-count'>0</span>
            </div>
    );
}

export default CartIcon;