import React from "react";

export function Comments({comments}) {

    return (
        <div>
            {comments.map(com => (<h1>{com.id} - {com.name}</h1>))}
        </div>
    );
}
