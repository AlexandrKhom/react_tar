import {SET_PRODUCTS, START_PRODUCTS_LOADING, END_PRODUCTS_LOADING} from "../action-types";

const initialState = {
    products: [],
    isLoading: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {...state, products: action.payload, isLoading: false}
        }
        case START_PRODUCTS_LOADING: {
            return {...state, isLoading: true}
        }
        case END_PRODUCTS_LOADING: {
            return {...state, isLoading: false}
        }
        default:
            return state
    }
};
export default reducer



