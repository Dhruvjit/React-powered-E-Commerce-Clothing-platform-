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
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                /* if id is same then treat it as same item and only increment the quantity */

                // we didn't had quantity at the point of writing this code
                // it was configured and added later
                {...cartItem, quantity: cartItem.quantity + 1} :

                /* otherwise only return the cart item */
                cartItem
        )
    }

    /* if existing cartitem is not found then update items which are already there */

    // the values in braces means that along with cartItems push the cart items to add
    // and increase its quantity to 1

    /*
    NOTE: quantity property gets attached the first time around since
       this if block wont run when its a new item
    */
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}