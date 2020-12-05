/*
* selectors are mostly used because we want to implement memoization
* and prevent redux from re-rendering our component if the state of the item
* is same as before
* */
import {createSelector} from "reselect";

// select
const selectCart = state => state.cart;

// reselect
export const selectCartItems = createSelector(

    /*  here the first argument i.e. selectCart is the collection e.g. like of an array
        similarly second argument i.e. cart is the function that will return the value
        we want out of this selector, so it will be our output
     */
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity
        , 0)
);