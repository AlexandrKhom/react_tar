import React, {useEffect, useState} from "react";

export function UsersF() {

    const [users, setUsers] = useState([])
    const [load, setLoad] = useState(false)
    const [count, setCount] = useState(1)
    const url = 'https://jsonplaceholder.typicode.com/users/'

    const countInc = () => {
        setCount(count+1)
    }

    // const wait = () => {
    //     setLoad(false)
    // }

    const fetchData = async () => {
        setLoad(true)
        const resp = await fetch(`${url}${count}`)
        const data = await resp.json()
        setLoad(false)
        setUsers(data)
    }

    useEffect(()=> {
        fetchData()
    }, [count])

    return (
        <div>
            <button onClick={()=> countInc()}>click</button>
            <h1>{count}</h1>
            <hr/>
            {load && (<h1>LOADING.....</h1>)}
            {!!users && (<h1>{users.id} - {users.name}</h1>)}

        </div>
    );
}
