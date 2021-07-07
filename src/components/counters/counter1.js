import React, {useState} from "react";

export function Counter1() {

    const [counter1, setCounter1] = useState(0);
    const [visible, setVisible] = useState(true)

    const hide = () => {
        setVisible(!visible)
    }

    const click1Inc = () => {
        setCounter1(counter1 + 1)
    }
    const click1Dec = () => {
        setCounter1(counter1 - 1)
    }
    const click1Res = () => {
        setCounter1(0)
    }

    return (
        <div>
            <button onClick={() => click1Inc()}>Inc</button>
            <button onClick={() => click1Dec()}>Dec</button>
            <button onClick={click1Res}>Res</button>
            <button onClick={hide}>Visible</button>
            {visible && <h1>{counter1}</h1>}
        </div>
    );
}
