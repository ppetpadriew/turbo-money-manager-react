import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

export function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger));
    return store;
}