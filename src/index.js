import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import {Provider} from 'react-redux';
import store from "./redux/store";
/*get app elementbyID is to get element from index.html where we want to output*/
ReactDOM.render(
    /*
    * provider is a component that is the parent of everything inside the application
    * It gets us access to all things e.g. redux, its a store that allows us to keep
    * all the things in redux
    * */

    /*
    * passing store as argument is to give redux store context to rest of the application
    * this way we can dispatch action to the store and pull values from the store to our
    * application
    * */
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));
