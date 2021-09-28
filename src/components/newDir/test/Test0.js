import React, {useEffect, useState} from "react";
import {Comments} from "../../tabs/Comments";
import {Tabs} from "../../tabs/Tabs";
import {Users} from "../../tabs/Users";
import {Posts} from "../../tabs/Posts";
import {Todos} from "../../tabs/Todos";


export function Test0() {
    const [btn, setBtn] = useState('users')

    const category = [
        {id: 0, body: 'users', clickHandler: () => setBtn('users')},
        {id: 1, body: 'posts', clickHandler: () => setBtn('posts')},
        {id: 2, body: 'comments', clickHandler: () => setBtn('comments')},
        {id: 3, body: 'todos', clickHandler: () => setBtn('todos')},
    ]

    const [list, setList] = useState([])

    const urlBuild = (sour) => `https://jsonplaceholder.typicode.com/${sour}`

    const dataFetch = async () => {
        const resp = await fetch(urlBuild(btn))
        const data = await resp.json()
        setList(data)
    }
useEffect(()=>{dataFetch()}, [btn])

    return (
        <div>
<Tabs tabs={category} selectT={btn}/>
            {btn === 'users' && <Users users={list}/>}
            {btn === 'comments' && <Comments comments={list}/>}
            {btn === 'posts' && <Posts posts={list}/>}
            {btn === 'todos' && <Todos todos={list}/>}
        </div>
    );
}
