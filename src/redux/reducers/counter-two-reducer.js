import {INC2, INC_CUS2, RESET2, DEC2} from "../action-types";

const initialState = {
    count: 0
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case INC_CUS2: {
            return {...state, count: state.count + action.payload}
        }
        case INC2: {
            return {...state, count: state.count + 1}
        }
        case DEC2: {
            return {...state, count: state.count - 1}
        }
        case RESET2: {
            return {...state, count: 0}
        }
        default: {
            return state
        }
    }
}
export default reducer
