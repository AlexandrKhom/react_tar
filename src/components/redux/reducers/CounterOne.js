import React from "react";
import {DEC, INC, INC_CUS, RESET} from "../action-types";

const initilState = {count: 0};

export const CounterOne = (state = initilState, action) => {
    const {type, payload} = action;
    switch (type) {
        case INC: {
            return {...state, count: state.count + 1}
        }
        case DEC: {
            return {...state, count: state.count - 1}
        }
        case RESET: {
            return {...state, count: 0}
        }
        case INC_CUS: {
            return {...state, count: state.count + payload}
        }
        default: {
            return {...state}
        }
    }
}



