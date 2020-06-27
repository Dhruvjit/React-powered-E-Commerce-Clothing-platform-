import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux';
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartDropdown = ({cartItems}) => {

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem =>
                        <CartItem key={cartItem.id} item={cartItem} />
                        )
                }
            </div>
            <CustomButton>
                CHECKOUT
            </CustomButton>
        </div>
    );
}

// get cartItems from root reducer
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);