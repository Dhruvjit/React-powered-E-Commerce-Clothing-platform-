import {CartActionTypes} from "./cart.types";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                /* triple dots here means that we are spreading everything on the
                   state and only care about spreading what we care about i.e.
                   hidden value
                 */
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                /*
                   What we are doing here is we are spreading the existing values
                   of state into the cartItems and at the end we are
                   appending extra payload
                */
                cartItems: [...state.cartItems, action.payload]
            }
            default:
            return state
    }
}

export default cartReducer;