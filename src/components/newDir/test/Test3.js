import React from "react";
import {useDispatch, useSelector} from "react-redux";

export function Test3() {

    const count5 = useSelector(({count3: {count22}})=> {
       return  count22
    })
    const dispatch = useDispatch()
    console.log(count5)

    return (
        <div>
            <button onClick={()=> dispatch({type: "INC"})}>inc</button>
            <button onClick={()=> dispatch({type: "DEC"})}>dec</button>
            <button onClick={()=> dispatch({type: "RES"})}>res</button>
            <button onClick={()=> dispatch({type: "INC_PAY", payload: 100})}>pay</button>

            <hr/>
<h1>{count5}</h1>
        </div>
    );
}
