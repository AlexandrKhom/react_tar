import './App.css';
import React, {useEffect, useState} from "react";


function App() {

    const [point, setPoint] = useState('')
    const [id, setId] = useState('')
    const [one, setOne] = useState(null)
    const [more, setMore] = useState([])

    const url = `https://jsonplaceholder.typicode.com/`

    const dataFetch = async () => {
        const resp = await fetch(`${url}${point}/${id}`)
        const data = await resp.json()
        if (id) {
            setOne(data)
            setMore([])
            return
        }
        setMore(data)
        setOne(null)
    }

    // useEffect(() => {
    //     dataFetch()
    // }, [point])

    return (
        <div className={'App'}>
            <input type={'text'} name={'point'} placeholder={'point'}
                   value={point} onChange={(event => setPoint(event.target.value))}
            />
            <input type={'number'} name={'id'} placeholder={'id'}
                   value={id} onChange={({target: {value}}) => setId(value)}
            />
            <button onClick={dataFetch}>click</button>
            <hr/>
            {one && (<h2>{JSON.stringify(one, null, 2)}</h2>)}
            {more.map(el=> (<h2>{el.id}-{el.name ?? el.title}</h2>))}
        </div>
    );
}

export default App;
