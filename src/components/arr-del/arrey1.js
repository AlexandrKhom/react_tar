import React, {useState} from "react";

export function Arrey1() {

    const [arr, setArr] = useState([
        {id: 1, title: 'title 1'},
        {id: 2, title: 'title 2'},
        {id: 3, title: 'title 3'},
    ]);

    const [hide, setHide] = useState([])

    const filArr = arr.filter(el => !hide.includes(el))

    const remove = () => {
        const clone = filArr[0]
        setHide([...hide, clone])
    }

    const reset = () => {
        setHide([])
    }

    const itemRemove = (itemrem) => {
        if (!itemrem) return
        setHide([...hide, itemrem])
    }

    return (
        <div>
            <button onClick={() => remove()}>remove</button>
            <button onClick={() => reset()}>reset</button>
            {filArr.map(el => (<h1 key={el.id}>{el.title} -
                <button onClick={()=> itemRemove(el)}>rem</button></h1>))}
        </div>
    );
}
