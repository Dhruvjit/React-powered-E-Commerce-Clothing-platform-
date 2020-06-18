/* *
* cartItem that will get the value from json file
* these are just like what we show in the little dropdown space
* when user presses on cart icon
* */

import React from "react";
import "./cart-item.styles.scss"

/* show this component when user presses on cart icon */

const CartItem = (item) => {
    console.log(item.item.imageUrl);
    return (
        <div className='cart-item'>
            <img src={item.item.imageUrl} alt="item"/>
            <div className="item-details">
                <span className="name">
                    {item.item.name}
                </span>
                <span className="price">
                    {/* total price calculation */}
                    {item.item.quantity} * ${item.item.price}
                </span>
            </div>
        </div>
    )
}

export default CartItem;