import React from "react";

export function Posts({posts}) {

    return (
        <div>
            {posts.map(el => (<h2 key={el.id}>{el.id}-{el.name ?? el.title}</h2>))}
        </div>
    );
}
