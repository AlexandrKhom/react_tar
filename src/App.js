import React from "react";

import {Counter1} from "./components/testprov/Counter1";
import {Counter2} from "./components/testprov/Counter2";
import {ContextProv} from "./components/testprov/ContextProv";


export default function App() {
    return (
        <div>
   <ContextProv>
       <Counter1/>
       <Counter2/>
   </ContextProv>
        </div>
    )
}
