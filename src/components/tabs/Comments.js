import React from "react";

export function Comments({comments}) {

    return (
        <div>
            {comments.map(el => <h2 key={el.id}>{el.id} - {el.title ?? el.body}</h2>)}
        </div>
    );
}
