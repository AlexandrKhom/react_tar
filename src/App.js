import './App.css';
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {incAction, incCusAction, resAction, decAction, incCusAction2, incAction2, resAction2, decAction2
} from "./redux/action-creators";

function App() {

    // const count1 = useSelector(({count1: {count}}) => {
    //     return count
    // })
    // const count2 = useSelector(({count2: {count}}) => {
    //     return count
    // })

    const {count1, count2} = useSelector(({count1, count2}) => ({
        count1: count1.count,
        count2: count2.count
    }))

    const dispatch = useDispatch()

    return (
        <div className="App">
            <button onClick={() => dispatch(incCusAction(100))}>INC100</button>
            <button onClick={() => dispatch(incAction())}>INC</button>
            <button onClick={() => dispatch(decAction())}>DEC</button>
            <button onClick={() => dispatch(resAction())}>RESET</button>
            <hr/>
            <button onClick={() => dispatch(incCusAction2(100))}>INC100</button>
            <button onClick={() => dispatch(incAction2())}>INC</button>
            <button onClick={() => dispatch(decAction2())}>DEC</button>
            <button onClick={() => dispatch(resAction2())}>RESET</button>
            <hr/>
            <h1>first = {count1}</h1>
            <h1>second = {count2}</h1>
        </div>
    );
}
export default App;
