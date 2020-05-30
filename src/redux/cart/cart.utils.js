/*
* add any cart related to function in this space
* */

export const addItemToCart = (cartItems, cartItemToAdd) => {
    /* find will return first item based on the condition below */
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    // if the above function doesnt return anything then it will be undefined
    if(existingCartItem){
        // if existingCartItem exists then return new version of the array
        return cartItems.map(
            cartItem => cartItem === cartItem.id ?
                {...cartItem, quantity: cartItem.quantity + 1}:
                cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}