import {UserActionTypes} from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}

// state = INITIAL_STATE represents a fallback mechanism where initially state points to initial state
const userReducer = (state = INITIAL_STATE, action) => {

    /*  type: just the name/specific type of the action e.g. 'current_user'
        payload: payload can be anything, with this payload object we can
        transform or update our state
    */

    switch (action.type) {
        // if case set_current_user then update the state
        case UserActionTypes.SET_CURRENT_USER:
            return {
                /* triple dots here means that we are spreading everything on the
                   state and only care about spreading what we care about i.e. currentUser
                 */
                ...state,
                currentUser: action.payload
            }
            //    return state as default when no actions are matched
        default:
            return state;
    }
};

export default userReducer;