import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Link, Switch, useParams, useHistory} from "react-router-dom";

export default function App() {
    return (<Router>
        <div>
            <h2><Link to={'/'}>Home</Link></h2>
            <h2><Link to={'/about'}>about</Link></h2>
            <h2><Link to={'/users'}>users</Link></h2>
            <h2><Link to={'/test'}>test</Link></h2>

            <Switch>
                <Route path={'/'} exact><Home/></Route>
                <Route path={'/about'}>{About}</Route>
                <Route path={'/users'} exact component={Users}/>
                <Route path={'/test'} render={(arg)=> {
                    console.log(arg)
                    return <Test/>
                }}
                />
                <Route path={'/users/:id'}><Detal/></Route>
            </Switch>
        </div>
    </Router>);
}

function Home() {
    return <h2>Home</h2>;
}

function About(props) {
    console.log(props)
    return <h2>About</h2>;
}

function Users(props) {
    console.log(props)
    const [users, setUsers] = useState([])

    const dataFetch = async ()=> {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await resp.json()
        setUsers(data)
    }
    useEffect(()=> {dataFetch()}, [])

    return (<div>
        {users.map(el => (<Link key={el.id} to={`/users/${el.id}`}><h2 key={el.id}>{el.id}-{el.name}</h2></Link>))}
    </div>)
}

function Test() {
    return <h2>TEST</h2>
}

function Detal() {
    const [user, setUser] = useState();
    const {id} = useParams();
    const history = useHistory();

    const fetchData = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await resp.json()
        setUser(data)
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div>
            <h1>Detal</h1>
            {user && (<h2>{user.id} - {user.name}</h2>)}
            <button onClick={() => history.push(`/users/${+id + 1}`)}>next</button>
        </div>
    )
}
