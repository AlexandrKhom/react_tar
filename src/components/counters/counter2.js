import React, {useState} from "react";

export function Counter2() {

    const [arr, setArr] = useState([                    //массив объектов
        {id: 1, title: 'title 1'},
        {id: 2, title: 'title 2'},
        {id: 3, title: 'title 3'},
    ]);

    const change = () => {
        const clone = [...arr]
        clone[2].title = Math.round(Math.random()*15)
        setArr(clone)
    }
    const reset = () => {
        const clone1 = [...arr];
        clone1[2].title = 'title 3'
        setArr(clone1)
    }

    return (
        <div>
            <button onClick={change}>change</button>
            <button onClick={reset}>reset</button>
            {arr.map(el => (<h1 key={el.id}>{el.title}</h1>))}
        </div>
    );
}
