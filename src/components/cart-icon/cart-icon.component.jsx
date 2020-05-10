import React from 'react';
import './cart-icon.styles.scss';
import Icon from '../../assets/images/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

const CartIcon = ({toggleCartHidden}) => {
    return(
            <div className='cart-icon' onClick={toggleCartHidden}>
                <img src={Icon} alt="" className='shopping-icon'/>
                <span className='item-count'>0</span>
            </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);