"use strict";

import { LOAD_PHONES } from './actions';
import { SEARCH_PHONES } from "../Search/actions";
import { SORT_PHONES } from "../Sort/action";

const initialState = {
    phones: []
};


function PhoneListReducer( state = initialState , action ) {

    switch( action.type ){

        case LOAD_PHONES: {
            return {
                ...state,
                phones: action.payload
            };
        }

        case SEARCH_PHONES: {
            return {
                ...state,
                phones: action.payload
            };
        }

        case SORT_PHONES:{

            return {
                ...state,
                phones: action.payload,
                isUpdated: true,
            };
        }

    }
    
    return state;

}


export default PhoneListReducer;