import {combineReducers} from "redux";
import counter1Reducer from './counter-one-reducer';
import counter2Reducer from './counter-two-reducer';



export const reducer = combineReducers({
    count1: counter1Reducer,
    count2: counter2Reducer
})
