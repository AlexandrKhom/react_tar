import React, {useEffect, useState} from "react";

export function Test2() {

const [point, setPoint] = useState('')
    const [id, setId] = useState('')
const [single, setSingle] = useState(null)
    const [more, setMore] = useState([])

    const url = `https://jsonplaceholder.typicode.com/`
    const dataFetch = async ()=> {
    const resp = await fetch(`${url}${point}/${id}`)
        const data = await resp.json()
        if (id){
            setMore([])
            setSingle(data)
            return
        }
        setSingle(null)
        setMore(data)
    }
    useEffect(()=> {dataFetch()}, [id])

    return (
        <div>
            <button onClick={dataFetch}>click</button>
            <input
            name={'point'} type={'text'} value={point} placeholder={'point'}
            onChange={event => setPoint(event.target.value)}
            />
            <input
            name={'id'} type={'number'} placeholder={'id'} value={id}
            onChange={({target:{value}})=> setId(value)}
            />
            <hr/>
            {single && JSON.stringify(single, null, 2)}
            {more && more.map(el => <h2 key={el.id}>{el.id}-{el.name ?? el.title ?? el.body}</h2>)}
        </div>
    );
}
