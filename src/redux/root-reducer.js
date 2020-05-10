/*
* base reducer object of redux that will reflect the entire state of our application
* this root reducer will end-up being the actual code that combines all other
* states together (follow the diagram in evernote)
* */

/*
* combine reducer is one giant object that is bound by one big redux functionality
*
* As your app grows more complex, you'll want to split your reducing function into separate
* functions, each managing independent parts of the state.
*
* The combineReducers helper function turns an object whose values are different reducing
* functions into a single reducing function you can pass to createStore.
*
* The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()
*
* */

import {combineReducers} from 'redux';
import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
});