import React, {useContext} from "react";
import {CounterContext} from "./Context";

export function Counter1() {
const {count, incCount} = useContext(CounterContext)
    return (
        <div>
<button onClick={incCount}>click</button>
     <hr/>
            <h2>{count}</h2>
        </div>
    );
}
