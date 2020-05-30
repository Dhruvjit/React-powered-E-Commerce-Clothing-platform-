/* instead of setstate we make use redux actions */
import {UserActionTypes} from "./user.types";

export const setCurrentUser = user => ({
    // types inside the action like given below should always match
    // the reducer's case e.g. in our case 'SET_CURRENT_USER' string matches both
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});