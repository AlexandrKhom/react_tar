import React, {useContext} from "react";
import {CounterContext} from "./Context";

export function Counter2() {
const {count} = useContext(CounterContext)
    return (
        <div>
<h2>{count}</h2>
        </div>
    );
}
