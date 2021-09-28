import React from "react";

const initialState = {
    count22: 0
}

export const Counter = (state= initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case "INC": {
            return {...state, count22: state.count22 + 1}
        }
        case "DEC": {
            return {...state, count22: state.count22 - 1}
        }
        case "RES": {
            return {...state, count22: 0}
        }
        case "INC_PAY": {
            return {...state, count22: state.count22 + payload}
        }
        default: {
            return state
        }

    }
}





