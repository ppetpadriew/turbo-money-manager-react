/// <reference path="../../config/types/redux-router5.d.ts" />

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { router5Middleware } from 'redux-router5';
import {Router} from "router5";
import rootReducer from "./rootReducer";

export function configureStore(router: Router, initialState = {}) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger, router5Middleware(router)));
    return store;
}