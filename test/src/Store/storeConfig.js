import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import numero from "./reducers/numero";
import {thunk} from 'redux-thunk';
import { applyMiddleware } from 'redux'
import multi from 'redux-multi'

const reducers = combineReducers({
    numero: numero,
})

function storeConfig() {
    return configureStore({ 
        reducer: reducers, 
        middleware: () => [thunk, multi] })
}

export default storeConfig