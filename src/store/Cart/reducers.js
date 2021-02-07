"use strict";

import { LOAD_CART, REMOVE_IN_CART } from './actions';
import { ADD_IN_CART } from '../Phone/actions';

const initialState = {
    cart: []
};


function CartReducer( state = initialState , action ) {

    switch( action.type ){

        case LOAD_CART: {
            return {
                ...state,
                cart: action.payload
            };
        }

        case ADD_IN_CART: {
            return {
                ...state,
                cart: action.payload
            };
        }

        case REMOVE_IN_CART: {
            return {
                ...state,
                cart: action.payload
            };
        }
    }

    return state;

}


export default CartReducer;