import React from 'react';
import { ADDING, REMOVING } from "../actions/actionsTypes";

function Counter(state=initialState,action) {
const initialState=100;
        switch (action.type){
            case ADDING:
                return state ++;
            case REMOVING:
                return state--;
            default:
                return state
        }
    
}

export default Counter
