import React from "react";
import {INC2, DEC2, INC_CUS2, RESET2} from "../action-types";

const initialState = {count2: 0};

export const CounterTwo = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case INC2: {
            return {...state, count2: state.count2 + 1}
        }
        case DEC2: {
            return {...state, count2: state.count2 - 1}
        }
        case RESET2: {
            return {...state, count2: 0}
        }
        case INC_CUS2: {
            return {...state, count2: state.count2 + payload}
        }
        default: {return {...state}}
    }
}



