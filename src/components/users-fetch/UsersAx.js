import React, {useEffect, useState} from "react";
import axios from "axios"

export function UsersAx() {

    const [user, setUser] = useState([]);
    const [count, setCount] = useState(1)
    const url = 'https://jsonplaceholder.typicode.com/users/'

    const countInc = () => {
        if (count > 9) {
            return setCount(1)
        }
        setCount(count + 1)
    }

    let axiosInstance = axios.create({
        baseURL: `${url}${count}`
    })

    const getUser = () => axiosInstance()

    useEffect(() => {
        getUser().then(resp => {  // используем ф-цию Аксиоса
            setUser(resp.data)  // к необходимому массиву доступаемся через .data
        })
    }, [count])

    return (
        <div>
            <button onClick={() => countInc()}>click</button>
            <h1>{count}</h1>
            {!!user && (<h1>{user.id} - {user.name}</h1>)}

        </div>
    );
}
