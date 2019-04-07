import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index.js";
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(ReduxPromise, thunk)));

export default store;
