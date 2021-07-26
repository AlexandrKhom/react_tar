import React, {useState} from "react";
import {CounterContext} from "./Context";

export const ContextProv = ({children}) => {
    const [count, setCount] = useState(0)

    const incCount = ()=> {
        setCount(count+1)
    }

    return(
        <CounterContext.Provider value={{count, incCount}}>
            {children}
        </CounterContext.Provider>
    )
}


