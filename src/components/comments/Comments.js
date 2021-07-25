import React from "react";

export function Comments({comments}) {

    return (
        <div>
            {comments.map(el => (<h2 key={el.id}>{el.id}-{el.name ?? el.title}</h2>))}
        </div>
    );
}
