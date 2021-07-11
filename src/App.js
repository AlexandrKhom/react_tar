import './App.css';
import {Tabs} from "./components/tabs/Tabs";
import React, {useEffect, useState} from "react";
import {Posts} from "./components/posts/Posts";
import {Users} from "./components/users/Users";
import {Comments} from "./components/comments/Comments";

function App() {

    const category = [
        {title: 'posts', clickF: () => setTab('posts')},
        {title: 'users', clickF: () => setTab('users')},
        {title: 'comments', clickF: () => setTab('comments')}
    ]

    const [tab, setTab] = useState(category[0].title)
    const [list, setList] = useState([])

    const url = (resourse) => `https://jsonplaceholder.typicode.com/${resourse}`

    const fetchData = async () => {
        const resp = await fetch(url(tab))
        const data = await resp.json()
        setList(data)
    }
    useEffect(()=> {
        fetchData()
    }, [tab])


    return (
        <div className="App">
            <Tabs tabs={category} change={tab}/>
            {tab === 'users' && <Users users={list}/>}
            {tab === 'posts' && <Posts posts={list}/>}
            {tab === 'comments' && <Comments comments={list}/>}

        </div>
    );
}

export default App;
