import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch, Link, useParams, useHistory} from "react-router-dom";


const Home = () => {
    return (<div>
        Home
    </div>)
}
const Users = () => {

    const [users, setUsers] = useState([])

    const url = `https://jsonplaceholder.typicode.com/users/`

    const dataFetch = async () => {
        const resp = await fetch(`${url}`)
        const data = await resp.json()
       setUsers(data)
    }
    useEffect(()=> {dataFetch()}, [users])


    return (<div>
        {users.map(el => <h2 key={el.id}>{el.id} - {el.name ?? el.body}</h2>)}
    </div>)
}
const Details = ()=> {
    const [user, setUser] = useState([])
    const {id} = useParams()
    const history = useHistory()


    const url = `https://jsonplaceholder.typicode.com/users/`

    const dataFetch = async () => {
        const resp = await fetch(`${url}${id}`)
        const data = await resp.json()
        setUser(data)
    }
    useEffect(()=> {dataFetch()}, [id])

    return(<div>
        {user && <h2>{user.id} - {user.name}</h2>}
        <button onClick={()=> history.push(`/users/${+id +1}`)}>click</button>
        <button onClick={()=> history.push(`/users/${+id -1}`)}>prev</button>
    </div>)
}

function Posts() {
    return (<div>
        Posts
    </div>)
}

export function Test() {

    return (
        <div>
            <Router>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/users'}>Users</Link></li>
                        <li><Link to={'/posts'}>Posts</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/users'} component={Users}/>
                    <Route path={'/posts'}>{Posts}</Route>
                    <Route path={'/users/:id'} component={Details}/>
                </Switch>
            </Router>

        </div>
    );
}
