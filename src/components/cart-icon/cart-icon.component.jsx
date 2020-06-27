import React from 'react';
import './cart-icon.styles.scss';
import Icon from '../../assets/images/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createSelectorCreator, createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <img src={Icon} alt="" className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    // 0 is initial cumulative value
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);