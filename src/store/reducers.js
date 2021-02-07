"use strict";

import { combineReducers } from 'redux';
import PhoneListReducer from './PhoneList/reducers';
import CartReducer from "./Cart/reducers";
import {routerReducer} from "react-router-redux";

export default combineReducers({
    phone: PhoneListReducer,
    cart: CartReducer,
    routing: routerReducer
});

