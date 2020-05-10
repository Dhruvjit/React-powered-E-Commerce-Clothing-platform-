import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import rootReducer from './root-reducer'

/*
* createSore ->
*   createStore(reducer, [preloadedState], [enhancer]) ->
*   Creates a Redux store that holds the complete state tree of your app.
*   There should only be a single store in your app.
*
* applyMiddleware ->
*   when actions get fired, we catch them and display them
*
*   these are just functions which receive actions and it does something with them
*   and pass it to the root reducer
*
*   Middleware is the suggested way to extend Redux with custom functionality.
*   Middleware lets you wrap the store's dispatch method for fun and profit.
*   The key feature of middleware is that it is composable.
*   Multiple middleware can be combined together, where each middleware requires no knowledge
*   of what comes before or after it in the chain.
*
* logger ->
*  this is something that is nice for us to use when debugging our redux code. This is
*  helpful to log our code.
*
*  One of the benefits of Redux is that it makes state changes predictable and transparent.
*  Every time an action is dispatched, the new state is computed and saved.
*  The state cannot change by itself,
*  it can only change as a consequence of a specific action.

*  Wouldn't it be nice if we logged every action that happens in the app,
*  together with the state computed after it? When something goes wrong,
*  we can look back at our log, and figure out which action corrupted the state.
*/

const middleWares = [logger];
// here we are applying logger service as middleWares
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;