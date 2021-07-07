import React, {useState} from "react";

export function Arrey() {

    const [arr, setArr] = useState([
        {id: 1, title: 'title 1'},
        {id: 2, title: 'title 2'},
        {id: 3, title: 'title 3'},
    ]);

    const first = () => {
        const clone = [...arr];
        clone.shift()
        setArr(clone)
    }

    const last = () => {
        const clone = [...arr];
        clone.pop()
        setArr(clone)
    }
    const toggler = (itemToRem) => {
        if (itemToRem !== 'f' && itemToRem !== 'l') {
            return
        }
        const clone3 = [...arr];
        itemToRem === 'f' ? clone3.shift() : clone3.pop()
        setArr(clone3)
    }

    return (
        <div>
            <button onClick={first}>first</button>
            <button onClick={last}>last</button>
            <hr/>
            <button onClick={()=> toggler('f')}>f</button>
            <button onClick={()=> toggler('l')}>l</button>
            {arr.map(el => (<h1 key={el.id}>{el.title}</h1>))}
        </div>
    );
}
