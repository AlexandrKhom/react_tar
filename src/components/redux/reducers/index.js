import React from "react";
import {combineReducers} from "redux";
import {CounterOne} from "./CounterOne";
import {CounterTwo} from "./CounterTwo";

export const reducer = combineReducers({
    count1: CounterOne,
    count2: CounterTwo
})


