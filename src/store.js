import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appStateReducer from './app/reducers/appState';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({appStateReducer})
let store;
if (process.env.NODE_ENV === 'production') {
    store = createStore(reducer, applyMiddleware(thunk))
} else {
    store = createStore(reducer, composeWithDevTools(
        applyMiddleware(thunk)
    ))
}

export default store;