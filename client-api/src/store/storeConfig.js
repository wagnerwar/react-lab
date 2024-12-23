import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/reducer";
import {thunk} from 'redux-thunk';
import { applyMiddleware } from 'redux'
import multi from 'redux-multi'
import {reducer as toastrReducer} from 'react-redux-toastr'
import authReducer from "./reducers/authReducer";
const reducers = combineReducers({
    reducer: reducer,
    toastrReducer: toastrReducer,
    authReducer: authReducer
})

function storeConfig() {
    return configureStore({ 
        reducer: reducers, 
        middleware: () => [thunk, multi] })
}

export default storeConfig
