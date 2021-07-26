import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch, Redirect, useHistory, useParams} from "react-router-dom";

function Home() {
    return (<h1>Home</h1>)
}

function Users() {
    const [users, setUsers] = useState([]);

    const dataFetch = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await resp.json();
        setUsers(data)
    }

    useEffect(() => {
        dataFetch()
    }, [])

    return (<div>
        {users.map(el =>
            <Link to={`/user/${el.id}`}>
                <div>{el.id}-{el.name}</div>
            </Link>)}
    </div>)
}

function Posts() {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await resp.json();
        setPosts(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {posts.map(el => <div key={el.id}>{el.id} - {el.title}</div>)}
        </div>
    )
}

function Test() {
    return (<h1>Test</h1>)
}

export default function App() {

    return (
        <div>
            <Router>
                <div>
                    <h2><Link to={'/'}>home</Link></h2>
                    <h2><Link to={'/users'}>users</Link></h2>
                    <h2><Link to={'/posts'}>posts</Link></h2>
                    <h2><Link to={'/test'}>test</Link></h2>

                    <Switch>
                        <Route path={'/'} exact><Home/></Route>
                        {/*<Route path={'/users'} exact><Users/></Route>*/}
                        <Route path={'/posts'} component={Posts}/>
                        <Route path={'/users'} render={() => {
                            return <Users/>
                        }}/>
                        <Route path={`/user/:id`}><Detal/></Route>
                        <Route><Redirect to={'/test'}/></Route>
                    </Switch>

                </div>
            </Router>
        </div>
    )
}

function Detal() {

    const [user, setUser] = useState('')
    const {id} = useParams()
    const history = useHistory()

    const urlBase = `https://jsonplaceholder.typicode.com/users`
    const dataFetch = async () => {
        const resp = await fetch(`${urlBase}/${id}`)
        const data = await resp.json()
        setUser(data)
    }
    useEffect(() => {
        dataFetch()
    }, [id])
    return (<div>
        {user && <h2>{user.id} - {user.name}</h2>}
        <button onClick={() => history.push(`/user/${+id + 1}`)}>next</button>
    </div>)
}
