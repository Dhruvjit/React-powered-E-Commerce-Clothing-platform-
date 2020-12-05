import {createSelector} from "reselect";

// selector
const selectUser = state => state.user;
const selectCart = state => state.cart;

// reselect
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectCurrentCart = createSelector(
    [selectCart],
    cart => cart
);